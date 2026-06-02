import eagleEggImage from "../../Images/Eagle egg.svg";
import hummingbirdEggImage from "../../Images/Hummingbird egg.svg";
import duckEggImage from "../../Images/Duck egg.svg";
import eagleImage from "../../Images/Still eagle.svg";
import hummingbirdImage from "../../Images/hummingbird normal.svg";
import duckImage from "../../Images/duck normal.svg";
import eagleHappyImage from "../../Images/eagle happy.svg";
import hummingbirdHappyImage from "../../Images/hummingbird happy.svg";
import duckHappyImage from "../../Images/duck happy.svg";
import eagleConfusedImage from "../../Images/eagle confused.svg";
import hummingbirdConfusedImage from "../../Images/hummingbird confused.svg";
import duckConfusedImage from "../../Images/duck confused.svg";
import eagleStrongImage from "../../Images/eagle strong.svg";
import hummingbirdStrongImage from "../../Images/Hummingbird strong.svg";
import duckStrongImage from "../../Images/duck strong.svg";
import eagleProfileImage from "../../Images/eagle frame.svg";
import hummingbirdProfileImage from "../../Images/hummingbird myprofile.svg";
import duckProfileImage from "../../Images/duck profile frame.svg";
import eagleProfileIcon from "../../Images/eagle profile icon.svg";
import hummingbirdProfileIcon from "../../Images/hummingbird profile.svg";
import duckProfileIcon from "../../Images/duck profile.svg";

const SELECTED_BIRD_KEY = "fjeraSelectedBird";
const HUMAN_NAME_KEY = "fjeraHumanName";

export const birdProfiles = {
  eagle: {
    revealTitle: "Hurra An Eagle!",
    name: "eagle",
    displayName: "Arlo",
    sound: "Cheep, Cheep",
    nameSound: "Yubi, I Have A Name!",
    revealImage: eagleEggImage,
    revealAlt: "Eagle hatching from a blue egg",
    image: eagleImage,
    alt: "Eagle standing",
    homeImage: eagleImage,
    homeAlt: "Arlo the eagle on the beach",
    confusedImage: eagleConfusedImage,
    confusedAlt: "Arlo the confused eagle",
    strongImage: eagleStrongImage,
    strongAlt: "Arlo the eagle exercising",
    happyImage: eagleHappyImage,
    happyAlt: "Happy eagle holding a flag and balloon",
    profileImage: eagleProfileImage,
    profileAlt: "Arlo the eagle profile",
    navIcon: eagleProfileIcon,
    celebrationWord: "cheep",
  },
  hummingbird: {
    revealTitle: "Hurra A Hummingbird!",
    name: "hummingbird",
    displayName: "Honey",
    sound: "Peep, Peep",
    nameSound: "Yubi, I Have A Name!",
    revealImage: hummingbirdEggImage,
    revealAlt: "Hummingbird hatching from a pink egg",
    image: hummingbirdImage,
    alt: "Hummingbird standing",
    homeImage: hummingbirdImage,
    homeAlt: "Honey the hummingbird flying over the beach",
    confusedImage: hummingbirdConfusedImage,
    confusedAlt: "Honey the confused hummingbird",
    strongImage: hummingbirdStrongImage,
    strongAlt: "Honey the hummingbird exercising",
    happyImage: hummingbirdHappyImage,
    happyAlt: "Happy hummingbird celebrating",
    profileImage: hummingbirdProfileImage,
    profileAlt: "Honey the hummingbird profile",
    navIcon: hummingbirdProfileIcon,
    celebrationWord: "peep",
  },
  duck: {
    revealTitle: "Hurra A Duck!",
    name: "duck",
    displayName: "Marc",
    sound: "Quack, Quack",
    nameSound: "Yubi, I Have A Name!",
    revealImage: duckEggImage,
    revealAlt: "Duck hatching from a yellow egg",
    image: duckImage,
    alt: "Duck standing",
    homeImage: duckImage,
    homeAlt: "Marc the duck on the beach",
    confusedImage: duckConfusedImage,
    confusedAlt: "Marc the confused duck",
    strongImage: duckStrongImage,
    strongAlt: "Marc the duck exercising",
    happyImage: duckHappyImage,
    happyAlt: "Happy duck celebrating",
    profileImage: duckProfileImage,
    profileAlt: "Marc the duck profile",
    navIcon: duckProfileIcon,
    celebrationWord: "quack",
  },
};

export function saveSelectedBirdProfile(birdType, humanName) {
  if (typeof window === "undefined") return;

  localStorage.setItem(SELECTED_BIRD_KEY, birdType);

  if (humanName) {
    localStorage.setItem(HUMAN_NAME_KEY, humanName);
  }
}

export function getCurrentBirdProfile() {
  if (typeof window === "undefined") {
    return birdProfiles.hummingbird;
  }

  const savedBird = localStorage.getItem(SELECTED_BIRD_KEY);
  return birdProfiles[savedBird] || birdProfiles.hummingbird;
}

export function getSavedHumanName() {
  if (typeof window === "undefined") return "Ella";

  return localStorage.getItem(HUMAN_NAME_KEY) || "Ella";
}
