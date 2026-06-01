import { Link } from "react-router";

export default function EggChoice({ image, alt, to, className = "" }) {
  return (
    <Link className={`egg-choice ${className}`} to={to}>
      <img src={image} alt={alt} />
    </Link>
  );
}
