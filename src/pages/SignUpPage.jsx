import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { signUpWithEmail } from "../lib/supabaseFetch";
import signUpPageImage from "../../Images/sign in page.svg";
import GoogleLogo from "../../Images/google.svg";
import FacebookLogo from "../../Images/facebook.svg";
import AppleLogo from "../../Images/apple.svg";


export default function SignUpPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSignUp(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords need to match.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      await signUpWithEmail(email.trim(), password);
      navigate("/choose-bird");
    } catch (error) {
      console.error("Could not create account with Supabase:", error);
      setErrorMessage(error.message || "The account could not be created. Please try another email or password.");
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
            src={signUpPageImage}
            alt="Sign up background for Fjera"
          />
        </div>

        <div className="login-form-section signup-form-section">
          <h1 className="login-title">Sign Up</h1>

          <form className="auth-form" onSubmit={handleSignUp}>
            <input
              className="auth-input"
              type="email"
              placeholder="Create Email..."
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />

            <input
              className="auth-input"
              type="password"
              placeholder="Create Password..."
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />

            <input
              className="auth-input"
              type="password"
              placeholder="Confirm Password..."
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              required
            />

            {errorMessage && <p className="auth-error-text">{errorMessage}</p>}

            <button className="auth-button" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Creating..." : "Create an account"}
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
            You already have an account? <Link to="/login">login here</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
