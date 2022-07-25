import { UserContext } from "./context/UserContext.js";
import { useContext, useEffect, useState } from "react";
import AuthenticatedApp from "./section/AuthenticatedApp.js";
import UnauthenticatedApp from "./section/UnauthenticatedApp.js";
import Spinner from "./components/Spinner.js";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-config.js";
import ThemeContextProvider from "./context/ThemeContext.js";

function App() {
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = () =>
      onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      });
    unsub();

    return () => unsub();
  }, []);

  return (
    <ThemeContextProvider>
      <div className="font-poppins font-normal tracking-wide">
        {loading ? (
          <Spinner />
        ) : user ? (
          <AuthenticatedApp />
        ) : (
          <UnauthenticatedApp />
        )}
      </div>
    </ThemeContextProvider>
  );
}

export default App;
