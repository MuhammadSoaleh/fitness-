import React from 'react'

function Contact() {
  return (
    <div style={{backgroundImage:'url(https://upliftexercise.com.au/wp-content/uploads/2023/08/Client-Information-And-FAQs-1024x683.webp)',height:'70vh',width:'100%',backgroundSize:'cover',backgroundPosition:'center'}}>
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
<input type='button' className='btn my-3 rounded-pill btn-dark mb-5 w-100' style={{background:'linear-gradient(to right, #cccccc, #4d4d4d)'}} value='Sign Up'/>
</form>
      </div>
      <div className='container-fluid bg-dark' style={{height:'30vh'}}>
      <div class="container text-center">
  <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
    <div class="col">
      <div class="p-3"style={{ color: '#8c8c8c' }}> <span style={{ color: 'silver' }}>email</span> : <a href='mailto:admin@gmail.com' style={{color:'#8c8c8c'}}>admin@gmail.com</a></div>
    </div>
    <div class="col">
      <div class="p-3" style={{color:' #8c8c8c'}}><span style={{color:'silver'}}> Phone </span> : <a href='phoneto:1111-222-333' style={{color:'#8c8c8c'}}>1111-222-333 </a></div>
    </div>
    <div class="col">
      <div class="p-3">Row column</div>
    </div>
    <div class="col">
      <div class="p-3">Row column</div>
    </div>
    <div class="col">
      <div class="p-3">Row column</div>
    </div>
    <div class="col">
      <div class="p-3">Row column</div>
    </div>
    <div class="col">
      <div class="p-3">Row column</div>
    </div>
    <div class="col">
      <div class="p-3">Row column</div>
    </div>
    <div class="col">
      <div class="p-3">Row column</div>
    </div>
    <div class="col">
      <div class="p-3">Row column</div>
    </div>
  </div>
</div>
     
  


      
      </div>
    </div>
  )
}

export default Contact
