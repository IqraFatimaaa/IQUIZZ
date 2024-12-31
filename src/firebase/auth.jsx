import React, { useState } from "react";
import { auth } from "./firebase"; // Import your Firebase auth instance
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Signed up successfully:", userCredential.user);
      setErrorMessage(""); // Clear error message on success
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Logged in successfully:", userCredential.user);
      setErrorMessage(""); // Clear error message on success
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const userCredential = await signInWithPopup(auth, provider);
      console.log("Google Sign-In successful:", userCredential.user);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to bottom right, #f8cdd7, #eabacb)",
    fontFamily: "Arial, sans-serif",
  };

  const boxStyle = {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    width: "350px",
    textAlign: "center",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "5px",
    outline: "none",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  };

  const submitButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#0e8754",
    color: "#fff",
  };
  const googleButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#4285F4",
    color: "#fff",
  };
  const toggleButtonStyle = {
    background: "none",
    border: "none",
    color: "#0f597b",
    cursor: "pointer",
    textDecoration: "underline",
  };

  const errorStyle = { color: "red", margin: "10px 0" };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h2>{isSignup ? "Sign Up" : "Log In"}</h2>
        <input
          style={inputStyle}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          style={inputStyle}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorMessage && <div style={errorStyle}>{errorMessage}</div>}
        <button
          style={submitButtonStyle}
          onClick={isSignup ? handleSignup : handleLogin}
        >
          {isSignup ? "Sign Up" : "Log In"}
        </button>
        <button style={googleButtonStyle} onClick={handleGoogleLogin}>
          Sign In with Google
        </button>
        <button
          style={toggleButtonStyle}
          onClick={() => setIsSignup(!isSignup)}
        >
          {isSignup
            ? "Already have an account? Log In"
            : "Don't have an account? Sign Up"}
        </button>
      </div>
    </div>
  );
};

export default Auth;
