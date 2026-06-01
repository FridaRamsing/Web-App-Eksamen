import { Link } from "react-router";
import signUpPageImage from "../../Images/sign in page.svg";
import GoogleLogo from "../../Images/google.svg";
import FacebookLogo from "../../Images/facebook.svg";
import AppleLogo from "../../Images/apple.svg";


export default function SignUpPage() {
  return (
    <main className="auth-page">
      <section className="auth-shell">
        <div className="login-hero">
          <img
            className="login-image"
            src={signUpPageImage}
            alt="Sign up background for Fjera"
          />
        </div>

        <div className="login-form-section signup-form-section">
          <h1 className="login-title">Sign Up</h1>

          <form className="auth-form">
            <input
              className="auth-input"
              type="email"
              placeholder="Create Email..."
            />

            <input
              className="auth-input"
              type="password"
              placeholder="Create Password..."
            />

            <input
              className="auth-input"
              type="password"
              placeholder="Confirm Password..."
            />

            <Link to="/choose-bird" className="auth-button">
              Create an account
            </Link>
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
            You already have an account? <Link to="/login">login here</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
