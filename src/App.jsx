import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import LocomotiveScroll from "locomotive-scroll";

// Pages
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";
import Ecom from "./pages/ecom.jsx";
import Register from "./pages/register.jsx";
import Login from "./pages/login.jsx";
import Courses from "./pages/courses.jsx";
import Insights from "./pages/insights.jsx";
import Admin from "../server/admin.jsx";
import Error from "./components/error.jsx";
import Account from "./components/Account.jsx";



const App = () => {
  // Initialize smooth scrolling
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      smooth: true,
      // Add other options as needed
    });

    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    
      <BrowserRouter>
        <AppRoutes />
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#333",
              color: "#fff",
            },
          }}
        />
      </BrowserRouter>
   
  );
};

const AppRoutes = () => {
  const isUser = localStorage.getItem("token");
  const isAdmin = localStorage.getItem("user");

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/insights" element={<Insights />} />
      <Route path="/register" element={<Register />} />
      <Route path="/ecom" element={<Ecom />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/error" element={<Error />} />

      {/* Protected Routes */}
      <Route
        path="/courses"
        element={
          isUser ? <Courses /> : <Navigate to="/login" replace />
        }
      />
      <Route
        path="/cart"
        element={
          isUser ? <Account /> : <Navigate to="/login" replace />
        }
      />
      <Route
        path="/admin"
        element={isAdmin ? <Admin /> : <Navigate to="/" replace />}
      />

      {/* Fallback Route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
