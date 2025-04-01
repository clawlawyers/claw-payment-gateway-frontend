import React from "react";
import { useSelector } from "react-redux";
import cancelLogo from "../assets/Close.gif";

const PaymentFail = () => {
  const userDetails = useSelector((state) => state?.auth?.plan);
  const clickHandler = () => {
    if (userDetails?.homeSite) {
      window.location.href = userDetails.homeSite;
    }
  };
  return (
    <div className=" flex justify-center items-center">
      <div className="w-full max-w-3xl bg-[#0f4444]  rounded-lg  text-center border-red-500">
        <div className="">
          <h3 className="text-lg font-semibold mt-6">Payment Failed</h3>
          <div className="flex flex-col items-center mt-6">
            <img
              src={cancelLogo}
              alt="Payment Successful"
              className="h-28 w-28 sm:h-44 sm:w-44"
            />
            <p className="text-sm mt-2 text-gray-500">
              Please Retry Initiating The Payment.
              <br /> Inconvenience Is Deeply Regretted
            </p>
            <p onClick={clickHandler} className="cursor-pointer text-green-400">
              Go to Home
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentFail;
