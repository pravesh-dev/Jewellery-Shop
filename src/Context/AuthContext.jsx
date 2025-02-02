// src/context/AuthContext.js

import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Check if user is authenticated on page load
  useEffect(() => {
    const checkAuth = async () => {
      const res = await fetch('https://jewellery.hexadefend.com/Backend/auth/verify.php', {
        method: 'POST',
        credentials: 'include', // Include cookies in the request
      });
      const data = await res.json();
      if (data.status === 'success') {
        setUser(data.user);
      }
    };

    checkAuth();
  }, []);

  // Login function
  const login = async (formData) => {
    const res = await fetch('https://jewellery.hexadefend.com/Backend/auth/login.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ formData }),
      credentials: 'include', // Include cookies in the request
    });

    const data = await res.json();
    if (data.status === 'success') {
      setUser(data.user);
    }
    return data;
  };

  // Signup function
  const signup = async (formData) => {
    const res = await fetch('https://jewellery.hexadefend.com/Backend/auth/signup.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ formData }),
    });

    const data = await res.json();
    return data;
  };

  // Logout function
  const logout = async () => {
    const res = await fetch('https://jewellery.hexadefend.com/Backend/auth/logout.php', {
      method: 'POST',
      credentials: 'include', // Include cookies in the request
    });

    const data = await res.json();
    if (data.status === 'success') {
      setUser(null);
    }
    return data;
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
