import { auth } from "firebase-app/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";

const { useContext } = require("react");
const { createContext } = require("react");

const AuthContext = createContext();
function AuthProvider(props) {
  const [userInfo, setUserInfo] = useState({});
  const value = { userInfo, setUserInfo };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      setUserInfo(user);
    });
  });
  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);
  if (typeof context === "undefined")
    throw new Error("useAuth must be used within Provider");
  return context;
}

export { AuthProvider, useAuth };
