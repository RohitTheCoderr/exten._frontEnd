import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuthStore } from '../../libs/zustand';
import { postData } from '../../utils/apiCall';
import { otpForm, signUpForm } from '../../libs/YupFormikValidator';
import { TextInput } from '../../components/formComponents/inputs/TextInput';
import { Button } from '../../components/formComponents/Buttons/Button';

function SignupPage() {
    const setToken = useAuthStore((state) => state.setToken)
    const [flag, setFlag] = useState(false);
    const [otpID, setOtpID] = useState("");

    const navigate = useNavigate()

    async function submitForm(values, actions) {
        const val = values.phoneNumberOrEmail;
        const isPhoneNumber = /^\d{10}$/.test(val);
        const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

        if (isPhoneNumber) {
            values.phoneNumber = "+91" + val;
        } else if (isEmail) {
            values.email = val;
        }

        delete values.phoneNumberOrEmail;
        delete values.confirm_password;

        console.log("before try", values);
        try {
            if (flag) {
                if (values.phoneNumber) {
                    values.otpID = otpID;
                }
                console.log("before submit", values);

                const userCreate = postData("/api/users/user/signup/", values);
                console.log("after submit", userCreate);


                toast.promise(
                    userCreate, {
                    pending: "user creating..",
                    success: "user created successfully..",
                    reject: "user can't be created.."
                });

                const response = await userCreate;
                setToken(response.data.token)
                navigate("/")
                actions.resetForm();
                toast("Sign up successful ✌");
            } else {
                const sendOTP = postData("/api/users/user/send_signup_otp/", values);
                console.log("otpdtata", sendOTP);

                toast.promise(
                    sendOTP, {
                    pending: "OTP sending..",
                    success: "OTP sent successfully..",
                    reject: "OTP can't be sent.."
                }
                )
                const otpData = await sendOTP;
                console.log("dataaa", otpData);

                if (isPhoneNumber) {
                    setOtpID(otpData?.data?.otpID);
                }
                if (otpData?.success) {
                    console.log("rohit checking success", otpData?.success);

                    setFlag(true);
                    console.log("flag valur", flag);

                    signUpForm.initialVaues.phoneNumberOrEmail = val
                }
            }

        } catch (error) {
            // actions.resetForm();
            toast(error?.response?.data?.message);
        }

    }

    return (
        <div className="flex items-center justify-center h-[80vh] bg-gray-200">
           <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
           <Formik
                    initialValues={flag ? { ...signUpForm.initialVaues, otpID } : otpForm.initialVaues}
                    enableReinitialize
                    validationSchema={flag ? signUpForm.validationSchema : otpForm.validationSchema}
                    onSubmit={submitForm}
                >
                    {() => (
                        <Form>
                            <h2 className='font-inter text-[1.2rem] text-center mb-4 sm:text-[1.4rem] font-bold text-[#001A6E] my-1 tracking-wider'>
                                {flag ? "Sign Up " : "Enter Email Or Phone No"}
                            </h2>
                            <p className='text-[13px] sm:text-[14px] text-center sm:text-start font-Poppins tracking-wider'>
                                {flag ? "Enter your details below" : "So that, We can verify you via OTP"}
                            </p>

                            <TextInput label="Email or Phone Number *" name="phoneNumberOrEmail" type="input" attribute={{ disabled: flag }} />
                            {flag && (
                                <>
                                    <TextInput label="Name *" name="name" type="input" />
                                    <TextInput label="Password *" name="password" type="password" />
                                    <TextInput label="Confirm Password *" name="confirm_password" type="password" />
                                    <TextInput label="OTP *" name="otp" type="text" />
                                </>
                            )}

                            <Button type="submit" name={flag ? "Create Account" : "Send OTP"} style="w-full mb-3 m-0 focus:ring-orange-500" />

                            <div className='list-none flex items-center justify-center sm:justify-start gap-6'>
                                <span className='text-[16px]'>Already have an account?</span>
                                <a className='no-underline hover:underline text-[#db4444] text-[13px]'>
                                    <Link to={"/login"}>Login</Link>
                                </a>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>

    );
}

export default SignupPage;
