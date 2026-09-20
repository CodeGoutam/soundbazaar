// ─── Inline SVG illustrations for service type cards ─────────────────────────
// Used when a service has no uploaded image

export function SoundIllustration() {
  return (
    <svg
      viewBox="0 0 300 170"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
    >
      <rect width="300" height="170" fill="#F5F3EF" />
      {/* Speaker cabinet */}
      <rect x="105" y="25" width="90" height="110" rx="10" fill="#E8E4DE" />
      <rect x="117" y="37" width="66" height="66" rx="8" fill="#D3D1C7" />
      {/* Woofer cone rings */}
      <circle cx="150" cy="70" r="28" fill="#B4B2A9" />
      <circle cx="150" cy="70" r="18" fill="#888780" />
      <circle cx="150" cy="70" r="10" fill="#5F5E5A" />
      <circle cx="150" cy="70" r="4" fill="#2C2C2A" />
      {/* Tweeter */}
      <rect x="130" y="108" width="40" height="14" rx="5" fill="#B4B2A9" />
      <circle cx="150" cy="115" r="4" fill="#888780" />
      {/* Speaker grille dots */}
      <circle cx="122" cy="118" r="2" fill="#D3D1C7" />
      <circle cx="178" cy="118" r="2" fill="#D3D1C7" />
      {/* Sound waves left */}
      <path
        d="M78 52 Q64 70 78 88"
        stroke="#D3D1C7"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M62 40 Q40 70 62 100"
        stroke="#B4B2A9"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Sound waves right */}
      <path
        d="M222 52 Q236 70 222 88"
        stroke="#D3D1C7"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M238 40 Q260 70 238 100"
        stroke="#B4B2A9"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Stand */}
      <rect x="143" y="135" width="14" height="20" rx="3" fill="#D3D1C7" />
      <rect x="128" y="152" width="44" height="6" rx="3" fill="#B4B2A9" />
    </svg>
  );
}

export function DJIllustration() {
  return (
    <svg
      viewBox="0 0 300 170"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
    >
      <rect width="300" height="170" fill="#E1F5EE" />
      {/* DJ controller body */}
      <rect x="45" y="48" width="210" height="90" rx="14" fill="#9FE1CB" />
      {/* Left turntable */}
      <circle cx="100" cy="93" r="34" fill="#5DCAA5" />
      <circle cx="100" cy="93" r="22" fill="#1D9E75" />
      <circle cx="100" cy="93" r="12" fill="#0F6E56" />
      <circle cx="100" cy="93" r="5" fill="#085041" />
      {/* Right turntable */}
      <circle cx="200" cy="93" r="34" fill="#5DCAA5" />
      <circle cx="200" cy="93" r="22" fill="#1D9E75" />
      <circle cx="200" cy="93" r="12" fill="#0F6E56" />
      <circle cx="200" cy="93" r="5" fill="#085041" />
      {/* Crossfader center section */}
      <rect x="140" y="65" width="20" height="56" rx="5" fill="#0F6E56" />
      {/* Mixer knobs */}
      <circle cx="150" cy="78" r="5" fill="#9FE1CB" />
      <circle cx="150" cy="93" r="5" fill="#9FE1CB" />
      <circle cx="150" cy="108" r="5" fill="#9FE1CB" />
      {/* Base platform */}
      <rect x="45" y="135" width="210" height="8" rx="4" fill="#9FE1CB" />
      {/* Light strip at top */}
      <rect x="55" y="50" width="190" height="5" rx="2.5" fill="#5DCAA5" />
    </svg>
  );
}

export function LightingIllustration() {
  return (
    <svg
      viewBox="0 0 300 170"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
    >
      <rect width="300" height="170" fill="#FAEEDA" />
      {/* Truss bar */}
      <rect x="30" y="18" width="240" height="8" rx="4" fill="#BA7517" />
      {/* Fixtures hanging */}
      <rect x="68" y="22" width="4" height="16" fill="#BA7517" />
      <rect x="148" y="22" width="4" height="12" fill="#BA7517" />
      <rect x="48" y="26" width="4" height="18" fill="#BA7517" opacity="0.7" />
      <rect x="228" y="22" width="4" height="16" fill="#BA7517" />
      {/* Moving heads */}
      <rect x="58" y="38" width="28" height="22" rx="5" fill="#EF9F27" />
      <rect x="138" y="34" width="28" height="22" rx="5" fill="#EF9F27" />
      <rect x="38" y="44" width="24" height="18" rx="5" fill="#FAC775" />
      <rect x="218" y="38" width="28" height="22" rx="5" fill="#EF9F27" />
      {/* Light beams */}
      <polygon
        points="60,60 88,60 104,120 44,120"
        fill="#EF9F27"
        opacity="0.2"
      />
      <polygon
        points="140,56 166,56 180,130 126,130"
        fill="#BA7517"
        opacity="0.18"
      />
      <polygon
        points="40,62 62,62 72,115 30,115"
        fill="#FAC775"
        opacity="0.2"
      />
      <polygon
        points="220,60 246,60 258,118 208,118"
        fill="#EF9F27"
        opacity="0.2"
      />
      {/* Light spots on floor */}
      <ellipse cx="74" cy="135" rx="26" ry="10" fill="#EF9F27" opacity="0.35" />
      <ellipse
        cx="153"
        cy="142"
        rx="30"
        ry="11"
        fill="#BA7517"
        opacity="0.28"
      />
      <ellipse cx="51" cy="132" rx="22" ry="8" fill="#FAC775" opacity="0.3" />
      <ellipse cx="233" cy="135" rx="26" ry="10" fill="#EF9F27" opacity="0.3" />
      {/* Lens circles */}
      <circle cx="72" cy="49" r="6" fill="#FAC775" />
      <circle cx="152" cy="45" r="6" fill="#FAC775" />
      <circle cx="50" cy="53" r="5" fill="#FAC775" opacity="0.8" />
      <circle cx="232" cy="49" r="6" fill="#FAC775" />
    </svg>
  );
}

export function ComboIllustration() {
  return (
    <svg
      viewBox="0 0 300 170"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
    >
      <rect width="300" height="170" fill="#EEEDFE" />
      {/* Three speakers at different heights */}
      <rect x="30" y="60" width="60" height="82" rx="10" fill="#AFA9EC" />
      <circle cx="60" cy="88" r="20" fill="#7F77DD" />
      <circle cx="60" cy="88" r="10" fill="#534AB7" />
      <circle cx="60" cy="88" r="4" fill="#26215C" />
      <rect x="118" y="42" width="64" height="100" rx="10" fill="#AFA9EC" />
      <circle cx="150" cy="74" r="24" fill="#7F77DD" />
      <circle cx="150" cy="74" r="12" fill="#534AB7" />
      <circle cx="150" cy="74" r="5" fill="#26215C" />
      <rect x="210" y="55" width="60" height="87" rx="10" fill="#AFA9EC" />
      <circle cx="240" cy="88" r="20" fill="#7F77DD" />
      <circle cx="240" cy="88" r="10" fill="#534AB7" />
      <circle cx="240" cy="88" r="4" fill="#26215C" />
      {/* Stage lights above */}
      <rect
        x="60"
        y="12"
        width="180"
        height="6"
        rx="3"
        fill="#534AB7"
        opacity="0.5"
      />
      <polygon
        points="148,18 163,18 158,35 153,35"
        fill="#EF9F27"
        opacity="0.9"
      />
      <polygon points="85,22 98,22 94,36 89,36" fill="#FAC775" opacity="0.7" />
      <polygon
        points="210,20 222,20 219,32 213,32"
        fill="#FAC775"
        opacity="0.7"
      />
      {/* Light spots */}
      <ellipse cx="155" cy="50" rx="12" ry="5" fill="#EF9F27" opacity="0.35" />
      {/* Wires */}
      <line
        x1="90"
        y1="100"
        x2="118"
        y2="92"
        stroke="#7F77DD"
        strokeWidth="1.5"
        opacity="0.4"
      />
      <line
        x1="182"
        y1="92"
        x2="210"
        y2="100"
        stroke="#7F77DD"
        strokeWidth="1.5"
        opacity="0.4"
      />
    </svg>
  );
}

export const ILLUSTRATIONS: Record<string, React.ReactNode> = {
  sound: <SoundIllustration />,
  dj: <DJIllustration />,
  lighting: <LightingIllustration />,
  combo: <ComboIllustration />,
};
