import { useEffect, useState } from "react";
import { useAuth } from "../user/Auth";
const MyComponent = () => {
  const [services, setServices] = useState([]);
  const [token, setToken] = useState(""); // Assuming `token` comes from some context or props.
const {Authorizationtoken} =useAuth();
const {userAuthentication} =useAuth();
  useEffect(() => {
    userAuthentication(); 
    if (token) {
      getServices();
    }
  }, [token]);

  const getServices = async () => {
    try {
      const response = await fetch("http://localhost:8000/services", {
        method: "GET",
        headers: {
          Authorization:Authorizationtoken, 
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.msg); 
        setServices(data.msg); 
      } else {
        console.error("Failed to fetch services:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  return (
    <div>
      <h1>Services</h1>
      {services.length > 0 ? (
        <ul>
          {services.map((service, index) => (
            <li key={index}>{service}</li> // Render each service.
          ))}
        </ul>
      ) : (
        <p>No services available.</p>
      )}
    </div>
  );
};

export default MyComponent;
