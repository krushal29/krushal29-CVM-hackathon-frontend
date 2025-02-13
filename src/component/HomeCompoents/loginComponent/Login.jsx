import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import "../loginComponent/Login.css";
import axios from "axios";
import Cookies from 'js-cookie';

// Image
import loginLogo from "../../../assets/WhatsApp_Image_2025-02-11_at_22.39.35_73ad3a50-removebg-preview.png";

const Login = () => {
  const navigate = useNavigate();
  
  // State for UserID and Password
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  // Handle Login Click
  const handleLogin = async () => {
    if (userId === "" || password === "") {
      alert("Please enter UserID and Password.");
      return;
    }

      try {
        const response = await axios.post(
          "https://humble-spork-g6vw4qjw5wqfv7px-8000.app.github.dev/v1/auth/login",
         JSON.stringify({ username: userId, password: password })
        );
        console.log("Success:", response.data);
        const role=response.data.role;
        const user_id=response.data.user_id;
        const token=response.data.token;

        sessionStorage.setItem("Role",role);
        sessionStorage.setItem("user_id",user_id);
        // Cookies.set("Token",token, { expires: 1/96 });
         Cookies.set("Token",token, { expires: 15 });
        if(role=="student") navigate('/StudentDashboard');
        else if(role=="teacher"||role=="hod"||role=="principal") navigate('/TeacherDashboard');
        else if(role=="admin"||role=="account_staff"||role=="academic_staff") navigate('/adminDashboard');
        else if(role=="parents") navigate('/ParentDashboard');
        else navigate('/'); 
      } catch (error) {
        console.error("Error:", error);
      }

  };



  // useEffect(() => {
    // fetchData();
  // }, []);

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
