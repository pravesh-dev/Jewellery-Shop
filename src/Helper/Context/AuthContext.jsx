// src/context/AuthContext.js

import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if the user is authenticated on initial load
    const checkAuth = async () => {
      try {
        const response = await fetch('https://jewellery.hexadefend.com/Backend/auth/verify.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include', // Send credentials
        });
        const data = await response.json();
        if (data.status === 'success') {
          setUser(data.user); // Set user data
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
    fetch('https://jewellery.hexadefend.com/Backend/auth/logout.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // Send credentials
    })
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
