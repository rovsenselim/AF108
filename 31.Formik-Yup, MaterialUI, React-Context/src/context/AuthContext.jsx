import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isRegistered, setIsRegistered] = useState(false);

    const login = (username, password) => {
        setUser({ username });
    };

    const logout = () => {
        setUser(null);
    };

    const register = (name, username, email, password) => {
        setIsRegistered(true);
        setUser({ name, username, email });
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, register, isRegistered }}>
            {children}
        </AuthContext.Provider>
    );
};