import React, { useState } from "react";
import EmployeePage from "../company/employee";

function VerifyByData({ data }) {
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = () => {
    const filteredData = data.filter((item) => {
      const nameMatch = item.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
      const emailMatch = item.email
        .toLowerCase()
        .includes(searchText.toLowerCase());
      return nameMatch || emailMatch;
    });
    setSearchResult(filteredData);
  };

  return (
    <>
      <div>Verify by Company</div>
      <div>
        <div className="flex">
          <input
            type="text"
            placeholder="Search by name or email"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="border border-gray-300 px-4 py-1 rounded-md w-96 "
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mx-5"
          >
            Search
          </button>
        </div>
        {searchResult.length > 0 ? (
          <EmployeePage data={searchResult} />
        ) : (
          <p>No search result found</p>
        )}
      </div>
    </>
  );
}

export default VerifyByData;
