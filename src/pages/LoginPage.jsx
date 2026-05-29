
import { Link } from "react-router";
import loginPageImage from "../../Images/Login page.svg";
import GoogleLogo from "../../Images/google.svg";
import FacebookLogo from "../../Images/facebook.svg";
import AppleLogo from "../../Images/apple.svg";

export default function LoginPage () {
    return (
      <main className="auth-page">
        <section className="auth-shell">
          <div className="login-hero">
            <img
              className="login-image"
              src={loginPageImage}
              alt="Login background for Fjera"
            />
          </div>

          <div className="login-form-section">
            <h1 className="login-title">Welcome Back</h1>

            <form className="auth-form">
              <input
                className="auth-input"
                type="email"
                placeholder="Enter Email..."
              />

              <input
                className="auth-input"
                type="password"
                placeholder="Enter Password..."
              />

              <button className="auth-button" type="submit">
                Enter
              </button>
            </form>
            <div className="auth-divider">
              <span></span>
              <p>OR</p>
              <span></span>
            </div>

            <div className="social-login-row">
              <img src={GoogleLogo} alt="Google logo" />
              <img src={FacebookLogo} alt="Facebook logo" />
              <img src={AppleLogo} alt="Apple logo" />
            </div>
            
            <p className="auth-small-text">
              You don't have an account? <Link to="/signup">Create one!</Link>
            </p>
          </div>
        </section>
      </main>
    );
}
