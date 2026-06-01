import { Link, Navigate, useParams } from "react-router";
import { birdProfiles } from "../data/birdProfiles";

export default function BirdRevealPage() {
  const { bird } = useParams();
  const selectedBird = birdProfiles[bird];

  if (!selectedBird) {
    return <Navigate to="/choose-bird" replace />;
  }

  return (
    <main className="auth-page">
      <section className="auth-shell bird-reveal-screen">
        <h1 className="bird-reveal-title">{selectedBird.revealTitle}</h1>

        <img className="bird-reveal-image" src={selectedBird.revealImage} alt={selectedBird.revealAlt} />

        <p className="bird-sound">{selectedBird.sound}</p>

        <label className="bird-name-label" htmlFor="birdName">
          What Is Your Bird's Name?
        </label>

        <input className="auth-input bird-name-input" id="birdName" type="text" placeholder="Name Your Bird..." />

        <Link className="auth-button bird-next-button" to={`/bird-name/${bird}`}>
          Next
        </Link>
      </section>
    </main>
  );
}
