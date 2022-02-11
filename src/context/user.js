import React, { useState } from "react";

const UserContext = React.createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [theme, setTheme] = useState("dark");
    const value = {
        user,
        setUser,
        theme,
        setTheme
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider };