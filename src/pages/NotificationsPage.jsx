import BackLink from "../components/BackLink";
import PhoneStatusBar from "../components/PhoneStatusBar";
import mailboxImage from "../../Images/mailbox.svg";

export default function NotificationsPage() {
  return (
    <main className="auth-page">
      <section className="auth-shell notifications-screen">
        <PhoneStatusBar className="notifications-status-bar" />

        <BackLink className="notifications-back-link" to="/Home" label="Go back to home" />

        <img className="notifications-mailbox" src={mailboxImage} alt="Mailbox" />

        <section className="notifications-panel">
          <header className="notifications-header">
            <h1>Notification</h1>
            <button type="button">Clear all</button>
          </header>

          <p className="notifications-empty-message">Arlo doesn't have any messages right now</p>
        </section>
      </section>
    </main>
  );
}
