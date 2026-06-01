import { useState } from "react";
import friendsIcon from "../../Images/friends.svg";
import huggingIcon from "../../Images/twemoji_people-hugging.svg";
import wavingIcon from "../../Images/twemoji_waving-hand.svg";
import birdsIcon from "../../Images/birds.svg";

export default function FriendsOverlay({ onClose }) {
  const [isClosing, setIsClosing] = useState(false);

  function handleClose() {
    if (isClosing) return;

    setIsClosing(true);
    window.setTimeout(() => {
      onClose?.();
    }, 260);
  }

  return (
    <>
      <button
        className={`friends-overlay-dim ${isClosing ? "friends-overlay-dim-closing" : ""}`}
        type="button"
        aria-label="Close friends menu"
        onClick={handleClose}
      />

      <section className={`friends-overlay ${isClosing ? "friends-overlay-closing" : ""}`} aria-label="Friends menu">
        <img className="friends-overlay-badge" src={friendsIcon} alt="" />
        <h2>Friends</h2>

        <div className="friends-overlay-actions">
          <button className="friends-overlay-card friends-overlay-card-wide" type="button">
            <img src={huggingIcon} alt="" />
            <span>Your friends</span>
          </button>

          <button className="friends-overlay-card" type="button">
            <img src={wavingIcon} alt="" />
            <span>Find new friends</span>
          </button>

          <button className="friends-overlay-card" type="button">
            <img src={birdsIcon} alt="" />
            <span>Find a community</span>
          </button>
        </div>
      </section>
    </>
  );
}
