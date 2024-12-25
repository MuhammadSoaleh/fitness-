import React from 'react'
import im from "../pages/images/4844b0c2-8ba8-4ee0-8fc8-661437f0a48f.jpg";


function Register() {
  return (
    < div   style={{
        backgroundImage: `url('${im}')`,
        
        backgroundSize: 'cover', // makes the image cover the entire element
        backgroundPosition: 'center', // centers the image within the element
        width: '100%',
        height: '100vh',
      }}>
        <h1 className=' text-center pt-5 ' style={{ fontFamily: 'Bungee Inline',color:'silver'}}>
  Sign Up
</h1>
    <div className='container-fluid col-3 mt-5'  >
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
  <input type="phone" class="form-control" id="floatingPassword" placeholder="Phone"/>
  <label for="floatingPassword">Phone</label>
</div>
<div className="input-group mb-3">
  <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"/>

</div>
<input type='button' className='btn  btn-dark mb-5' style={{color:'silver'}} value='Sign Up'/>
    </div>
    </div>
  )
}

export default Register
