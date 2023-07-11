import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import CustomInput from "../formInstance/customInput";

function Login() {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    type: Yup.string().required("Type is required"),
  });
  const initialValues = {
    contactEmail: "",
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <CustomInput
          label="Company Address"
          name="address"
          type="text"
          className="my-custom-input"
        />
        <CustomInput
          label="Password"
          name="password"
          type="password"
          className="my-custom-input"
        />

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          type="submit"
        >
          Submit
        </button>
      </Form>
    </Formik>
  );
}

export default Login;
