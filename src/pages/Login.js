import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase-config.js";
import { userContext } from "../context/UserContext.js";
import { useContext } from "react";

export default function Login() {
  const { user, setUser } = useContext(userContext);

  async function signIn() {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  }

  function logOut() {
    signOut(auth);
  }

  return (
    <>
      <button onClick={signIn}>login</button>
      <button onClick={logOut}>sign out</button>
      {user && <p>{user.displayName}</p>}
    </>
  );
}
