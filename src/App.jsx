import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Payment from "./components/Payment";
import store from "./store";
import { Provider } from "react-redux";
import PaymentConfirmation from "./components/PaymentConfirmation";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      // element: <Payment />,
      element: <PaymentConfirmation />,
      children: [],
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
