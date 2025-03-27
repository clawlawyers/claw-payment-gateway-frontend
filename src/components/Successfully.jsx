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
  });

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-[#055151] to-[#447373] p-4">
      <div className="h-[90%] w-full max-w-3xl bg-[#0f4444] p-6 rounded-lg border border-green-500 text-white">
        <h2 className="text-2xl font-semibold text-center">
          Payment Confirmation
        </h2>
        <hr className="text-white w-full mt-4" />

        <div className="flex items-center justify-center my-4 gap-0 w-full">
          <div className="sm:w-4 w-4 sm:h-4 h-3 bg-green-500 rounded-full"></div>
          <div className="w-60 h-[1px] bg-white"></div>
          <div className="sm:w-4 w-4 sm:h-4 h-3 bg-green-500 rounded-full"></div>
          <div className="w-60 h-[1px] bg-white"></div>
          <div className="sm:w-4 w-4 sm:h-4 h-3 bg-green-500 rounded-full"></div>
        </div>

        <div className="flex justify-between text-gray-400 text-sm">
          <span className="text-white sm:ml-8 sm:text-[15px] text-[13px]">
            Payment Confirmation
          </span>
          <span className="text-white sm:text-[15px] text-[13px] mr-[22px]">
            Processing
          </span>
          <span className="text-white sm:text-[15px] text-[13px] mr-[28px]">
            Payment Completed
          </span>
        </div>
        <hr className="text-white w-full mt-4" />

        <div className="flex flex-col items-center mt-6">
          <img src={Imglogo} alt="Payment Successful" className="h-28 w-28" />
          <h3 className="text-lg text-white font-bold mt-4">
            Payment Successful
          </h3>
          <p className="text-gray-300 mt-2 text-center">
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
