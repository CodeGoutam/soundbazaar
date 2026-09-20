export default function SearchIcon({
  stroke = "#C4893A",
  size = 24,
}: {
  stroke?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Magnifying Glass Circle */}
      <circle cx="11" cy="11" r="7" stroke={stroke} strokeWidth="2" />
      {/* Handle */}
      <path
        d="M16 16L21 21"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
