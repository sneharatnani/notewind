import { UserContext } from "./context/userContext.js";
import { useContext, useEffect, useState } from "react";
import AuthenticatedApp from "./section/AuthenticatedApp.js";
import UnauthenticatedApp from "./section/UnauthenticatedApp.js";
import Spinner from "./components/Spinner.js";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-config.js";
import NotesContextProvider from "./context/notesContext.js";
import ToastContextProvider from "./context/toastContext.js";

function App() {
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
  }, []);

  return (
    <div className="font-poppins font-normal tracking-wide">
      {loading ? (
        <Spinner />
      ) : user ? (
        <NotesContextProvider>
          <ToastContextProvider>
            <AuthenticatedApp />
          </ToastContextProvider>
        </NotesContextProvider>
      ) : (
        <UnauthenticatedApp />
      )}
    </div>
  );
}

export default App;
