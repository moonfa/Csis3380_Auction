import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from './App';


console.log("main.jsx is running");

createRoot(document.getElementById('boot')).render(
    <StrictMode>
        <App />
    </StrictMode>
)
