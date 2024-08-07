import { createContext, useContext,useEffect, useState } from "react";

const authContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("Emp-user")) || null
  );

  function setCredential(data) {
    setUser(data);
  }

  function removeCredential() {
    setUser(null);
    localStorage.removeItem("Emp-user");
  }

  useEffect(() => {
    if (user) {
      localStorage.setItem("Emp-user", JSON.stringify(user));
    } else {
      localStorage.removeItem("Emp-user");
    }
  }, [user]);

  return (
    <authContext.Provider
      value={{ user, setCredential, removeCredential }}
    >{children}</authContext.Provider>
  );
}

function useAuth(){
    const context = useContext(authContext)
    if(context === undefined){
        throw new Error("Don't use context outside AuthContextProvider")
    }
    return context
}

export {AuthProvider, useAuth}
