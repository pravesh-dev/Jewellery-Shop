// src/context/AuthContext.js

import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if the user is authenticated on initial load
    const checkAuth = async () => {
      try {
        const response = await axios.post('https://jewellery.hexadefend.com/Backend/auth/verify.php');
        if (response.data.status === 'success') {
          setUser(response.data.user); // Set user data
        } else {
          setUser(null); // If no valid session, set user to null
        }
      } catch (error) {
        setUser(null); // Handle error by setting user to null
      } finally {
        setLoading(false); // Stop loading
      }
    };
    checkAuth();
  }, []);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    axios.post('https://jewellery.hexadefend.com/Backend/auth/logout.php')
      .then(() => {
        setUser(null);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
