
import { useEffect, useState } from "react";
import { Link } from "react-router";
import FriendsOverlay from "../components/FriendsOverlay";
import PhoneStatusBar from "../components/PhoneStatusBar";
import { getCurrentBirdProfile } from "../data/birdProfiles";
import { fetchSupabaseRows, hasSupabaseConfig } from "../lib/supabaseFetch";
import beachBackground from "../../Images/beach.svg";
import menuIcon from "../../Images/Menu.svg";
import bellIcon from "../../Images/bell.svg";
import calendarIcon from "../../Images/calender.svg";
import settingsIcon from "../../Images/settings.svg";
import widgetIcon from "../../Images/widget.svg";
import clockIcon from "../../Images/Clock Icons.svg";
import toothbrushIcon from "../../Images/Toothbrush Icons.svg";
import chickenIcon from "../../Images/Chicken Icons.svg";
import checkIcon from "../../Images/pencil.svg";
import nestIcon from "../../Images/nest.svg";
import shoeIcon from "../../Images/shoe.svg";
import friendsIcon from "../../Images/friends.svg";

const goalIcons = {
  clock: clockIcon,
  toothbrush: toothbrushIcon,
  chicken: chickenIcon,
};

const fallbackGoals = [
  { id: "local-clock", title: "wake up by 7am", iconKey: "clock" },
  { id: "local-toothbrush", title: "Brush teeth", iconKey: "toothbrush" },
  { id: "local-chicken", title: "Just be", iconKey: "chicken" },
];

function GoalCard({ title, icon }) {
  return (
    <article className="home-goal-card">
      <img src={icon} alt="" />
      <p>{title}</p>
      <button type="button" aria-label={`Complete ${title}`}>
        <img src={checkIcon} alt="" />
      </button>
    </article>
  );
}

function BottomNavItem({ label, icon, active, to, onClick }) {
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

export default function HomePage() {
  const [isFriendsOpen, setIsFriendsOpen] = useState(false);
  const [todaysGoals, setTodaysGoals] = useState(fallbackGoals);
  const currentBird = getCurrentBirdProfile();
  const navItems = [
    { label: "Home", icon: nestIcon, active: true },
    { label: "Health", icon: shoeIcon, to: "/health" },
    { label: "Friends", icon: friendsIcon },
    { label: currentBird.displayName, icon: currentBird.navIcon, to: "/profile" },
  ];

  useEffect(() => {
    if (!hasSupabaseConfig()) return;

    async function loadGoals() {
      try {
        const goals = await fetchSupabaseRows("select=id,title,icon_key,period,completed&order=id.asc");

        if (goals.length > 0) {
          setTodaysGoals(
            goals.map((goal) => ({
              id: goal.id,
              title: goal.title,
              iconKey: goal.icon_key,
            }))
          );
        }
      } catch (error) {
        console.warn("Using local goals because Supabase could not load goals:", error);
      }
    }

    loadGoals();
  }, []);

  return (
    <main className="auth-page">
      <section className="auth-shell home-screen">
        <img className="home-beach-bg" src={beachBackground} alt="" />

        <PhoneStatusBar className="home-status-bar" />

        <header className="home-top-actions">
          <button type="button" aria-label="Open menu">
            <img src={menuIcon} alt="" />
          </button>
          <Link to="/notifications" aria-label="Open notifications">
            <img src={bellIcon} alt="" />
          </Link>
        </header>

        <img className={`home-bird home-bird-${currentBird.name}`} src={currentBird.homeImage} alt={currentBird.homeAlt} />

        <section className="home-goals-panel">
          <div className="home-goals-header">
            <div>
              <img src={calendarIcon} alt="" />
              <h1>Goals for today!</h1>
            </div>
            <div className="home-goals-tools">
              <button type="button" aria-label="Filter goals">
                <img src={settingsIcon} alt="" />
              </button>
              <button type="button" aria-label="Add goal">
                <img src={widgetIcon} alt="" />
              </button>
            </div>
          </div>

          <div className="home-period-heading">
            <span>Morning</span>
            <hr />
          </div>

          <div className="home-goal-list">
            {todaysGoals.map((goal) => (
              <GoalCard key={goal.id} title={goal.title} icon={goalIcons[goal.iconKey] || chickenIcon} />
            ))}
          </div>
        </section>

        <nav className={`home-bottom-nav ${isFriendsOpen ? "friends-bottom-nav" : ""}`} aria-label="Main navigation">
          {navItems.map((item) => (
            <BottomNavItem
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
