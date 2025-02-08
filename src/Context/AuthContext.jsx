import { createContext, useContext, useState, ReactNode } from "react";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [data, setData] = useState(null);

    const login = (data) => {
        setIsAuthenticated(true);
        setData(data);
        console.log(data)
    };

    const logout = () => {
        setIsAuthenticated(false);
        setData(null);
    };

    const value = {
        isAuthenticated,
        data,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;