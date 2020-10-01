import React, { createContext, useState } from "react";

export const UserContext = createContext(null);

export default ({ children }) => {
    const [user, setUser] = useState(null);
    const [address, setAddress] = useState(null);

    return (
        <UserContext.Provider
            value={{ user, setUser, address, setAddress }}
        >
            {children}
        </UserContext.Provider>
    );
};
