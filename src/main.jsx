import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { HashRouter, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-context.jsx";
import { theme } from "./theme/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <HashRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </HashRouter>
    </ChakraProvider>
  </React.StrictMode>
);
