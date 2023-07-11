import React from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import pic from "../asset/employee.svg";
import { Button } from "../utils/button";

function HeroPage() {
  return (
    <div className="flex">
      <div>
        <ReactSVG src={pic} />
      </div>
      <div className="container mx-auto px-4 py-52">
        <div>
          <h1 className="text-5xl font-bold mb-4 ">Just a click away</h1>
          <p>Want to confirm your employee's previous work experience</p>
        </div>
        <div className="flex">
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3">
            <Link to="/auth">Add your Company</Link>{" "}
          </div>
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3">
            <Link to="/verify">Verify your Employee</Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroPage;
