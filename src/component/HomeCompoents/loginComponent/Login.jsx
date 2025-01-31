import "../loginComponent/Login.css";

//image
import loginLogo from "../../../assets/5437683_1-removebg-preview 1.png";

const Login = () => {
  return (
    <div className="login">
      <div className="login1">
          <div className="loginfirstside">
            <img src={loginLogo} alt="" />
          </div>
        <div className="loginSecondside">
          <div className="loginSecondside1">
            <div className="loginSecondside2">
            <div className="loginHeading">
              <h2>Login to your Account</h2>
            </div>
            <div className="loginUserId">
              <div className="userId">
                <p>UserID</p>
              </div>
              <div className="userIdInput">
                <input type="text" />
              </div>
            </div>

            <div className="loginPassword">
              <div className="password">
                <p>Password</p>
              </div>
              <div className="passwordInput">
                <input type="password" />
              </div>
            </div>

            <div className="RememberForgot">
              <div className="RememberMe">
                <input type="checkbox" />
                <span>Remember Me</span>
              </div>
              <div className="forgotPassword">
                <p>Forgot Password?</p>
              </div>
            </div>

            <div className="Loginbtn">
              <button>Login</button>
            </div>
          </div>
        </div>
      </div>
            </div>
    </div>
  );
};

export default Login;
