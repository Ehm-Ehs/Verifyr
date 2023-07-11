import React, { useEffect, useRef, useState } from "react";
import EmployeePage from "../company/employee";

const SearchTab = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredNames, setFilteredNames] = useState([]);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const companiesData = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      company: "ABC Corp",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      company: "XYZ Inc",
    },
    {
      id: 3,
      name: "Michael Johnson",
      email: "michael.johnson@example.com",
      company: "ABC Corp",
    },
    {
      id: 4,
      name: "Emma Davis",
      email: "emma.davis@example.com",
      company: "XYZ Inc",
    },
    // Add more company data as needed
  ];

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  const handleSearch = (event) => {
    const searchText = event.target.value;
    setSearchText(searchText);

    const filteredNames = companiesData.filter(
      (data) =>
        data.name.toLowerCase().includes(searchText.toLowerCase()) ||
        data.email.toLowerCase().includes(searchText.toLowerCase()) ||
        data.company.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredNames(filteredNames);
    setDropdownOpen(true);
    setSelectedEmployee(null);
  };

  const handleEmployeeClick = (employeeId) => {
    const selectedEmployee = companiesData.find(
      (data) => data.id === employeeId
    );
    if (selectedEmployee) {
      setSelectedEmployee(selectedEmployee);

      // Perform any necessary actions for the selected employee
      console.log("Selected Employee:", selectedEmployee);
    }
    setDropdownOpen(false);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search by name, email, or company"
        value={searchText}
        onChange={handleSearch}
        className="border border-gray-300 px-4 py-2 rounded-md w-full mb-4 w-96"
      />

      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute z-10 bg-white border border-gray-300 rounded-md shadow-md w-full"
        >
          {filteredNames.length > 0 ? (
            filteredNames.map((data) => (
              <button
                key={data.id}
                className="block w-full py-2 px-4 text-left hover:bg-gray-100"
                onClick={() => handleEmployeeClick(data.id)}
              >
                <strong>{data.name}</strong> ({data.company}) - {data.email}
              </button>
            ))
          ) : (
            <p className="p-4">No results found.</p>
          )}
        </div>
      )}

      {selectedEmployee && <EmployeePage employee={selectedEmployee} />}
    </div>
  );
};

export default SearchTab;
