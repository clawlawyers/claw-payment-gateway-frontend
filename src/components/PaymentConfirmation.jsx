import React from "react";
import { useState,useEffect } from "react";
import PaymentProcessing from "./PaymentProcessing";
import PaymentSuccess from "./PaymentCompletion";

const PaymentConfirmation = () => {
  const [step, setStep] = useState(1); 

  const handleProceedToPayment = () => {
    setStep(2); 
  };

  useEffect(() => {
    if (step === 2) {
      const timer = setTimeout(() => {
        setStep(3); 
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900 p-4">
      <div className="w-full max-w-3xl bg-[#0f4444] p-6 rounded-lg border border-green-500 text-white">
        <h2 className="text-2xl font-semibold text-center">
          Payment Confirmation
        </h2>
        <hr className="text-white w-full  mt-4" />

     {step===1 && (
        <div className="flex items-center justify-center my-4 gap-0 w-full">
          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
          <div className="w-60 h-[1px] bg-white"></div>
          <div className="w-4 h-4 bg-white rounded-full"></div>
          <div className="w-60 h-[1px] bg-white"></div>
          <div className="w-4 h-4 bg-white rounded-full"></div>
        </div>
      )}

      {step===2 && (
        <div className="flex items-center justify-center my-4 gap-0 w-full">
          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
          <div className="w-60 h-[1px] bg-white"></div>
          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
          <div className="w-60 h-[1px] bg-white"></div>
          <div className="w-4 h-4 bg-white rounded-full"></div>
        </div>
      )}

      {step===3 && (
        <div className="flex items-center justify-center my-4 gap-0 w-full">
          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
          <div className="w-60 h-[1px] bg-white"></div>
          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
          <div className="w-60 h-[1px] bg-white"></div>
          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
        </div>
      )}

        <div className="flex justify-between text-gray-400 text-sm">
          <span className="text-white ml-8">Payment Confirmation</span>
          <span className="text-white">Processing</span>
          <span className="text-white mr-8">Payment Completion</span>
        </div>
        <hr className="text-white w-full  mt-4" />

        {step===1 && (
          <>
        <div className="grid grid-cols-2 gap-6 mt-6">
          <div className="bg-[#9B9B9B] p-4 rounded-lg ">
            <h3 className="font-medium text-sm mb-3 text-center">
              Items Added
            </h3>
            <hr className="text-white w-full  mt-3 mb-4" />
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

          <div className="bg-[#9B9B9B] p-4 rounded-lg">
            <h3 className="font-medium text-sm mb-3 text-center">
              Payment Invoice
            </h3>
            <hr className="text-white w-full  mt-2 mb-4" />
            <div className="flex justify-between font-medium text-sm text-[#1D2330]">
              <span>Item Total:</span>
              <span className="font-medium text-sm text-[#1D2330]">₹ 4999</span>
            </div>
            <div className="flex justify-between font-medium text-sm mt-2 text-[#1D2330]">
              <span>Coupon Discount:</span>
              <span className="font-medium text-sm text-[#1D2330]">₹ 299</span>
            </div>

            <hr className="text-white w-full  mt-4" />
            <div className="flex justify-between text-[17px] font-semibold mt-12 text-[#1D2330]">
              <span>Total Payable:</span>
              <span>₹ 4700</span>
            </div>
          </div>
          
        </div>
        <div className="mt-6 text-center">
          <button className="bg-teal-600 px-6 py-3 rounded-md font-medium text-sm w-[330px]" onClick={handleProceedToPayment}>
            Proceed To Payment
          </button>
        </div>
        
        </>
      )}
         
      {step===2 && (   
         <PaymentProcessing/>
      )}

      {step===3 && (
      <PaymentSuccess/>
      )}
      </div>
    </div>
  );
};

export default PaymentConfirmation;
