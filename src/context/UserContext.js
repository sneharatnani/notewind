import { createContext, useState } from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebase-config.js";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

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
    <UserContext.Provider value={{ user, setUser, logInUser, logOutUser }}>
      {children}
    </UserContext.Provider>
  );
}
