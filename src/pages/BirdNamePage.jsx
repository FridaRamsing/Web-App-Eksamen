import { Navigate, useParams } from "react-router";
import BirdNameForm from "../components/BirdNameForm";
import { birdProfiles } from "../data/birdProfiles";

export default function BirdNamePage() {
  const { bird } = useParams();
  const selectedBird = birdProfiles[bird];

  if (!selectedBird) {
    return <Navigate to="/choose-bird" replace />;
  }

  return (
    <main className="auth-page">
      <BirdNameForm
        birdName={selectedBird.name}
        image={selectedBird.image}
        alt={selectedBird.alt}
        sound={selectedBird.nameSound}
      />
    </main>
  );
}
