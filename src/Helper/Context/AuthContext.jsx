import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await axios.get("https://jewellery.hexadefend.com/Backend/auth/verify.php", {
          withCredentials: true
        });
        if (response.data.status === "success") {
          setUser(response.data.user);
        }
      } catch (error) {
        console.error("Session check failed:", error);
      }
    };

    checkSession();
  }, []);

  const logout = async () => {
    await axios.get("https://jewellery.hexadefend.com/Backend/auth/logout.php", {
      withCredentials: true,
    });
    setUser(null);
  };  

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
