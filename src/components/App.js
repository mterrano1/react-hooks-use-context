import React, { useContext } from "react";
import Header from "./Header";
import Profile from "./Profile";
import { UserProvider, UserContext } from "../context/user";

function App() {
  const { theme } = useContext(UserContext);

  return (
    <main className={theme}>
      <UserProvider>
        <Header />
        <Profile />
      </UserProvider>
    </main>
  );
}

export default App;
