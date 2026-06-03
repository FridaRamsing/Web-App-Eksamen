import { useState } from "react";
import { Link } from "react-router";
import FriendsOverlay from "../components/FriendsOverlay";
import PhoneStatusBar from "../components/PhoneStatusBar";
import { getCurrentBirdProfile, getSavedBirdName } from "../data/birdProfiles";
import menuIcon from "../../Images/Menu.svg";
import bellIcon from "../../Images/bell.svg";
import barbellIcon from "../../Images/mingcute_barbell-line.svg";
import addIcon from "../../Images/add.svg";
import settingsIcon from "../../Images/settings.svg";
import widgetIcon from "../../Images/widget.svg";
import nestIcon from "../../Images/nest.svg";
import shoeIcon from "../../Images/shoe.svg";
import friendsIcon from "../../Images/friends.svg";

const connectOptions = [
  { label: "Add your health app", to: "/health-data" },
  { label: "Add a smartwatch", to: "/health-data" },
];

function HealthBottomNavItem({ label, icon, to, active, onClick }) {
  const className = `home-nav-item ${active ? "home-nav-item-active" : ""}`;
  const content = (
    <>
      <img src={icon} alt="" />
      <span>{label}</span>
    </>
  );

  if (to) {
    return (
      <Link className={className} to={to}>
        {content}
      </Link>
    );
  }

  return (
    <button className={className} type="button" onClick={onClick}>
      {content}
    </button>
  );
}

export default function HealthPage() {
  const [isFriendsOpen, setIsFriendsOpen] = useState(false);
  const currentBird = getCurrentBirdProfile();
  const birdDisplayName = getSavedBirdName(currentBird.displayName);
  const navItems = [
    { label: "Home", icon: nestIcon, to: "/Home" },
    { label: "Health", icon: shoeIcon, active: true },
    { label: "Friends", icon: friendsIcon },
    { label: birdDisplayName, icon: currentBird.navIcon, to: "/profile" },
  ];

  return (
    <main className="auth-page">
      <section className="auth-shell health-screen">
        <div className="health-gym-scene" aria-hidden="true" />

        <PhoneStatusBar className="health-status-bar" />

        <header className="home-top-actions health-top-actions">
          <button type="button" aria-label="Open menu">
            <img src={menuIcon} alt="" />
          </button>
          <Link to="/notifications" aria-label="Open notifications">
            <img src={bellIcon} alt="" />
          </Link>
        </header>

        <img
          className={`health-bird health-bird-${currentBird.name}`}
          src={currentBird.confusedImage}
          alt={currentBird.confusedAlt}
        />

        <section className="health-panel">
          <div className="health-header">
            <div>
              <img src={barbellIcon} alt="" />
              <h1>Health tracker</h1>
            </div>
            <div className="home-goals-tools">
              <button type="button" aria-label="Filter health tracker">
                <img src={settingsIcon} alt="" />
              </button>
              <button type="button" aria-label="Add health tracker item">
                <img src={widgetIcon} alt="" />
              </button>
            </div>
          </div>

          <div className="health-connect-list">
            {connectOptions.map((option) => (
              <Link className="health-connect-card" to={option.to} key={option.label}>
                <img src={addIcon} alt="" />
                <span>{option.label}</span>
              </Link>
            ))}
          </div>

          <p className="health-empty-note">
            There is no date yet. Please connect to your health app and/or a smart watch to get the most out of this
            function
          </p>
        </section>

        <nav
          className={`home-bottom-nav health-bottom-nav ${isFriendsOpen ? "friends-bottom-nav" : ""}`}
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <HealthBottomNavItem
              key={item.label}
              {...item}
              active={item.label === "Friends" ? isFriendsOpen : item.active && !isFriendsOpen}
              onClick={item.label === "Friends" ? () => setIsFriendsOpen(true) : undefined}
            />
          ))}
        </nav>

        {isFriendsOpen && <FriendsOverlay onClose={() => setIsFriendsOpen(false)} />}
      </section>
    </main>
  );
}
