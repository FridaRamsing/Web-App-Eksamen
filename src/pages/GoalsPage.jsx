import { useState } from "react";
import { Link, Navigate, useParams } from "react-router";
import BackLink from "../components/BackLink";
import StruggleOption from "../components/StruggleOption";
import { birdProfiles } from "../data/birdProfiles";
import penIcon from "../../Images/Pen Icons.svg";
import toothbrushIcon from "../../Images/Toothbrush Icons.svg";
import clockIcon from "../../Images/Clock Icons.svg";
import soapIcon from "../../Images/Soap Icons.svg";
import chickenIcon from "../../Images/Chicken Icons.svg";

const goalOptions = [
  { label: "It is too overwhelming, you make my list", icon: penIcon },
  { label: "Brush your teeth", icon: toothbrushIcon },
  { label: "Stop work by 6pm", icon: clockIcon },
  { label: "Take a shower", icon: soapIcon },
  { label: "Just be", icon: chickenIcon },
  { label: "Write in my diary", icon: penIcon },
];

export default function GoalsPage() {
  const { bird } = useParams();
  const [selectedGoals, setSelectedGoals] = useState([]);

  if (!birdProfiles[bird]) {
    return <Navigate to="/choose-bird" replace />;
  }

  function toggleGoal(label) {
    setSelectedGoals((currentGoals) =>
      currentGoals.includes(label)
        ? currentGoals.filter((goal) => goal !== label)
        : [...currentGoals, label],
    );
  }

  return (
    <main className="auth-page">
      <section className="auth-shell struggles-screen goals-screen">
        <BackLink to={`/goal-count/${bird}`} />

        <div className="goals-scroll-area">
          <div className="struggles-copy goals-copy">
            <h1>Any goals you see fit for you?</h1>
            <p>Select some of the goals you want to complete on your to-do list. If it is overwhelming let us do it.</p>
          </div>

          <div className="struggle-list goals-list">
            {goalOptions.map((option) => (
              <StruggleOption
                key={option.label}
                icon={option.icon}
                label={option.label}
                selected={selectedGoals.includes(option.label)}
                onClick={() => toggleGoal(option.label)}
                className="goal-option"
              />
            ))}
          </div>
        </div>

        <Link className="auth-button struggles-next-button goals-next-button" to={`/onboarding-complete/${bird}`}>
          Next
        </Link>
      </section>
    </main>
  );
}
