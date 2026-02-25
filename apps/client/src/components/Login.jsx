import React, {useState} from "react";
import './login.css';
import { useNavigate } from "react-router-dom";

export default function LoginForm(){

  const [formData, setFormData] = useState({email:"",password:""});
  const [error, setError]=useState('');
const navigate=useNavigate()

  const handleChange = (e) => { 
    setFormData({ ...formData, [e.target.name]: e.target.value }); };

// Regex patterns 
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
const passwordRegex = /^.{6,}$/;


  const handleSubmit= async(e)=>{
e.preventDefault()

if (!emailRegex.test(formData.email)) { 
    setError("Please enter a valid email address."); 
    return; 
}

if (!passwordRegex.test(formData.password)) { 
    setError( "Password must be at least 6 characters" );
     return; }

if (!formData.email.trim() || !formData.password.trim()) {
      setError('Please enter both email and password.');
      return;
    }
console.log("loggin in")
// CALL API
// If validation passes, send to backend 

try {
 const response = await fetch("http://localhost:3000/users/login", {
     method: "POST",
     headers: { "Content-Type": "application/json" }, 
     body: JSON.stringify(formData), }); 
     
     const data = await response.json(); 
     // Save user info for later 

     if (!response.ok) { 
        setError(data.error || "Login failed"); 
        return; 
    }

    localStorage.setItem("user", JSON.stringify(data));

    alert("Login successful!"); 
    console.log("User logged in:", data);
    navigate("/questions")

    setFormData({email:"",password:""})

 } catch (err) { 
    console.error("Error:", err);
     alert("Server error, please try again."); 
    
    }
     

  }

  return (
    <div id="login-container">
        <h1>Login</h1>
    <form onSubmit={handleSubmit} >

    <input type="email"
     value={formData.email}
      onChange={handleChange}
      placeholder="Enter email"
      name="email"
       required/>

       <input type="password"
        value={formData.password}
        placeholder="Enter password"
        onChange={handleChange}
        name="password"
        required
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Login</button>
<p className="sign-link">Don't have an account? <a href="#">Sign-up</a></p>
    </form>
    </div>
  )

}