import { useState } from "react";
import { Link } from "react-router";
import FriendsOverlay from "../components/FriendsOverlay";
import PhoneStatusBar from "../components/PhoneStatusBar";
import { getCurrentBirdProfile, getSavedBirdName } from "../data/birdProfiles";
import menuIcon from "../../Images/Menu.svg";
import bellIcon from "../../Images/bell.svg";
import barbellIcon from "../../Images/mingcute_barbell-line.svg";
import settingsIcon from "../../Images/settings.svg";
import widgetIcon from "../../Images/widget.svg";
import targetIcon from "../../Images/health icons.svg";
import runIcon from "../../Images/Run icon.svg";
import sleepIcon from "../../Images/Sleep icon.svg";
import muscleIcon from "../../Images/muscle.svg";
import heartIcon from "../../Images/Heart icon.svg";
import nestIcon from "../../Images/nest.svg";
import shoeIcon from "../../Images/shoe.svg";
import friendsIcon from "../../Images/friends.svg";

const healthCardColumns = [
  [
    { title: "Calories Burned", value: "1.425", icon: targetIcon, size: "large" },
    { title: "Sleep", value: "7h 29min", icon: sleepIcon },
    { title: "Average Heart Rate", value: "97 bpm", icon: heartIcon, size: "large" },
  ],
  [
    { title: "Steps", value: "5.934", icon: runIcon },
    { title: "Exercise", value: "2h 43min", icon: muscleIcon, size: "large" },
    { title: "Heart Rate", value: "88bpm", icon: heartIcon },
    { title: "Sleep Quality", value: "Good", icon: sleepIcon },
  ],
];

function HealthDataNavItem({ label, icon, to, active, onClick }) {
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

function HealthMetricCard({ title, value, icon, size }) {
  return (
    <article className={`health-metric-card ${size === "large" ? "health-metric-card-large" : ""}`}>
      <img src={icon} alt="" />
      <div>
        <h2>{title}</h2>
        <p>{value}</p>
      </div>
      <button type="button" aria-label={`More options for ${title}`}>
        <span />
        <span />
        <span />
      </button>
    </article>
  );
}

export default function HealthDataPage() {
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
          className={`health-data-bird health-data-bird-${currentBird.name}`}
          src={currentBird.strongImage}
          alt={currentBird.strongAlt}
        />

        <section className="health-panel health-data-panel">
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

          <div className="health-metric-grid">
            {healthCardColumns.map((column) => (
              <div className="health-metric-column" key={column[0].title}>
                {column.map((card) => (
                  <HealthMetricCard key={card.title} {...card} />
                ))}
              </div>
            ))}
          </div>
        </section>

        <nav
          className={`home-bottom-nav health-bottom-nav ${isFriendsOpen ? "friends-bottom-nav" : ""}`}
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <HealthDataNavItem
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
