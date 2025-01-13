import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      alert(data.msg);

      
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url('https://www.wellandgood.com/wp-content/uploads/2021/10/GettyImages-1216432464.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Overlay for better text contrast */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // dark transparent overlay
        }}
      />
      
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="container col-12 col-md-6 col-lg-4 p-4" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="text-center mb-4" style={{ fontFamily: 'Bungee Inline', color: 'silver' }}>
            Sign In
          </h1>
          <form method="post" onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                type="email"
                value={user.email}
                onChange={handleInput}
                name="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                required
              />
              <label htmlFor="floatingInput">Email Address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                value={user.password}
                onChange={handleInput}
                name="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                required
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <button
              type="submit"
              style={{ background: 'linear-gradient(to right, #737373, #c0c0c0)' }}
              className="btn rounded-pill btn-dark w-100 mt-4"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
