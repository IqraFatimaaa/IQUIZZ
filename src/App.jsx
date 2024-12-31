import React, { useState } from "react";
import Auth from "./firebase/auth";
import Quiz from "./component/Quiz";
import { auth } from "./firebase/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });
    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setIsLoggedIn(false);
    } catch (error) {
      console.error("Error signing out:", error);
      alert("Failed to log out. Please try again.");
    }
  };

  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to bottom right, #f7c8e0, #ffc8dd)",
    fontFamily: "Arial, sans-serif",
  };

  const buttonStyle = {
    marginBottom: "20px",
    backgroundColor: "#ff5757",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background-color 0.3s",
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: "#d93a3a",
  };

  return (
    <div style={containerStyle}>
      {isLoggedIn ? (
        <div style={{ textAlign: "center" }}>
          <button
            onClick={handleSignOut}
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#d93a3a")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#ff5757")}
          >
            Logout
          </button>
          <Quiz />
        </div>
      ) : (
        <Auth onAuthSuccess={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;
