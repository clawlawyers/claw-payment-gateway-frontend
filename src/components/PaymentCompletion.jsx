import React from "react";
import Imglogo from "../assets/Verified.gif";
import { useSelector } from "react-redux";
const PaymentSuccess = () => {
  const userDetails = useSelector((state) => state?.auth?.plan);
  const clickHandler = () => {
    if (userDetails?.homeSite) {
      window.location.href = userDetails.homeSite;
    }
  };
  return (
    <div className=" flex justify-center items-center ">
      <div className="w-full max-w-3xl bg-[#0f4444] rounded-lg  text-white text-center">
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center">
            <img src={Imglogo} alt="" className="w-32 h-32" />
          </div>
          <h3 className="text-lg font-semibold mt-6">Payment Successful</h3>
          <p className="text-gray-400 mt-2">
            <span className="text-white font-bold">Thank You</span> for
            completing the purchase.
            <br />
            You will be soon redirected to the{" "}
            <span className="font-bold text-white">
              <button onClick={clickHandler}>Home Page </button>
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
