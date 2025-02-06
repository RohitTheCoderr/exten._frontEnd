import { ErrorMessage, Field } from "formik"

export function TextInput({ label, name, type, labelColor, value, style, attribute }) {
  return (
    <div className="w-[100%] m-auto rounded-sm my-3">
      {label ?
        <label
          className={`text-[0.8rem]  py-1 text-start ${labelColor ? labelColor : "text-blue-800"}`}
          htmlFor={label}
        >
          {label}
        </label>
        : null
      }
      <Field
        className={`h-[2.5rem] text-[18px] border-b-[1px] bg-transparent  border-blue-950 rounded-sm w-[100%] outline-none  ${style} `}
        name={name}
        autoComplete="off"
        type={type}
        value={value}
        placeholder={`Enter ${name}`}
        {...attribute}
      />
      <div className="text-red-500 h-3 text-xs">
        <ErrorMessage name={name} />
      </div>

    </div>
  )
}

