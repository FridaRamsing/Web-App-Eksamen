import eagleEggImage from "../../Images/Eagle egg.svg";
import hummingbirdEggImage from "../../Images/Hummingbird egg.svg";
import duckEggImage from "../../Images/Duck egg.svg";
import eagleImage from "../../Images/Still eagle.svg";
import hummingbirdImage from "../../Images/hummingbird normal.svg";
import duckImage from "../../Images/duck normal.svg";
import eagleHappyImage from "../../Images/eagle happy.svg";
import hummingbirdHappyImage from "../../Images/hummingbird happy.svg";
import duckHappyImage from "../../Images/duck happy.svg";

export const birdProfiles = {
  eagle: {
    revealTitle: "Hurra An Eagle!",
    name: "eagle",
    sound: "Cheep, Cheep",
    nameSound: "Yubi, I Have A Name!",
    revealImage: eagleEggImage,
    revealAlt: "Eagle hatching from a blue egg",
    image: eagleImage,
    alt: "Eagle standing",
    happyImage: eagleHappyImage,
    happyAlt: "Happy eagle holding a flag and balloon",
    celebrationWord: "cheep",
  },
  hummingbird: {
    revealTitle: "Hurra A Hummingbird!",
    name: "hummingbird",
    sound: "Peep, Peep",
    nameSound: "Yubi, I Have A Name!",
    revealImage: hummingbirdEggImage,
    revealAlt: "Hummingbird hatching from a pink egg",
    image: hummingbirdImage,
    alt: "Hummingbird standing",
    happyImage: hummingbirdHappyImage,
    happyAlt: "Happy hummingbird celebrating",
    celebrationWord: "peep",
  },
  duck: {
    revealTitle: "Hurra A Duck!",
    name: "duck",
    sound: "Quack, Quack",
    nameSound: "Yubi, I Have A Name!",
    revealImage: duckEggImage,
    revealAlt: "Duck hatching from a yellow egg",
    image: duckImage,
    alt: "Duck standing",
    happyImage: duckHappyImage,
    happyAlt: "Happy duck celebrating",
    celebrationWord: "quack",
  },
};
