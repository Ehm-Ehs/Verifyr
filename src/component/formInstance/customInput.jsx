import React from "react";
import { useField } from "formik";

const CustomInput = ({ label, type, className, ...props }) => {
  const [field, meta] = useField(props);

  const inputProps = {
    className: `border border-gray-300 px-2 py-1 rounded-md w-96 ${className}`,
    ...field,
    ...props,
  };

  return (
    <div className="mb-4">
      <label
        htmlFor={props.name}
        className="block mb-2 font-medium text-gray-700"
      >
        {label}
      </label>
      {type === "select" ? (
        <select {...inputProps} />
      ) : (
        <input type={type} {...inputProps} />
      )}
      {meta.touched && meta.error ? (
        <div className="text-red-600 text-sm mt-1">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default CustomInput;
