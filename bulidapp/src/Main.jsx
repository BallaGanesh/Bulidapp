import { createRoot } from "react-dom/client";
import App from "./app";
import "./App.css"
import { Toaster } from "react-hot-toast"
import Context from "./components/context/Context";
createRoot(document.getElementById("root")).render(<>

<Context><App></App></Context>
<Toaster></Toaster>



</>)