import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Payment from "./components/Payment";
import store from "./store";
import { Provider } from "react-redux";
import PaymentConfirmation from "./components/PaymentConfirmation";
import Successfully from "./components/Successfully";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PaymentConfirmation />,
      children: [],
    },
    {
      path: "/success/:mode/:planName",
      element: <Successfully />,
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
