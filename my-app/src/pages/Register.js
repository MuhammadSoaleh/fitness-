import React, { useState } from 'react';
import im from "../pages/images/pexels-anush-1229356.jpg";
import { useNavigate } from 'react-router-dom';

function Register() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
    weight: "",
    height: "",
    age: "",
  });

  
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // No need to use await here
    
    try {
      const response = await fetch('http://localhost:8000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user), // Assuming 'user' is your form data object
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert(data.msg); 
        navigate("/login"); // navigate to the login page if registration is successful
      } else {
        alert("Registration failed: " + data.msg); // Handle any error messages
      }
  
    } catch (error) {
      console.error("Error during registration:", error); // Log errors for debugging
    }
  };
  

  return (
    <div
      style={{
        backgroundImage: `url('${im}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <h1 className="text-center pt-5" style={{ fontFamily: 'Bungee Inline', color: 'silver' }}>
        Sign Up
      </h1>
      <div className="container-fluid col-3 mt-5">
        
         <form onSubmit={handleSubmit} className='row g-3'>
          <div className="form-floating mb-3 col-md-6">
            <input
              type="text"
              value={user.username}
              onChange={handleInput}
              name="username"
              className="form-control col-md-6"
              id="floatingUsername"
              placeholder="Username"
            />
            <label htmlFor="floatingUsername">Username</label>
          </div>
          <div className="form-floating mb-3 col-md-6">
            <input
              type="email"
              value={user.email}
              onChange={handleInput}
              name="email"
              className="form-control"
              id="floatingemail"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingemail">Email Address</label>
          </div>
          <div className="form-floating mb-3 col-md-6" >
            <input
              type="password"
              value={user.password}
              onChange={handleInput}
              name="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          {/* <div className="form-floating mb-3 col-md-6">
            <input
              type="number"
              value={user.phone}
              onChange={handleInput}
              name="phone"
              className="form-control"
              id="floatingPhone"
              placeholder="Phone"
            />
            <label htmlFor="floatingPhone">Phone</label>
          </div> */}
          <div className="form-floating mb-3 col-md-6">
            <input
              type="number"
              value={user.weight}
              onChange={handleInput}
              name="weight"
              className="form-control"
              id="floatingWeight"
              placeholder="Weight"
            />
            <label htmlFor="floatingWeight">Weight</label>
          </div>
          <div className="form-floating mb-3 col-md-6">
            <input
              type="number"
              value={user.height}
              onChange={handleInput}
              name="height"
              className="form-control"
              id="floatingHeight"
              placeholder="Height"
            />
            <label htmlFor="floatingHeight">Height</label>
          </div>
          <div className="form-floating mb-3 col-md-6">
            <input
              type="number"
              value={user.age}
              onChange={handleInput}
              name="age"
              className="form-control"
              id="floatingAge"
              placeholder="Age"
            />
            <label htmlFor="floatingAge">Age</label>
          </div>

          <button
            type="submit"
            className="btn rounded-pill btn-dark mb-5 w-100"
            style={{ background: 'linear-gradient(to right, #737373, #c0c0c0)' }}
          >
            Sign Up
          </button>
        </form> 

{/* <form className="row g-3">
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Email</label>
    <input  type="text"
              value={user.username}
              onChange={handleInput}
              name="username"
              className="form-control"
            
              placeholder="Username" class="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  <div className="col-md-6">
    <label for="inputAddress" className="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeHolder="1234 Main St"/>
  </div>
  <div className="col-md-6">
    <label for="inputAddress2" className="form-label">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeHolder="Apartment, studio, or floor"/>
  </div>
  <div className="col-md-6">
    <label for="inputCity" className="form-label">City</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
  <div className="col-md-4">
    <label for="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div className="col-md-2">
    <label for="inputZip" className="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip"/>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="htmlForm-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Sign in</button>
  </div>
</form> */}
      </div>
    </div>
  );
}

export default Register;
