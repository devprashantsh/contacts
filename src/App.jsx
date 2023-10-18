import { onAuthStateChanged } from "firebase/auth";
import "./App.css";
import FireBaseApp from "./config/firebase";
import AppRoutes from "./AppRoutes";
import { useAuth } from "./contexts/auth-context";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const { isAuthenticated, setIsAuthenticated, setUser } = useAuth();
  onAuthStateChanged(FireBaseApp.auth, (user) => {
    if (user) {
      setIsAuthenticated(true);
      setUser(user);
    } else {
      setIsAuthenticated(false);
      setUser(null);
    }
  });

  useEffect(() => {
    if (isAuthenticated) {
      if (location.state && location.state.from) {
        navigate(location.state.from);
      } else {
        navigate("/home");
      }
    } else {
      navigate("/signin");
    }
  }, []);
  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
