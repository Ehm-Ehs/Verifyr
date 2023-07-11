import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import CustomInput from "../formInstance/customInput";

function CreateCompany() {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    type: Yup.string().required("Type is required"),
  });
  const initialValues = {
    name: "",
    address: "",
    cacNo: "",
    contactEmail: "",
    website: "",
    contactPhone: "",
    logo: "",
    type: "text",
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
          label="Company Name"
          name="name"
          type="text"
          className="my-custom-input"
        />
        <CustomInput
          label="Company Address"
          name="address"
          type="text"
          className="my-custom-input"
        />
        {/* <CustomInput
          label="Name"
          name="name"
          type="text"
          className="my-custom-input"
        /> */}
        <CustomInput
          label="Registration Number"
          name="regNo"
          type="number"
          className="my-custom-input"
        />
        <CustomInput
          label="Email Address"
          name="contactEmail"
          type="text"
          className="my-custom-input"
        />
        <CustomInput
          label="Website"
          name="website"
          type="text"
          className="my-custom-input"
        />
        <CustomInput
          label="Phone"
          name="contactPhone"
          type="number"
          className="my-custom-input"
        />
        <CustomInput
          label="Logo"
          name="logo"
          type="file"
          className="my-custom-input"
        />

        {/* <CustomInput
          label="c"
          name="type"
          type="select"
          className="my-custom-input"
        >
          <option value="text">Text</option>
          <option value="select">Select</option>
          <option value="number">Number</option>
          <option value="password">Password</option>
          <option value="email">Email</option>
        </CustomInput> */}
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

export default CreateCompany;
