import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Register from './pages/Register';
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  return (
   <>
<BrowserRouter>
<Nav/>
<Routes>
{/* <Route path="/logout" element={<Logout/>}/> */}
  {/* <Route path="/" element={<Home/>}/> */}
  {/* <Route path="/service" element={<Service/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/gallery" element={<Gallery/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="/login" element={<Login/>}/> */}
  <Route path="/register" element={<Register/>}/>
  {/* <Route path="/admin" element={<Adminlayout/>}>
  <Route path="users" element={<AdminUsers />} />
  <Route path="contacts" element={<AdminContacts />} />
</Route> */}

</Routes>
</BrowserRouter>
   </>
  );
}

export default App;
