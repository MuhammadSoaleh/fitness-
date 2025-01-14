import { createContext, useContext, useEffect, useState } from "react";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token,setToken]= useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);  // Added user state
  const [services,setService] = useState([])

const Authorizationtoken = `Bearer${token}`
  // Function to store the token in local storage
  const storeTokenInLS = (serverToken) => {
    localStorage.setItem("token", serverToken);
    setToken(serverToken);  // Update the state after storing the token
  };

  
  const LogoutUser = () => {
    setToken(null);  
    setUser(null);   
    localStorage.removeItem("token");  
  };

  
  const isLoggedIn = !!token;

  
  const userAuthentication = async () => {
    if (!token) return; 

    try {
      const response = await fetch("http://localhost:8000/user", {
        method: "GET",
        headers: {
          "Authorization": Authorizationtoken 
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.msg); // Log the message
        setUser(data.msg);  // Set the user data
      } else {
        console.log("Error in authentication");
      }
    } catch (error) {
      console.log(error); // Handle errors
    }
  };

  useEffect(() => {
    userAuthentication();
    getServices();
  }, [token]);
  const getServices = async () => {
    try {
      const response = await fetch("http://localhost:8000/services",
        {
          method:'GET',
          Authorization:Authorizationtoken
        }
      );
      if (response.ok) {
        const data = await response.json();

        console.log(data.msg);
        setService(data.msg);
      }
      
    } catch (error) {
      console.log(error);
    }
  } 
  
   // Dependency on token, re-run if token changes

  return (
    <AuthContext.Provider value={{ storeTokenInLS, LogoutUser, isLoggedIn, user,  services, Authorizationtoken,userAuthentication }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {
  const authContextValue = useContext(AuthContext);

  if (!authContextValue) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return authContextValue;
};
