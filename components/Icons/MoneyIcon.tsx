export default function MoneyIcon({
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
      <circle cx="12" cy="12" r="10" stroke={stroke} strokeWidth="2" />
      <path
        d="M12 8V16M14.5 10.5C14.5 9.67 13.83 9 13 9H11C10.17 9 9.5 9.67 9.5 10.5C9.5 11.33 10.17 12 11 12H13C13.83 12 14.5 12.67 14.5 13.5C14.5 14.33 13.83 15 13 15H11C10.17 15 9.5 14.33 9.5 13.5"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
