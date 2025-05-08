import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Logoutbtn = ({ logged }) => {
  const navigate = useNavigate();
  
  const logout = () => {
    // Clear all user-related data
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    
    // Show success message
    toast.success("Logout successful!");
    
    // Navigate to home page
    navigate("/");
    
    // Force a refresh if needed (optional)
    window.location.reload();
  };

  return (
    <button
    className={`rounded-full border-2 border-white text-white p-2 ${
      logged !== true && "hidden"
    }`}
    onClick={logout}
  >
    Logout 
  </button>
  );
};

export default Logoutbtn;