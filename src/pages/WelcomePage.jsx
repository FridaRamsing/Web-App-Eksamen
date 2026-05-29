import { Link } from "react-router";
import welcomePageImage from "../../Images/Welcome page new.svg";

export default function WelcomePage() {
  return (
    <main className="auth-page">
      <section className="auth-shell">
        <div className="welcome-hero">
          <img
            className="welcome-image"
            src={welcomePageImage}
            alt="Welcome illustration for Fjera"
          />
        </div>

        <div className="welcome-actions-section">
          <h1 className="welcome-title">
            <span> Welcome</span>
            <span> to Fjera</span>
          </h1>
          <div className="auth-actions">
            <Link to="/login" className="auth-button">
              Login
            </Link>

            <Link to="/signup" className="auth-button">
              Sign up
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
