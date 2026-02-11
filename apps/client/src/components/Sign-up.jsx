import React, { useState } from "react";
import './SignUp.css'

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedForm = { ...formData, [name]: value };
    setFormData(updatedForm);

    if(updatedForm.confirmPassword){
  if(updatedForm.password === updatedForm.confirmPassword){
setSuccess("Password match")
setError('')
  }else{
    setError("Password don't match")
    setSuccess('')
  }
    }else{
    setError("");
    setSuccess("");
    }
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^.{6,}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!passwordRegex.test(formData.password)) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match!");
      return;
    }

    try {
      const response = await fetch("", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Registration failed.");
        return;
      }

      setSuccess("Account created successfully!");
      setFormData({
        name: "",
        email: "",
        role: "",
        password: "",
        confirmPassword: ""
      });

    } catch (err) {
      console.error("Error:", err);
      setError("Server error, please try again.");
    }
  };

  return (
    <div id="signup-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
          required
        />

        <select name="role" value={formData.role}
         onChange={handleChange}
          className="role-drop"
           required>
          <option value="" disabled>Choose role</option>
<option value="Student">Student</option>
<option value="Tutor" >Tutor</option>
        </select>

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter password"
          required
        />

        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm password"
          required
        />

        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}

        <button type="submit">Sign Up</button>
      </form>
      <p className="login-link">Already have an account? <a href="#">Login</a></p>
    </div>
  );
}
