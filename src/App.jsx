import Payment from "./components/Payment";
import store from "./store";
import { Provider } from "react-redux";
function App() {
  return (
    <>
      <Provider store={store}>
        <Payment />
      </Provider>
    </>
  );
}

export default App;
