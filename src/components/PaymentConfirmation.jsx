import React from "react";
import { useState, useEffect } from "react";
import PaymentProcessing from "./PaymentProcessing";
import PaymentSuccess from "./PaymentCompletion";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setPlan } from "../features/gpt/authSlice";
import PaymentFail from "./PaymentFail";
import { useNavigate } from "react-router-dom";
import Successfully from "./Successfully";
const PaymentConfirmation = () => {
  const [step, setStep] = useState(1);
  const userDetails = useSelector((state) => state?.auth?.plan);
  console.log(userDetails);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  // console.log(userDetails);
  // console.log(userDetails?.homeSite);
  // console.log(userDetails?.createPaymentPayload);
  // console.log(userDetails?.createPaymentURL);
  // console.log(userDetails?.verifyPaymentPayload);
  // console.log(userDetails?.verifyPaymentURL);
  console.log(userDetails?.isLive);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.size !== 0) {
      const encodedStringBtoA = urlParams.get("user");
      const decodedString = atob(encodedStringBtoA);
      console.log("Decoded String:", decodedString);

      const sentUser = JSON.parse(decodedString);

      dispatch(setPlan(sentUser));
      window.history.replaceState({}, document.title, window.location.pathname);
    } else {
      alert("user details not found!");
    }
  }, [dispatch]);

  const loadRazorpay = async () => {
    setLoading(true);
    setStep(2);

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onerror = () => {
      setLoading(false);
      alert("Razorpay SDK failed to load. Are you online?");
    };
    script.onload = async () => {
      try {
        const result = await axios.post(
          userDetails?.createPaymentURL,
          userDetails?.createPaymentPayload
        );

        console.log("Payment created");
        console.log(result);
        let id = "";
        let subscription_id = "";
        let currency = "";
        if (userDetails?.createPaymentPayload?.planName === "campaign") {
          subscription_id = result?.data?.razorpaySubscription?.id;
        } else {
          currency = result?.data?.razorpayOrder?.currency;
          id = result?.data?.razorpayOrder?.id;
        }

        let _id =
          userDetails?.createPaymentPayload?.planName !== "Talk to Expert"
            ? result?.data?.createdOrder?._id
            : "";

        let options;
        if (userDetails?.createPaymentPayload?.planName === "campaign") {
          options = {
            key:
              userDetails?.isLive === "true"
                ? import.meta.env.VITE_RAZORPAY_LIVE_API_KEY
                : import.meta.env.VITE_RAZORPAY_TEST_API_KEY,
            subscription_id: subscription_id,
            name: "CLAW LEGALTECH PRIVATE LIMITED",
            description: "Subscription",
            handler: async function (response) {
              console.log(response);
              const data = {
                razorpay_subscription_id: response.razorpay_subscription_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                ...userDetails?.verifyPaymentPayload,
              };
              console.log(data);
              console.log(response);

              await axios.post(userDetails?.verifyPaymentURL, data);
              console.log("Payment verifed");
              setLoading(false);
              // setStep(3);
              navigate(
                `/success/${userDetails?.isLive}/${userDetails?.createPaymentPayload?.planName}`
              );
            },
            // Track when the modal is closed by the user (cancellation)
            modal: {
              ondismiss: function () {
                console.log("Checkout form closed by user");
                setLoading(false);
                setStep(4);
              },
            },
            theme: { color: "#3399cc" },
          };
        } else {
          options = {
            key:
              userDetails?.isLive === "true"
                ? import.meta.env.VITE_RAZORPAY_LIVE_API_KEY
                : import.meta.env.VITE_RAZORPAY_TEST_API_KEY,
            currency: currency,
            name: "CLAW LEGALTECH PRIVATE LIMITED",
            description: "Transaction",
            order_id: id,
            handler: async function (response) {
              const data = {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                _id,
                ...userDetails?.verifyPaymentPayload,
              };
              console.log("Payment verifed");
              await axios.post(userDetails?.verifyPaymentURL, data);
              console.log("Payment verifed");
              setLoading(false);
              // setStep(3);
              navigate(
                `/success/${userDetails?.isLive}/${userDetails?.createPaymentPayload?.planName}`
              );
            },
            // Track when the modal is closed by the user (cancellation)
            modal: {
              ondismiss: function () {
                console.log("Checkout form closed by user");
                setLoading(false);
                setStep(4);
              },
            },
            theme: { color: "#3399cc" },
          };
        }
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      } catch (error) {
        setLoading(false);
        setStep(4);
        alert(error.message);
      }
    };
    document.body.appendChild(script);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-[#055151] to-[#447373] p-4">
      <div className="h-[90%] w-full max-w-3xl bg-[#0f4444] p-6 rounded-lg border border-green-500 text-white">
        <h2 className="text-2xl font-semibold text-center">
          Payment Confirmation
        </h2>
        <hr className="text-white w-full  mt-4" />

        {step === 1 && (
          <div className="flex items-center justify-center my-4 gap-0 w-full">
            <div className="sm:w-4 w-4 sm:h-4 h-3 bg-green-500 rounded-full"></div>
            <div className="w-60 h-[1px] bg-white"></div>
            <div className="sm:w-4 w-4 sm:h-4 h-3 bg-white rounded-full"></div>
            <div className="w-60 h-[1px] bg-white"></div>
            <div className="sm:w-4 w-4 sm:h-4 h-3 bg-white rounded-full"></div>
          </div>
        )}

        {step === 2 && (
          <div className="flex items-center justify-center my-4 gap-0 w-full">
            <div className="sm:w-4 w-4 sm:h-4 h-3 bg-green-500 rounded-full"></div>
            <div className="w-60 h-[1px] bg-white"></div>
            <div className="sm:w-4 w-4 sm:h-4 h-3 bg-green-500 rounded-full"></div>
            <div className="w-60 h-[1px] bg-white"></div>
            <div className="sm:w-4 w-4 sm:h-4 h-3 bg-white rounded-full"></div>
          </div>
        )}

        {step === 3 && (
          <div className="flex items-center justify-center my-4 gap-0 w-full">
            <div className="sm:w-4 w-4 sm:h-4 h-3 bg-green-500 rounded-full"></div>
            <div className="w-60 h-[1px] bg-white"></div>
            <div className="sm:w-4 w-4 sm:h-4 h-3 bg-green-500 rounded-full"></div>
            <div className="w-60 h-[1px] bg-white"></div>
            <div className="sm:w-4 w-4 sm:h-4 h-3 bg-green-500 rounded-full"></div>
          </div>
        )}

        {step === 4 && (
          <div className="flex items-center justify-center my-4 gap-0 w-full">
            <div className="sm:w-4 w-4 sm:h-4 h-3 bg-green-500 rounded-full"></div>
            <div className="w-60 h-[1px] bg-white"></div>
            <div className="sm:w-4 w-4 sm:h-4 h-3 bg-green-500 rounded-full"></div>
            <div className="w-60 h-[1px] bg-white"></div>
            <div className="sm:w-4 w-4 sm:h-4 h-3 bg-red-500 rounded-full"></div>
          </div>
        )}

        <div className="flex justify-between text-gray-400 text-sm">
          <span className="text-white sm:ml-8 sm:text-[15px] text-[13px]">
            Payment Confirmation
          </span>
          <span className="text-white sm:text-[15px] text-[13px] mr-[22px]">
            Processing
          </span>
          {step === 4 ? (
            <span className="text-white sm:text-[15px] text-[13px] mr-[52px]">
              Payment Failed
            </span>
          ) : (
            <span className="text-white sm:text-[15px] text-[13px] mr-[28px]">
              Payment Completed
            </span>
          )}
        </div>
        <hr className="text-white w-full  mt-4" />

        {step === 1 && (
          <>
            <div className="grid grid-cols-1 gap-6 mt-6">
              <div className="bg-gray-500 p-4 rounded-lg">
                <h3 className="font-medium text-sm mb-3 text-center text-white">
                  Items Added
                </h3>
                <hr className="border-white w-full mt-3 mb-4" />

                <div className="p-4 bg-teal-900 rounded-md flex flex-col text-white">
                  <div className="flex justify-between items-center mb-2">
                    <div className=" gap-2">
                      <h4 className="font-medium">CLAW Package</h4>
                      <p className="text-sm text-gray-300">
                        {userDetails?.createPaymentPayload?.billingCycle ||
                          userDetails?.createPaymentPayload?.planName ||
                          userDetails?.createPaymentPayload?.planType}
                      </p>
                    </div>
                    <span className="font-semibold text-lg">
                      ₹{" "}
                      {userDetails?.createPaymentPayload?.planName ===
                      "campaign"
                        ? "99"
                        : userDetails?.createPaymentPayload?.amount}
                    </span>
                  </div>

                  <hr className="border-white w-full my-2" />

                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total Payable:</span>
                    <span>
                      ₹{" "}
                      {userDetails?.createPaymentPayload?.planName ===
                      "campaign"
                        ? "99"
                        : userDetails?.createPaymentPayload?.amount}
                    </span>
                  </div>

                  <button
                    className="bg-teal-600 hover:bg-teal-700 transition px-4 py-3 mt-4 rounded-md font-medium text-sm w-full"
                    onClick={loadRazorpay}>
                    Proceed To Payment
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {step === 2 && <PaymentProcessing />}

        {/* {step === 3 && <PaymentSuccess />} */}
        {step === 3 && <Successfully />}

        {step === 4 && <PaymentFail />}
      </div>
    </div>
  );
};

export default PaymentConfirmation;
