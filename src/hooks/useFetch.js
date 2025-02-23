import { useState,useEffect } from "react";
import { getData } from "../utils/apiCall";
// import { getFetch } from "@src/utils/apiCall";


export const useFetchLeads = () => {
    const [userleads, setUserleads] = useState([]);

    useEffect(() => {
        fetchMyLead();
    }, []);

    async function fetchMyLead() {
        try {
            const fetchLeads = getData("/api/users/lead/gets_leads");
            const response = await fetchLeads;
            console.log("userleads in useFatch file", response);
            
            setUserleads(response?.data?.Leads);
        } catch (error) {
            // toast.error(error?.response?.data?.message || "An error occurred.");
            console.log(error?.response?.data?.message || "An error occurred.");
        }
    }

    return { userleads ,refetch: fetchMyLead};
};

//  fetching All User's Leads

export const useFetchAllLeads = () => {
    const [alluserleads, setAlluserleads] = useState([]);

    useEffect(() => {
        fetchAllLead();
    }, []);

    async function fetchAllLead() {
        try {
            const fetchLeads = getData("/api/users/lead/getsAll_leads");
            const response = await fetchLeads;
            console.log("userleads in useFatch file", response);
            
            setAlluserleads(response?.data?.Leads);
        } catch (error) {
            // toast.error(error?.response?.data?.message || "An error occurred.");
            console.log(error?.response?.data?.message || "An error occurred.");
        }
    }

    return { alluserleads ,refetch: fetchAllLead};
};



export default function useFetch(path){
const [data,setData] = useState("")
const [error,setError] = useState("")

useEffect(()=>{
    getData(path)
    .then((data) => setData(data))
    .catch((error) => setError(error))
}, [path])

    return { data, error }
}

