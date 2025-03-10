import React from "react";

const PaymentConfirmation = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900 p-4">
      <div className="w-full max-w-3xl bg-[#0f4444] p-6 rounded-lg border border-green-500 text-white">
        {/* Header */}
        <h2 className="text-2xl font-semibold text-center">Payment Confirmation</h2>
        <hr className="text-white w-full  mt-4"/>

        {/* Progress Bar */}
        <div className="flex items-center justify-center my-4 gap-0 w-full">
           <div className="w-4 h-4 bg-green-500 rounded-full"></div>
          <div className="w-60 h-[1px] bg-white"></div> {/* Increased width */}
           <div className="w-4 h-4 bg-white rounded-full"></div>
            <div className="w-60 h-[1px] bg-white"></div> {/* Increased width */}
            <div className="w-4 h-4 bg-white rounded-full"></div>
       </div>

        <div className="flex justify-between text-gray-400 text-sm">
          <span className="text-white ml-8">Payment Confirmation</span>
          <span className="text-white">Processing</span>
          <span className="text-white mr-8">Payment Completion</span>
        </div>
        <hr className="text-white w-full  mt-4"/>
        {/* Content */}
        <div className="grid grid-cols-2 gap-6 mt-6">
          {/* Items Added */}
          <div className="bg-[#9B9B9B] p-4 rounded-lg ">
            <h3 className="font-medium text-sm mb-3 text-center">Items Added</h3>
            <hr className="text-white w-full  mt-3 mb-4"/>
            <div className="p-4 bg-[#0E4249] rounded-md flex justify-between items-center">
              <div>
                <h4 className="font-medium">CLAW Package</h4>
                <p className="text-sm text-gray-400">(Monthly)</p>
              </div>
              <span className="font-semibold">₹ 4599</span>
            </div>
            <div className="p-4 bg-[#0E4249] rounded-md flex justify-between items-center mt-2">
              <div>
                <h4 className="font-medium">Add – On Tokens</h4>
                <p className="text-sm text-gray-400">(Adira AI)</p>
              </div>
              <span className="font-semibold">₹ 400</span>
            </div>
          </div>

          {/* Payment Invoice */}
          <div className="bg-[#9B9B9B] p-4 rounded-lg">
            <h3 className="font-medium text-sm mb-3 text-center">Payment Invoice</h3>
            <hr className="text-white w-full  mt-2 mb-4"/>
            <div className="flex justify-between font-medium text-sm text-[#1D2330]">
              <span>Item Total:</span>
              <span className="font-medium text-sm text-[#1D2330]">₹ 4999</span>
            </div>
            <div className="flex justify-between font-medium text-sm mt-2 text-[#1D2330]">
              <span>Coupon Discount:</span>
              <span className="font-medium text-sm text-[#1D2330]">₹ 299</span>
            </div>
            {/* Coupon Input */}
            {/* <div className="mt-4 flex gap-2">
              <input
                type="text"
                placeholder="Have A Coupon?"
                className="flex-1 px-3 py-2 rounded-md bg-white text-white border border-gray-600"
              />
              <button className="bg-teal-600 px-4 py-2 rounded-md">Verify</button>
            </div> */}
            {/* Total Payable */}
            <hr className="text-white w-full  mt-4"/>
            <div className="flex justify-between text-[17px] font-semibold mt-4 text-[#1D2330]">

              <span>Total Payable:</span>
              <span>₹ 4700</span>
            </div>
          </div>
        </div>

        {/* Proceed Button */}
        <div className="mt-6 text-center">  
        {/* ml-96 for margin */}
          <button className="bg-teal-600 px-6 py-3 rounded-md font-medium text-sm w-[330px]">Proceed To Payment</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentConfirmation;
