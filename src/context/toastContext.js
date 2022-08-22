import { createContext, useState } from "react";

export const ToastContext = createContext();

export default function ToastContextProvider({ children }) {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <ToastContext.Provider
      value={{
        setShow,
        show,
        message,
        setMessage,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}
