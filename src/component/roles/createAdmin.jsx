import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import CustomInput from "../formInstance/customInput";

function CreateAdmin() {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    type: Yup.string().required("Type is required"),
  });
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    employeeId: "",
    companyRole: "",
    company: "",
    dateOfBirth: "",
    password: "",
    role: "text",
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="px-12 py-6">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <div className="flex justify-evenly">
            <CustomInput
              label="Full Name"
              name="name"
              type="text"
              className="my-custom-input"
            />
            <CustomInput
              label="Email Address"
              name="email"
              type="email"
              className="my-custom-input"
            />
            <CustomInput
              label="Phone"
              name="phone"
              type="number"
              className="my-custom-input"
            />
          </div>
          <div className="flex justify-evenly">
            <CustomInput
              label="Employee Id"
              name="employeeId"
              type="text"
              className="my-custom-input"
            />
            <CustomInput
              label="Job Role"
              name="companyRole"
              type="text"
              className="my-custom-input"
            />
            <CustomInput
              label="Role"
              name="role"
              type="select"
              className="my-custom-input"
            >
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </CustomInput>
          </div>
          <div className="flex justify-evenly">
            <CustomInput
              label="Date of Birth"
              name="dateOfBirth"
              type="date"
              className="my-custom-input"
            />
            <CustomInput
              label="Company"
              name="company"
              type="text"
              className="my-custom-input"
            />
            <CustomInput
              label="Password"
              name="password"
              type="password"
              className="my-custom-input"
            />
          </div>

          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            type="submit"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreateAdmin;
