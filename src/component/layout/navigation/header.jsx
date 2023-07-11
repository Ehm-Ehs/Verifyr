import React from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import logo from "../../asset/hand_drawn_tick.svg";
import SearchTab from "../../verify/searchVerify";

function Header() {
  return (
    <div className="border-gray-800 text-grey-600 py-4 px-8 flex justify-between">
      <div>
        <Link to="/" className="flex">
          <ReactSVG src={logo} className="" />
          <h1 className="text-grey-600 py-3 font-bold">VERIFYR</h1>
        </Link>
      </div>
      <div>
        <SearchTab />
      </div>
      <div>
        <ul className="flex py-3">
          <li className="mr-4">
            <Link to="/admin" className="text-grey-600 hover:text-gray-400">
              Add Staffs
            </Link>
          </li>
          <li className="mr-4">
            <Link to="/auth" className="text-grey-600 hover:text-gray-400">
              Add Company
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
