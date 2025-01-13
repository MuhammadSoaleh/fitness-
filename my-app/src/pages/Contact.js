import React, { useEffect,useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone,faEnvelope,faLocationDot} from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../user/Auth';

function Contact() {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    subject: "",
    message: "",
  });

  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      setContact({
        username: user.username,
        email: user.email,
        subject: "",
        message: "",
      });
    }
  }, [user]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Message sent successfully!");
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      alert("Error sending message");
    }
  };

  return (
    <div style={{backgroundImage:'url(https://upliftexercise.com.au/wp-content/uploads/2023/08/Client-Information-And-FAQs-1024x683.webp)',height:'70vh',width:'100%',backgroundSize:'cover',backgroundPosition:'center'}}>
        <h1 className='text-center' style={{color:'silver'}} >Get in touch</h1>
      <div className='container-fluid col-6 my-3' >
<form onSubmit={handleSubmit}>
<div className="form-floating mb-3">
  <input type="text" name='username'  onChange={handleInput} value={contact.username} class="form-control" id="floatingInput" placeHolder="name@example.com"/>
  <label htmlFor="floatingInput">Username</label>
</div>
<div className="form-floating mb-3">
  <input type="email" name='email' onChange={handleInput} value={contact.email} class="form-control" id="floatingInput" placeHolder="name@example.com"/>
  <label htmlFor="floatingInput">Email address</label>
</div>
<div className="form-floating mb-3">
  <input type="text" name='subject' onChange={handleInput} value={contact.subject} class="form-control" id="floatingPassword" placeHolder="subject"/>
  <label htmlFor="floatingPassword">subject</label>
</div>
<div class="form-floating">
  <textarea class="form-control" name='message'  onChange={handleInput} value={contact.message} placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '100px' }}></textarea>
  <label for="floatingTextarea2">Comments</label>
</div>
<input type='submit' className='btn  my-3 rounded-pill button-submit mb-5 ' style={ {background:'linear-gradient(to right, #cccccc, #4d4d4d)',width:'100%'}} value='Contact Us'/>
</form>
<div className='px-5 bg-tertiary container-fluid'> <a href='#' style={{color:"silver",position:'absolute',right:'20px',height:'30%'}}> <FontAwesomeIcon icon={faAngleUp} /> </a></div>
      </div>
      <div className='container-fluid bg-dark' >
      <div class="container text-center">
  <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
    <div class="col">
      <div class="p-3"style={{ color: '#8c8c8c' }}> <span style={{ color: 'silver' }}> <FontAwesomeIcon icon={faEnvelope} /></span> : <a href='mailto:admin@gmail.com' style={{color:'#8c8c8c'}}>admin@gmail.com</a></div>
    </div>
    <div class="col">
      <div class="p-3" style={{color:' #8c8c8c'}}><span style={{color:'silver'}}>  <FontAwesomeIcon icon={faPhone} />  </span> : <a href='phoneto:1111-222-333' style={{color:'#8c8c8c'}}>1111-222-333 </a></div>
    </div>
    <div class="col">
    <div class="p-3" style={{color:' #8c8c8c'}}><span style={{color:'silver'}}>  <FontAwesomeIcon icon={faLocationDot} />  </span> : <a href='A 563, Main Shahrah-e-Usman, Sector 11-A Sector 11 A North Karachi Twp, Karachi, Karachi City, Sindh 75850, Pakistan' style={{color:'#8c8c8c'}}>Aptech N.k </a></div>
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
