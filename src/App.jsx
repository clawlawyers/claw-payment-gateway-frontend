import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Payment from "./components/Payment";
import store from "./store";
import { Provider } from "react-redux";
import PaymentConfirmation from "./components/PaymentConfirmation";
import PaymentProcessing from "./components/PaymentProcessing";
import PaymentSuccess from "./components/PaymentCompletion";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Payment />,
      children: [],
    },
    {
      path:"/confirmation",
      element:<PaymentConfirmation/>,
    },
    {
      path:"/processing",
      element:<PaymentProcessing/>,
    },
    {
      path:"/success",
      element:<PaymentSuccess/>,
    },
  ]);

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
