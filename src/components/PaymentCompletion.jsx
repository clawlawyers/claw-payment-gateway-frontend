import React from "react";
import Imglogo from "../assets/verified.png"
const PaymentSuccess = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900 p-4">
      <div className="w-full max-w-3xl bg-[#0f4444] p-6 rounded-lg border border-green-500 text-white text-center">
        {/* Header */}
        <h2 className="text-2xl font-semibold">Payment Confirmation</h2>
        <hr className="text-white w-full  mt-4"/>

        {/* Progress Bar */}
        <div className="flex items-center justify-center my-4 gap-0 w-full">
           <div className="w-4 h-4 bg-green-500 rounded-full"></div>
          <div className="w-60 h-[0.5px] bg-white"></div> 
           <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <div className="w-60 h-[0.5px] bg-white"></div> 
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
       </div>

        <div className="flex justify-between text-gray-400 text-sm">
          <span className="text-white ml-8">Payment Confirmation</span>
          <span className="text-white">Processing</span>
          <span className="text-white mr-8">Payment Completion</span>
        </div>
        <hr className="text-white w-full  mt-4"/>
        {/* Success Message */}
        <div className="mt-16 text-center">
  <div className="flex items-center justify-center">
    <img src={Imglogo} alt="" className="w-32 h-32" />
  </div>
  <h3 className="text-lg font-semibold mt-6">Payment Successful</h3>
  <p className="text-gray-400 mt-2">
    <span className="text-white font-bold">Thank You</span> for completing the purchase.<br />
    You will be soon redirected to the <span className="font-bold text-white">Home Page</span>.
  </p>
 </div>

</div>
</div>
  );
};

export default PaymentSuccess;
