import { Link } from "react-router";
import BackLink from "../components/BackLink";
import PhoneStatusBar from "../components/PhoneStatusBar";

function EditBirdField({ label, placeholder }) {
  return (
    <label className="edit-bird-card">
      <span>{label}</span>
      <input type="text" placeholder={placeholder} />
    </label>
  );
}

export default function EditBirdPage() {
  return (
    <main className="auth-page">
      <section className="auth-shell edit-bird-screen">
        <PhoneStatusBar />
        <BackLink to="/profile" />

        <h1>EDIT YOUR BIRD</h1>

        <form className="edit-bird-form">
          <EditBirdField label="CHANGE THEIR NAME" placeholder="New Name" />
          <EditBirdField label="CHANGE WHAT YOUR BIRD CALL YOU" placeholder="New Name" />

          <Link className="edit-bird-save-button" to="/profile">
            Save
          </Link>
        </form>
      </section>
    </main>
  );
}
