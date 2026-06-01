import statusIcons from "../../Images/iPhone-status-bar(upper)/Status Icons.svg";

export default function PhoneStatusBar({ className = "" }) {
  return (
    <div className={`phone-status-bar ${className}`} aria-hidden="true">
      <span>9:41</span>
      <img src={statusIcons} alt="" />
    </div>
  );
}
