import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase-config.js";
import { UserContext } from "../context/UserContext.js";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  async function logInUser() {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("../notes", { replace: true });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <button onClick={logInUser} className="btn">
        login
      </button>
      {user && <p>{user.displayName}</p>}
    </>
  );
}
