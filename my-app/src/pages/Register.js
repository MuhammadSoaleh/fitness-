import React from 'react'
import im from "../pages/images/4844b0c2-8ba8-4ee0-8fc8-661437f0a48f.jpg";


function Register() {
  return (
    < div   style={{
        backgroundImage: `url('${im}')`,
        
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        width: '100%',
        height: '100vh',
      }}>
        <h1 className=' text-center pt-5 ' style={{ fontFamily: 'Bungee Inline',color:'silver'}}>
  Sign Up
</h1>
    <div className='container-fluid col-3 mt-5'  >
      <form method='post' encType='multi-part/form-data'>
      <div className="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" placeHolder="username"/>
  <label htmlFor="floatingInput">User Name</label>
</div>
<div className="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Email address</label>
</div>
<div className="form-floating mb-3">
  <input type="password" class="form-control" id="floatingPassword" placeHolder="Password"/>
  <label htmlFor="floatingPassword">Password</label>
</div>
<div className="form-floating mb-3">
  <input type="number" class="form-control" id="floatingPassword" placeholder="Phone"/>
  <label for="floatingPassword">Phone</label>
</div>
<div class="form-floating mb-3">
  <input type="number" class="form-control" id="floatingInput" placeholder="Weight"/>
  <label for="floatingInput">Weight</label>
</div>
<div class="form-floating mb-3">
  <input type="number" class="form-control" id="floatingInput" placeholder="Height"/>
  <label for="floatingInput">Height</label>
</div>
<div className="input-group mb-3">
  <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"/>

</div>
<input type='button' className='btn rounded-pill btn-dark mb-5 w-100' style={{background:'linear-gradient(to right, #737373, #c0c0c0)'}} value='Sign Up'/>
</form>
    </div>
    </div>
  )
}

export default Register
