export default function LockIcon({
  stroke = "#C4893A",
  size = 24,
  strokeWidth = 2,
}: {
  stroke?: string;
  size?: number;
  strokeWidth?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* The Shackles (the hoop) */}
      <path
        d="M8 11V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V11"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* The Lock Body */}
      <rect
        x="6"
        y="11"
        width="12"
        height="10"
        rx="2"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />

      {/* The Keyhole */}
      <path
        d="M12 17V15"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}
