import { useState } from "react";
import { Link, Navigate, useParams } from "react-router";
import BackLink from "../components/BackLink";
import StruggleOption from "../components/StruggleOption";
import { birdProfiles } from "../data/birdProfiles";
import sleepIcon from "../../Images/Sleep icon.svg";
import flowerIcon from "../../Images/flower icon.png";
import runIcon from "../../Images/Run icon.svg";
import heartIcon from "../../Images/Heart icon.svg";

const struggleOptions = [
  { label: "Sleep", icon: sleepIcon },
  { label: "Mental illness", icon: flowerIcon },
  { label: "Hygiene", icon: flowerIcon },
  { label: "Exercise", icon: runIcon },
  { label: "Self-kindness", icon: heartIcon },
];

export default function StrugglesPage() {
  const { bird } = useParams();
  const [selectedStruggles, setSelectedStruggles] = useState([]);

  if (!birdProfiles[bird]) {
    return <Navigate to="/choose-bird" replace />;
  }

  function toggleStruggle(label) {
    setSelectedStruggles((currentStruggles) =>
      currentStruggles.includes(label)
        ? currentStruggles.filter((struggle) => struggle !== label)
        : [...currentStruggles, label],
    );
  }

  return (
    <main className="auth-page">
      <section className="auth-shell struggles-screen">
        <BackLink to={`/bird-name/${bird}`} />

        <div className="struggles-copy">
          <h1>What do you struggle with?</h1>
          <p>Please select one or more struggle to continue</p>
        </div>

        <div className="struggle-list">
          {struggleOptions.map((option) => (
            <StruggleOption
              key={option.label}
              icon={option.icon}
              label={option.label}
              selected={selectedStruggles.includes(option.label)}
              onClick={() => toggleStruggle(option.label)}
            />
          ))}
        </div>

        <Link className="auth-button struggles-next-button" to={`/goal-count/${bird}`}>
          Next
        </Link>
      </section>
    </main>
  );
}
