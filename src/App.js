import { UserContext } from "./context/userContext.js";
import { useContext, useEffect, useState } from "react";
import AuthenticatedApp from "./section/AuthenticatedApp.js";
import UnauthenticatedApp from "./section/UnauthenticatedApp.js";
import Spinner from "./components/Spinner.js";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-config.js";
import NotesContextProvider from "./context/notesContext.js";
import NewNoteContextProvider from "./context/newNoteContext.js";

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
    <div className="font-poppins font-normal tracking-wide">
      {loading ? (
        <Spinner />
      ) : user ? (
        <NotesContextProvider>
          <NewNoteContextProvider>
            <AuthenticatedApp />
          </NewNoteContextProvider>
        </NotesContextProvider>
      ) : (
        <UnauthenticatedApp />
      )}
    </div>
  );
}


export default App;
