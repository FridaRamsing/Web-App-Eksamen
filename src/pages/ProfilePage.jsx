import { useState } from "react";
import { Link } from "react-router";
import BackLink from "../components/BackLink";
import FriendsOverlay from "../components/FriendsOverlay";
import PhoneStatusBar from "../components/PhoneStatusBar";
import { getCurrentBirdProfile, getSavedHumanName } from "../data/birdProfiles";
import pencilProfileIcon from "../../Images/pencilprofile.svg";
import copyIcon from "../../Images/copy.svg";
import weightIcon from "../../Images/weight.svg";
import heightIcon from "../../Images/height.svg";
import wingspanIcon from "../../Images/wingspan.svg";
import sunIcon from "../../Images/twemoji_sun-with-face.svg";
import smallBandIcon from "../../Images/small band.svg";
import nestIcon from "../../Images/nest.svg";
import shoeIcon from "../../Images/shoe.svg";
import friendsIcon from "../../Images/friends.svg";

const measurements = [
  { icon: weightIcon, value: "12g" },
  { icon: heightIcon, value: "11 cm" },
  { icon: wingspanIcon, value: "27,5 cm" },
];

const weekdays = ["M", "T", "W", "T", "F", "S", "S"];
const streakCells = Array.from({ length: 35 }, (_, index) => index);

function ProfileBottomNavItem({ label, icon, to, active, onClick }) {
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

export default function ProfilePage() {
  const [isFriendsOpen, setIsFriendsOpen] = useState(false);
  const currentBird = getCurrentBirdProfile();
  const humanName = getSavedHumanName();
  const profileStats = [
    { label: "AGE", value: "1 day" },
    { label: "FRIENDSHIP", value: "New friend" },
    { label: "HUMAN", value: humanName },
  ];
  const navItems = [
    { label: "Home", icon: nestIcon, to: "/Home" },
    { label: "Health", icon: shoeIcon, to: "/health" },
    { label: "Friends", icon: friendsIcon },
    { label: currentBird.displayName, icon: currentBird.navIcon, active: true },
  ];

  return (
    <main className="auth-page">
      <section className="auth-shell profile-screen">
        <BackLink className="profile-back-link" to="/Home" label="Go back to home" />

        <div className="profile-scroll-area">
          <PhoneStatusBar className="profile-status-bar" />

          <section className="profile-hero-card">
            <Link className="profile-edit-button" to="/edit-bird" aria-label="Edit profile">
              <img src={pencilProfileIcon} alt="" />
            </Link>

            <div className="profile-intro">
              <img
                className={`profile-bird-image profile-bird-image-${currentBird.name}`}
                src={currentBird.profileImage}
                alt={currentBird.profileAlt}
              />

              <div className="profile-name-block">
                <h1>{currentBird.displayName}</h1>
                <p>Friendship code</p>
                <div className="profile-code-row">
                  <span>V10YOURMAM</span>
                  <button type="button" aria-label="Copy friendship code">
                    <img src={copyIcon} alt="" />
                  </button>
                </div>
              </div>
            </div>

            <dl className="profile-stat-list">
              {profileStats.map((stat) => (
                <div key={stat.label}>
                  <dt>{stat.label}</dt>
                  <dd>{stat.value}</dd>
                </div>
              ))}
            </dl>

            <div className="profile-measurements">
              {measurements.map((item) => (
                <span key={item.value}>
                  <img src={item.icon} alt="" />
                  {item.value}
                </span>
              ))}
            </div>
          </section>

          <section className="profile-streak-card">
            <div className="profile-bands" aria-hidden="true">
              {Array.from({ length: 6 }, (_, index) => (
                <img key={index} src={smallBandIcon} alt="" />
              ))}
            </div>

            <header className="profile-streak-header">
              <img src={sunIcon} alt="" />
              <div>
                <h2>1 day streak</h2>
                <p>Longest self-care streak ever!</p>
              </div>
            </header>

            <div className="profile-streak-calendar" aria-label="Weekly streak calendar">
              {weekdays.map((day, index) => (
                <strong key={`${day}-${index}`}>{day}</strong>
              ))}
              {streakCells.map((cell) => (
                <span
                  className={cell < 4 ? "profile-streak-cell-filled" : cell === 4 ? "profile-streak-cell-active" : ""}
                  key={cell}
                />
              ))}
            </div>

            <p className="profile-streak-note">Keep checking in every day to keep and expand your streak</p>
          </section>
        </div>

        <nav
          className={`home-bottom-nav profile-bottom-nav ${isFriendsOpen ? "friends-bottom-nav" : ""}`}
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <ProfileBottomNavItem
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
