import { UserContext } from "./context/UserContext.js";
import { useContext } from "react";
import AuthenticatedApp from "./section/AuthenticatedApp.js";
import UnauthenticatedApp from "./section/UnauthenticatedApp.js";

function App() {
  const { user } = useContext(UserContext);
  return user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
}

export default App;
