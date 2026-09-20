export default function LogoIcon({
  fill = "#C4893A",
  size = 17,
}: {
  fill?: string;
  size?: number;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 17 17" fill="none">
      <circle cx="5" cy="11" r="2.5" fill={fill} />
      <rect x="7" y="2" width="1.5" height="9.5" rx="0.75" fill="white" />
      <rect
        x="9.5"
        y="1"
        width="1.5"
        height="7"
        rx="0.75"
        fill="white"
        opacity="0.6"
      />
      <rect
        x="12"
        y="3"
        width="1.5"
        height="5"
        rx="0.75"
        fill="white"
        opacity="0.35"
      />
    </svg>
  );
}
