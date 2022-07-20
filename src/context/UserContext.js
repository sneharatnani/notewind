import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebase-config.js";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = () =>
      onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });
    unsub();
    return () => unsub();
  }, []);

  async function logInUser() {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error);
    }
  }

  const logOutUser = () => {
    signOut(auth);
  };

  return (
    <UserContext.Provider value={{ user, logInUser, logOutUser }}>
      {children}
    </UserContext.Provider>
  );
}
