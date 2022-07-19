import { UserContext } from "../context/UserContext.js";
import { useContext } from "react";

export default function Login() {
  const { user, logInUser } = useContext(UserContext);

  return (
    <>
      <button onClick={logInUser} className="btn">
        login
      </button>
      {user && <p>{user.displayName}</p>}
    </>
  );
}
