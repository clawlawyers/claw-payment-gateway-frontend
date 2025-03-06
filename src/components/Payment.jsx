import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPlan } from "../features/gpt/authSlice";
import { NODE_API_ENDPOINT } from "../utils/utils";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userDetails = useSelector((state) => state?.auth?.plan);
  console.log(userDetails);
  console.log(userDetails?.homeSite);
  console.log(userDetails?.createPaymentPayload);
  console.log(userDetails?.createPaymentURL);
  console.log(userDetails?.verifyPaymentPayload);
  console.log(userDetails?.verifyPaymentURL);
  console.log(userDetails?.isLive); // boolean // if true then use live key and live node end point else test and dev node end point

  const [paymentVerified, setPaymentVerified] = useState(false);
  const [receipt, setReceipt] = useState(`receipt_${Date.now()}`);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.size !== 0) {
      const encodedStringBtoA = urlParams.get("user");
      const decodedString = atob(encodedStringBtoA);
      console.log("Decoded String:", decodedString);

      const sentUser = JSON.parse(decodedString);

      // Dispatch the user data to Redux state
      dispatch(setPlan(sentUser));
    } else {
      alert("user details not found!");
    }
  }, [dispatch]); // Only re-run if dispatch changes

  const loadRazorpay = async () => {
    setLoading(true);
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

        console.log(result);

        const { id, currency } = result?.data?.razorpayOrder;
        let _id;
        if (userDetails?.createPaymentPayload?.planName !== "Talk to Expert") {
          _id = result?.data?.createdOrder?._id;
        } else {
          _id = "";
        }
        const options = {
          key: userDetails?.isLive
            ? import.meta.env.VITE_RAZORPAY_LIVE_API_KEY
            : import.meta.env.VITE_RAZORPAY_TEST_API_KEY,
          //   amount: String(amount),
          currency: currency,
          name: "CLAW LEGALTECH PRIVATE LIMITED",
          description: "Transaction",
          order_id: id,
          handler: async function (response) {
            console.log(response);
            const data = {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              _id,
              ...userDetails?.verifyPaymentPayload,
            };

            console.log(response);
            console.log("Rauhl Prajapati!!");
            const result = await axios.post(
              userDetails?.verifyPaymentURL,
              data
            );
            // alert(result.data.status);

            setPaymentVerified(true);
            console.log(result.data);
            setLoading(false);
            // dispatch(setActivePlanDetails(result.data.plan.plan));
            // dispatch(retrieveActivePlanUser());
          },
          // prefill: {
          //   name: currentUser?.name,
          //   email: currentUser?.email,
          //   contact: currentUser?.phoneNumber,
          // },
          theme: {
            color: "#3399cc",
          },
        };

        console.log(options);

        const paymentObject = new window.Razorpay(options);

        console.log(paymentObject);
        paymentObject.open();
      } catch (error) {
        setLoading(false);
        alert(error.message);
      } finally {
        setPaymentVerified(false);
        setLoading(false);
      }
    };
    document.body.appendChild(script);
  };

  const clickHandler = () => {
    if (userDetails?.homeSite) {
      window.location.href = userDetails.homeSite; // External website navigation
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#055151] to-[#447373] px-4">
      {!paymentVerified ? (
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
          <h1 className="text-xl font-bold text-gray-800 text-center mb-2">
            Payment Confirmation
          </h1>
          <p className="text-gray-600 text-center mb-4">
            Please confirm your purchase before proceeding.
          </p>

          <div className="bg-[#055151] text-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-2">
              <div>
                <p className="text-lg font-semibold">Package</p>
                <p className="text-sm text-gray-200">
                  (
                  {userDetails?.createPaymentPayload?.billingCycle ||
                    userDetails?.createPaymentPayload?.planName ||
                    userDetails?.createPaymentPayload?.planType}
                  )
                </p>
              </div>
              <p className="text-lg font-bold">
                ₹ {userDetails?.createPaymentPayload?.amount}
              </p>
            </div>
            <hr className="border-gray-300 my-2" />
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold">Total Payable</p>
              <p className="text-lg font-bold">
                ₹ {userDetails?.createPaymentPayload?.amount}
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <button
              className="bg-[#055151] text-white font-semibold py-2 rounded-lg shadow-md hover:bg-[#033d3d] transition"
              onClick={loadRazorpay}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin w-6 h-6 text-gray-700"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="3"
                      cy="3"
                      r="2"
                      stroke="currentColor"
                      stroke-width="2"
                    />
                  </svg>
                </div>
              ) : (
                "Pay Now"
              )}
              {/* Proceed to Payment */}
            </button>
            <button
              className="bg-gray-300 text-gray-700 font-semibold py-2 rounded-lg hover:bg-gray-400 transition"
              onClick={clickHandler}
            >
              Go Back
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white shadow-xl rounded-lg p-8 max-w-lg w-full text-center animate-fade-in">
          <div className="flex justify-center mb-4">
            <div className="bg-green-500 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg">
              ✅
            </div>
          </div>
          <h1 className="text-[#055151] font-bold text-3xl">Thank You!</h1>
          <p className="text-gray-600 mt-3 text-lg">
            Your payment was successful! 🎉 A confirmation email is on its way.
          </p>
          <p className="text-gray-500 mt-2">
            If you have any questions, feel free to contact our support team.
          </p>
          <button
            className="mt-5 bg-[#055151] text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-[#033d3d] transition"
            onClick={clickHandler}
          >
            Back to Home
          </button>
        </div>
      )}
    </div>
  );
};

export default Payment;
