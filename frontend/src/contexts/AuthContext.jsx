import React, { createContext, useContext, useMemo, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [tokens, setTokens] = useState({ accessToken: null, refreshToken: null });

  const login = (payload) => {
    setUser(payload.user);
    setTokens({ accessToken: payload.accessToken, refreshToken: payload.refreshToken });
  };

  const logout = () => {
    setUser(null);
    setTokens({ accessToken: null, refreshToken: null });
  };

  const value = useMemo(
    () => ({
      user,
      tokens,
      login,
      logout
    }),
    [user, tokens]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
