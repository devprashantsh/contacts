import React from "react";
import { Route, Routes } from "react-router-dom";
import SignupPage from "./pages/Signup";
import Layout from "./layout";
import LangingPage from "./pages/Home";
import SigninPage from "./pages/Signin";
import RequireAuth from "./components/RequireAuth";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route
            path="/home"
            element={
              <RequireAuth>
                <LangingPage />
              </RequireAuth>
            }
          />


          
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
