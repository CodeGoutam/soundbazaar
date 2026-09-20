import LockIcon from "@/components/Icons/LockIcon";
import PhoneIcon from "@/components/Icons/PhoneIcon";
import SearchIcon from "@/components/Icons/SearchIcon";
import StarIcon from "@/components/Icons/StarIcon";

export const TICKER_ITEMS = Array(2)
  .fill([
    "Professional DJs",
    "Sound Systems",
    "Event Audio",
    "Live PA Setup",
    "Corporate Events",
    "Weddings",
    "Birthday Parties",
    "Concerts",
    "Stage Setup",
    "Outdoor Events",
  ])
  .flat();

export const FEATURES = [
  {
    icon: <SearchIcon />,
    num: "01",
    title: "Smart Discovery",
    desc: "Filter by city, event type, budget and equipment. Find exactly who you need — in minutes, not hours.",
  },
  {
    icon: <LockIcon />,
    num: "02",
    title: "Secure Token Booking",
    desc: "Pay a small token to hold your provider. Funds are protected in escrow until your event is complete.",
  },
  {
    icon: <StarIcon />,
    num: "03",
    title: "Verified Reviews",
    desc: "Every rating comes from a real, completed event. Honest feedback you can genuinely rely on.",
  },
  {
    icon: <PhoneIcon />,
    num: "04",
    title: "Direct Confirmation",
    desc: "Speak with your provider before the event. Full clarity before the first note plays.",
  },
];
