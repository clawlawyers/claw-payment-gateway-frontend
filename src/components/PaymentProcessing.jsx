import React from "react";
import Imgloder from "../assets/Loading.gif";

const PaymentProcessing = () => {
  return (
    <div className=" flex justify-center items-center">
      <div className="w-full max-w-3xl bg-[#0f4444]  rounded-lg  text-center">
        <div className="mt-24">
          {/* <div className="w-28 h-28 border-4 border-gray-500 border-t-transparent rounded-full animate-spin mx-auto"></div> */}
           <div className="flex items-center justify-center">
              <img src={Imgloder} alt="" className="w-32 h-32" />
           </div>
          <h3 className="text-lg font-semibold mt-6">Payment Processing</h3>
          <p className="text-gray-400 mt-2">
            Please{" "}
            <span className="font-bold text-white">
              Do Not Refresh or Go Back
            </span>{" "}
            while payment is processing
            <br /> for uninterrupted payment completion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentProcessing;
