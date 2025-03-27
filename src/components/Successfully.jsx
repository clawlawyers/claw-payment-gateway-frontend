import { useSelector } from "react-redux";
import Imglogo from "../assets/Verified.gif";
import { useEffect } from "react";

export default function PaymentConfirmation() {
  const userDetails = useSelector((state) => state?.auth?.plan);

  const clickHandler = () => {
    if (userDetails?.homeSite) {
      window.location.href = userDetails.homeSite;
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `
        gtag('event', 'ads_conversion_Contact_Us_1', {
       // <event_parameters>
      });
     `;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-[#055151] to-[#447373] p-4">
      <div className="h-auto w-full max-w-3xl bg-[#0f4444] p-6 rounded-lg border border-green-500 text-white shadow-lg">
        <h2 className="text-2xl font-semibold text-center">
          Payment Confirmation
        </h2>
        <hr className="text-white w-full mt-4" />

        {/* Progress Bar */}
        <div className="flex items-center justify-center my-4 gap-2 w-full">
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full"></div>
          <div className="w-20 sm:w-60 h-[1px] bg-white"></div>
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full"></div>
          <div className="w-20 sm:w-60 h-[1px] bg-white"></div>
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full"></div>
        </div>

        <div className="flex justify-between text-gray-400 text-xs sm:text-sm">
          <span className="text-white ml-2 sm:ml-8">Payment Confirmation</span>
          <span className="text-white">Processing</span>
          <span className="text-white mr-2 sm:mr-8">Payment Completed</span>
        </div>
        <hr className="text-white w-full mt-4" />

        {/* Content */}
        <div className="flex flex-col items-center mt-6">
          <img
            src={Imglogo}
            alt="Payment Successful"
            className="h-28 w-28 sm:h-44 sm:w-44"
          />
          <h3 className="text-lg text-white font-bold mt-4">
            Payment Successful
          </h3>
          <p className="text-gray-300 mt-2 text-center text-sm sm:text-base">
            <strong>Thank You</strong> for completing the purchase.
            <br />
            You will be soon redirected to the{" "}
            <strong
              className="text-blue-400 cursor-pointer"
              onClick={clickHandler}>
              Home Page
            </strong>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
