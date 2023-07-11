import React, { useState } from "react";
import { Link } from "react-router-dom";

function VerifyByCompany({ data }) {
  const [searchText, setSearchText] = useState("");
  const [filteredCompanies, setFilteredCompanies] = useState([]);

  const handleSearch = (event) => {
    const filteredCompanies = data.filter((company) =>
      company.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredCompanies(filteredCompanies);
  };
  return (
    <div>
      <div>
        <div>Verify by Company</div>
        <div>
          <div className="flex">
            <input
              type="text"
              placeholder="Search by company"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="border border-gray-300 px-4 py-2 rounded-md w-96"
            />
            <button
              onClick={handleSearch}
              className="bg-blue-500 text-white px-4 py-1 rounded-md mx-5"
            >
              Search
            </button>
          </div>
          {filteredCompanies.length > 0 ? (
            <ul>
              {filteredCompanies.map((company) => (
                <li key={company.id} className="mb-2">
                  <Link to={`/company/${company.id}`}>{company.name}</Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>No companies found.</p>
          )}
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default VerifyByCompany;
