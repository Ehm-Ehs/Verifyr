import React from "react";
import { useParams } from "react-router-dom";

const EmployeePage = () => {
  const { id } = useParams();

  // Sample employee data
  const employeeData = {
    1: {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      company: "ABC Corp",
      position: "Software Engineer",
    },
    2: {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      company: "XYZ Inc",
      position: "Product Manager",
    },
    // Add more employee data as needed
  };

  const employee = employeeData[id];

  if (!employee) {
    return <div>Employee not found.</div>;
  }

  return (
    <div>
      <h2>Employee Details</h2>
      <ul>
        <li>
          <strong>Name:</strong> {employee.name}
        </li>
        <li>
          <strong>Email:</strong> {employee.email}
        </li>
        <li>
          <strong>Company:</strong> {employee.company}
        </li>
        <li>
          <strong>Position:</strong> {employee.position}
        </li>
      </ul>
    </div>
  );
};

export default EmployeePage;
