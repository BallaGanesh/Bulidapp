import { createRoot } from "react-dom/client";
import App from "./app";
import "./App.css"
import { Toaster } from "react-hot-toast"
createRoot(document.getElementById("root")).render(<>

<App></App>
<Toaster></Toaster>



</>)