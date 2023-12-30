import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Beforeunload } from 'react-beforeunload';
export const AuthContext = createContext();

const VisibilityChangeHandler = ({ onVisibilityChange }) => {
  useEffect(() => {
    const handleVisibilityChange = () => {
      onVisibilityChange(document.visibilityState);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [onVisibilityChange]);

  return null;
};

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    const res = await axios.post("http://localhost:8800/api/auth/login", inputs, {
      withCredentials: true,
    });

    setCurrentUser(res.data)
  };
  const logout = () => {
    // Clear user data from local storage and set currentUser to null
    localStorage.removeItem("user");
    setCurrentUser(null);
  };
  const handleVisibilityChange = (visibilityState) => {
    if (visibilityState === 'hidden') {
      // The tab is now hidden, perform cleanup logic here
      // For example, you can call your logout function
      logout();
    }
  };
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  // useEffect(() => {
  //   const handleBeforeUnload = (event) => {
  //     // Use additional logic to differentiate between refresh and close.
  //     // if (event.type === "beforeunload") {

  //     //     // User is closing the tab/window.
  //     //     const confirmationMessage = "Are you sure you want to close this tab?";
  //     //     event.returnValue = confirmationMessage;
  //     //     localStorage.removeItem("user");

  //     // }
  //     const confirmationMessage = "Are you sure you want to close this tab?";
  //     if (!event.returnValue) {
  //       // Event.returnValue is empty, indicating that the user is closing the tab.

  //       event.returnValue = confirmationMessage;
  //     } else {
  //       // If there's a non-empty event.returnValue, the user is likely refreshing.
  //       const refreshMessage = "Do you really want to refresh this page?";
  //       event.returnValue = refreshMessage;
  //     }
  //   };

  //   window.addEventListener("beforeunload", handleBeforeUnload);

  //   return () => {
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //   };
  // }, []);

  return (
    <AuthContext.Provider value={{ currentUser, login,logout }}>
      {children}
     
    </AuthContext.Provider>
  );
};
