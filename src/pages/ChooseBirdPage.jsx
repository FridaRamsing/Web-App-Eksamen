import blueEgg from "../../Images/Blue egg.png";
import pinkEgg from "../../Images/Pink egg.png";
import yellowEgg from "../../Images/Yellow egg.png";
import EggChoice from "../components/EggChoice";

export default function ChooseBirdPage() {
  return (
    <main className="auth-page">
      <section className="auth-shell choose-bird-screen">
        <h1 className="choose-bird-title">Pick An Egg</h1>

        <div className="egg-choice-grid">
          <EggChoice image={blueEgg} alt="Blue egg" to="/bird-reveal/eagle" className="egg-choice-blue" />
          <EggChoice image={pinkEgg} alt="Pink egg" to="/bird-reveal/hummingbird" className="egg-choice-pink" />
          <EggChoice image={yellowEgg} alt="Yellow egg" to="/bird-reveal/duck" className="egg-choice-yellow" />
        </div>
      </section>
    </main>
  );
}
