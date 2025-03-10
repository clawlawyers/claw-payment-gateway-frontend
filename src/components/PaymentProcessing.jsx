import React from "react";

const PaymentProcessing = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900 p-4">
      <div className="w-full max-w-3xl bg-[#0f4444] p-6 rounded-lg border border-green-500 text-white text-center">
        {/* Header */}
        <h2 className="text-2xl font-semibold">Payment Confirmation</h2>
        <hr className="text-white w-full  mt-4"/>
        {/* Progress Bar */}
        <div className="flex items-center justify-center my-4 gap-0 w-full">
           <div className="w-4 h-4 bg-green-500 rounded-full"></div>
          <div className="w-60 h-[0.5px] bg-white"></div> {/* Increased width */}
           <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <div className="w-60 h-[0.5px] bg-white"></div> {/* Increased width */}
            <div className="w-4 h-4 bg-white rounded-full"></div>
       </div>

        <div className="flex justify-between text-gray-400 text-sm">
          <span className="text-white ml-8">Payment Confirmation</span>
          <span className="text-white">Processing</span>
          <span className="text-white mr-8">Payment Completion</span>
        </div>
        <hr className="text-white w-full  mt-4"/>
        {/* Processing Message */}
        <div className="mt-24">
          <div className="w-6 h-6 border-4 border-gray-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <h3 className="text-lg font-semibold mt-6">Payment Processing</h3>
          <p className="text-gray-400 mt-2">
            Please <span className="font-bold text-white">Do Not Refresh or Go Back</span> while payment is processing
            <br /> for uninterrupted payment completion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentProcessing;
