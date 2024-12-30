import React from 'react'

function Contact() {
  return (
    <div style={{backgroundImage:'url(https://upliftexercise.com.au/wp-content/uploads/2023/08/Client-Information-And-FAQs-1024x683.webp)',height:'100vh',width:'100%',backgroundSize:'cover',backgroundPosition:'center'}}>
        <h1 className='text-center' style={{color:'silver'}} >Get in touch</h1>
      <div className='container-fluid col-6 my-3' >
<form>
<div className="form-floating py-3">
  <input type="text" class="form-control" id="floatingInput" placeHolder="username"/>
  <label htmlFor="floatingInput">username</label>
</div>
<div className="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeHolder="name@example.com"/>
  <label htmlFor="floatingInput">Email address</label>
</div>
<div className="form-floating mb-3">
  <input type="text" class="form-control" id="floatingPassword" placeHolder="subject"/>
  <label htmlFor="floatingPassword">subject</label>
</div>
<div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '100px' }}></textarea>
  <label for="floatingTextarea2">Comments</label>
</div>
<input type='button' className='btn my-3  btn-dark mb-5 w-100' style={{background:'linear-gradient(to right, #cccccc, #4d4d4d)'}} value='Sign Up'/>
</form>
      </div>
      <div className='container-fluid' style={{backgroundImage:'url(https://gymequipmentdublin.com/wp-content/uploads/2024/09/BioForce-MX-NorsK-Three.jpg)'}}>
      <p style={{color:'silver'}}>email:admin@gmail.com</p>
      </div>
    </div>
  )
}

export default Contact
