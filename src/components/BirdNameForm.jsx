import { useState } from "react";
import { useNavigate } from "react-router";
import BackLink from "./BackLink";
import { saveSelectedBirdProfile } from "../data/birdProfiles";
import { hasSupabaseConfig, insertSupabaseRow, SUPABASE_USER_SETTINGS_URL } from "../lib/supabaseFetch";

export default function BirdNameForm({ birdName, image, alt, sound }) {
  const navigate = useNavigate();
  const [humanName, setHumanName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!humanName.trim()) {
      setErrorMessage("Please enter your name first.");
      return;
    }

    setIsSaving(true);
    setErrorMessage("");

    try {
      if (hasSupabaseConfig(SUPABASE_USER_SETTINGS_URL)) {
        await insertSupabaseRow(SUPABASE_USER_SETTINGS_URL, {
          human_name: humanName.trim(),
          bird_type: birdName,
        });
      }

      saveSelectedBirdProfile(birdName, humanName.trim());
      navigate(`/struggles/${birdName}`);
    } catch (error) {
      console.error("Could not save name in Supabase:", error);
      setErrorMessage("The name could not be saved. Please check Supabase and try again.");
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <form className="auth-shell bird-name-screen" onSubmit={handleSubmit}>
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
        value={humanName}
        onChange={(event) => setHumanName(event.target.value)}
      />

      {errorMessage && <p className="auth-error-text">{errorMessage}</p>}

      <button className="auth-button bird-next-button" type="submit" disabled={isSaving}>
        {isSaving ? "Saving..." : "Next"}
      </button>
    </form>
  );
}
