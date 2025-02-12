import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../loginComponent/Login.css";

// Image
import loginLogo from "../../../assets/WhatsApp_Image_2025-02-11_at_22.39.35_73ad3a50-removebg-preview.png";

const Login = () => {
  const navigate = useNavigate();
  
  // State for UserID and Password
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  // Handle Login Click
  const handleLogin = () => {
    if (userId === "" || password === "") {
      alert("Please enter UserID and Password.");
      return;
    }

    // Dummy login check (Replace with actual API request)
    if (userId === "admin" && password === "1234") {
      navigate("/StudentDashboard");
    } else {
      alert("Invalid credentials! Try again.");
    }
  };

  return (
    <div className="login">
      <div className="login1">
        <div className="loginfirstside">
          <img src={loginLogo} alt="Login" />
        </div>
        <div className="loginSecondside">
          <div className="loginSecondside1">
            <div className="loginSecondside2">
              <div className="loginHeading">
                <h2>Login to your Account</h2>
              </div>
              
              {/* UserID Input */}
              <div className="loginUserId">
                <div className="userId">
                  <p>UserID</p>
                </div>
                <div className="userIdInput">
                  <input 
                    type="text" 
                    value={userId} 
                    onChange={(e) => setUserId(e.target.value)} 
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="loginPassword">
                <div className="password">
                  <p>Password</p>
                </div>
                <div className="passwordInput">
                  <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                  />
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="RememberForgot">
                <div className="RememberMe">
                  <input type="checkbox" />
                  <span>Remember Me</span>
                </div>
                <div className="forgotPassword">
                  <p>Forgot Password?</p>
                </div>
              </div>

              {/* Login Button */}
              <div className="Loginbtn">
                <button onClick={handleLogin}>Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
