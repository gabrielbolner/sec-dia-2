import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { GlobalUserProvider } from "./context/user/user.context";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <GlobalUserProvider>
        <RouterProvider router={router} />
        <ToastContainer toastStyle={{ backgroundColor: "black" }} />
      </GlobalUserProvider>
    </div>
  );
}

export default App;
