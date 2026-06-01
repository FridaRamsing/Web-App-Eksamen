import { useState } from "react";
import { Link, Navigate, useParams } from "react-router";
import BackLink from "../components/BackLink";
import StruggleOption from "../components/StruggleOption";
import { birdProfiles } from "../data/birdProfiles";
import sleepIcon from "../../Images/Sleep icon.svg";
import flowerIcon from "../../Images/flower icon.png";
import runIcon from "../../Images/Run icon.svg";

const goalCountOptions = [
  { label: "1-5 goals", icon: sleepIcon },
  { label: "6-10 goals", icon: flowerIcon },
  { label: "11-15 goals", icon: flowerIcon },
  { label: "15+ goals", icon: runIcon },
];

export default function GoalCountPage() {
  const { bird } = useParams();
  const [selectedGoalCount, setSelectedGoalCount] = useState("");

  if (!birdProfiles[bird]) {
    return <Navigate to="/choose-bird" replace />;
  }

  return (
    <main className="auth-page">
      <section className="auth-shell struggles-screen goal-count-screen">
        <BackLink to={`/struggles/${bird}`} />

        <div className="struggles-copy goal-count-copy">
          <h1>How many goals do you see fit?</h1>
          <p>Please select one to continue. Remeber you can always add more goals along the way</p>
        </div>

        <div className="struggle-list goal-count-list">
          {goalCountOptions.map((option) => (
            <StruggleOption
              key={option.label}
              icon={option.icon}
              label={option.label}
              selected={selectedGoalCount === option.label}
              onClick={() => setSelectedGoalCount(option.label)}
            />
          ))}
        </div>

        <Link className="auth-button struggles-next-button" to={`/goals/${bird}`}>
          Next
        </Link>
      </section>
    </main>
  );
}
