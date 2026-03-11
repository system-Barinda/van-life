import React from "react";
import "./login.css";

export default function Login() {
  return (
    <div className="login-page">

      {/* Navbar */}
      <header className="navbar">
        <h2 className="logo">#VANLIFE</h2>

        <nav>
          <a href="#">Host</a>
          <a href="#">About</a>
          <a href="#">Vans</a>
          <span className="profile">👤</span>
        </nav>
      </header>

      {/* Login Form */}
      <div className="login-container">
        <h1>Sign in to your account</h1>

        <form className="login-form">
          <input type="email" placeholder="Email address" />
          <input type="password" placeholder="Password" />

          <button type="submit">Sign in</button>
        </form>

        <p className="signup-text">
          Don't have an account? <span>Create one now</span>
        </p>
      </div>

      {/* Footer */}
      <footer className="footer">
        © 2022 #VANLIFE
      </footer>

    </div>
  );
}