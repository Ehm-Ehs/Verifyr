import React from "react";
import VerifyByCompany from "./verifyByCompany";
import VerifyByData from "./verifyByData";

function StaffVerify() {
  return (
    <div className="flex p-40">
      <div className="px-20">
        <VerifyByCompany />
      </div>
      <div className="px-20">
        <VerifyByData />
      </div>
    </div>
  );
}

export default StaffVerify;
