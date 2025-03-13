import { createContext, useContext, useState, ReactNode } from "react";

// Creates the context for authentication
export const AuthContext = createContext();

// Hook to use the authentication context
export const useAuth = () => useContext(AuthContext);

// Provider component for the authentication context
const AuthContextProvider = ({ children }) => {
    // State to manage authentication status and user data
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [data, setData] = useState(null);

    // Function to handle login
    const login = (data) => {
        setIsAuthenticated(true);
        setData(data);
        console.log(data) // Logs the user data to the console
    };

    // Function to handle logout
    const logout = () => {
        setIsAuthenticated(false);
        setData(null);
    };

    // Value object to be passed to the context provider
    const value = {
        isAuthenticated,
        data,
        login,
        logout,
    };

    // Returns the provider with the value and children
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Exports the provider as the default export
export default AuthContextProvider;