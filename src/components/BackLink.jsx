import { Link } from "react-router";
import backArrowIcon from "../../Images/streamline_arrow-bend-left-down-2-solid.svg";

export default function BackLink({ to, label = "Go back", className = "" }) {
  return (
    <Link className={`app-back-link ${className}`} to={to} aria-label={label}>
      <img src={backArrowIcon} alt="" />
    </Link>
  );
}
