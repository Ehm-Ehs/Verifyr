import React, { useState } from "react";

const Company = ({ companyName }) => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const companiesData = [
    { id: 1, company: "ABC Corp", data: ["Data 1", "Data 2", "Data 3"] },
    { id: 2, company: "XYZ Inc", data: ["Data 4", "Data 5", "Data 6"] },
    { id: 3, company: "123 Company", data: ["Data 7", "Data 8", "Data 9"] },
    {
      id: 4,
      company: "Tech Solutions",
      data: ["Data 10", "Data 11", "Data 12"],
    },
    // Add more company data as needed
  ];

  const handleSearch = (event) => {
    const searchText = event.target.value;
    setSearchText(searchText);

    const companyData = companiesData.find(
      (company) => company.company === companyName
    );
    if (companyData) {
      const filteredResults = companyData.data.filter((data) =>
        data.toLowerCase().includes(searchText.toLowerCase())
      );
      setSearchResults(filteredResults);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div>
      <h2>Search for {companyName} Data</h2>
      <input
        type="text"
        placeholder={`Search ${companyName} data`}
        value={searchText}
        onChange={handleSearch}
        className="border border-gray-300 px-4 py-2 rounded-md w-full mb-4"
      />

      <div>
        <h3>Search Results</h3>
        {searchResults.length > 0 ? (
          <ul>
            {searchResults.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        ) : (
          <p>No results found.</p>
        )}
      </div>

      {/* Other components and functionalities for the company data search */}
    </div>
  );
};

export default Company;
