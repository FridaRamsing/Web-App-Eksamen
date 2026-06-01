import { Link, Navigate, useParams } from "react-router";
import { birdProfiles } from "../data/birdProfiles";

export default function OnboardingCompletePage() {
  const { bird } = useParams();
  const profile = birdProfiles[bird];

  if (!profile) {
    return <Navigate to="/choose-bird" replace />;
  }

  return (
    <main className="auth-page">
      <section className="auth-shell complete-screen">
        <img className="complete-bird-image" src={profile.happyImage} alt={profile.happyAlt} />

        <h1>You are all ready to start, {profile.celebrationWord}!</h1>
        <p>Well done, {profile.celebrationWord}! I think we are gonna have fun together, don't you?</p>

        <Link className="auth-button complete-start-button" to="/Home">
          Let's start
        </Link>
      </section>
    </main>
  );
}
