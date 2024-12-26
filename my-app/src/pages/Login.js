import React from 'react';
import bg from "../pages/images/pexels-anush-1229356.jpg";
function Login() {
  return (
    <div
      style={{
        backgroundImage:
          `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh',
        position: 'relative',
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
          <form method="post">
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                required
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                required
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <button type="submit" className="btn btn-dark w-100 mt-4">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;