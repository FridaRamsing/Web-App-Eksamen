export default function StruggleOption({ icon, label, selected, onClick, className = "" }) {
  return (
    <button
      className={`struggle-option ${selected ? "struggle-option-selected" : ""} ${className}`}
      type="button"
      onClick={onClick}
    >
      <img src={icon} alt="" />
      <span>{label}</span>
    </button>
  );
}
