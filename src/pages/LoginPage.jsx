
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { signInWithEmail } from "../lib/supabaseFetch";
import loginPageImage from "../../Images/Login page.svg";
import GoogleLogo from "../../Images/google.svg";
import FacebookLogo from "../../Images/facebook.svg";
import AppleLogo from "../../Images/apple.svg";

export default function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleLogin(event) {
      event.preventDefault();

      setIsSubmitting(true);
      setErrorMessage("");

      try {
        await signInWithEmail(email.trim(), password);
        navigate("/Home");
      } catch (error) {
        console.error("Could not log in with Supabase:", error);
        setErrorMessage(error.message || "Login failed. Please check your email and password.");
      } finally {
        setIsSubmitting(false);
      }
    }

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

            <form className="auth-form" onSubmit={handleLogin}>
              <input
                className="auth-input"
                type="email"
                placeholder="Enter Email..."
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />

              <input
                className="auth-input"
                type="password"
                placeholder="Enter Password..."
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />

              {errorMessage && <p className="auth-error-text">{errorMessage}</p>}

              <button className="auth-button" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Logging in..." : "Enter"}
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
