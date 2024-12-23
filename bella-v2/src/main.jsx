import "./index.css";
import App from "./App.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import RoomProvider from "./context/RoomContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RoomProvider>

<App />
</RoomProvider>
    </AuthProvider>

   
  </React.StrictMode>,
)
