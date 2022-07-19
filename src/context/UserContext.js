import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebase-config.js";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

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
      navigate("../notes", { replace: true });
    } catch (error) {
      console.log(error);
    }
  }

  const logOutUser = () => {
    navigate("../", { replace: true });
    signOut(auth);
  };

  return (
    <UserContext.Provider value={{ user, logInUser, logOutUser }}>
      {children}
    </UserContext.Provider>
  );
}
