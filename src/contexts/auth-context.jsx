import React, { createContext, useContext, useEffect, useState } from "react";
import FireBaseApp from "../config/firebase";
import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
// Define a type for your user object
const AuthContext = createContext();

// Custom hook to use the AuthContext
function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

// AuthProvider component
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  
console.log({user})
  
  const signin = ({ email, password }, callback = () => {}) => {
    setError(false)
    const onSuccess = (user) => {
      setUser(user);
      setIsAuthenticated(true);
      callback(user);
    };
    const onError = (error) => {
      if (error.code === "auth/invalid-login-credentials"){
        setError('Invalid Email or Password')
      }else{
        setError('Something went wrong, please try again')
      }
    };
    FireBaseApp.signin({ email, password, onSuccess, onError });
  };
  const loginWithGoogle = (callback = () => {}) =>{
    signInWithPopup(FireBaseApp.auth, FireBaseApp.googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user)
        setIsAuthenticated(true)
        callback(user);
      }).catch((error) => {
        console.log(error)
      });

  }
  const signup = ({ email, password }, callback = () => {}) => {
    setError(false)
    const onSuccess = (user) => {
      setUser(user);
      setIsAuthenticated(true);
      callback(user);
    };
    const onError = (error) => {
      console.error(error.message);
      setError("Something went wrong")
    };
    FireBaseApp.signup({ email, password, onSuccess, onError });
  };

  const signout = (callback) => {
    FireBaseApp.signout(() => {
      setUser(null);
      setIsAuthenticated(false);
      callback();
    });
  };

  

  const value = { user, isAuthenticated,error,setIsAuthenticated,setUser,loginWithGoogle, signin, signout, signup };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthProvider, useAuth };
