import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config.js";

export const userContext = createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const sub = () =>
      onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });
    sub();
    return () => sub;
  }, []);

  return (
    <userContext.Provider value={{ user }}>{children}</userContext.Provider>
  );
}
