import React, { createContext, useContext, useState } from 'react';
import FireBaseApp from "../config/firebase"
// Define a type for your user object
const AuthContext = createContext();

// Custom hook to use the AuthContext
function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}


// AuthProvider component
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const signin = ({email,password}, callback = () => {}) => {
    const onSuccess = (user) => {
      setUser(user);
      callback(user)
  }
  const onError = (error) => {
      console.error(error.message)
  }
  FireBaseApp.signin({email,password,onSuccess,onError})
  };
  const signup = ({email,password},callback = () => {}) => {
    const onSuccess = (user) => {
        setUser(user);
        callback(user)
    }
    const onError = (error) => {
        console.error(error.message)
    }
    FireBaseApp.signup({email,password,onSuccess,onError})
  };

  const signout = (callback) => {
    FireBaseApp.signout(() => {
      setUser(null);
      callback();
    })
      
  };

  const value = { user, signin, signout,signup };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthProvider, useAuth };
