import { createContext, useContext } from "react";
import PropTypes from 'prop-types';

// Create Context
export const AuthContext = createContext();

// Custom Hook
export const useAuth = () => {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

 
 

  return context;
};

// Provider Component
export const AuthProvider = ({ children }) => {
  const storeToken = (servertoken) => {
    localStorage.setItem("token", servertoken);
  };

  return (
    <AuthContext.Provider value={{ storeToken }}>
      {children}
    </AuthContext.Provider>
  );
};

// Prop Types
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

