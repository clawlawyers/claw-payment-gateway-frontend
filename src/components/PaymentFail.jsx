import React from "react";

const PaymentFail = () => {
  return (
    <div className=" flex justify-center items-center">
      <div className="w-full max-w-3xl bg-[#0f4444]  rounded-lg  text-center border-red-500">
        <div className="mt-40">
          <h3 className="text-lg font-semibold mt-6">Payment Failed</h3>
          <p className="text-sm mt-2 text-gray-500">Please Retry Initiating The Payment.<br /> Inconvenience Is Deeply Regretted</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentFail;
