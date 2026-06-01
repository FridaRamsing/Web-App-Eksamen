import { Link } from "react-router";
import BackLink from "./BackLink";

export default function BirdNameForm({ birdName, image, alt, sound }) {
  return (
    <section className="auth-shell bird-name-screen">
      <BackLink to="/choose-bird" />

      <h1 className="bird-name-title">I have a name!</h1>

      <img className="bird-name-image" src={image} alt={alt} />

      <p className="bird-name-sound">{sound}</p>

      <label className="bird-name-label" htmlFor={`${birdName}UserName`}>
        What Is Your Name?
      </label>

      <input
        className="auth-input bird-name-input"
        id={`${birdName}UserName`}
        type="text"
        placeholder="Enter Your Name..."
      />

      <Link className="auth-button bird-next-button" to={`/struggles/${birdName}`}>
        Next
      </Link>
    </section>
  );
}
