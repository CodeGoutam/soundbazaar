// ─── Timeline steps ────────────────────────────────────────────────────────────
export const TIMELINE_STEPS = [
  {
    icon: "✓",
    title: "Booking confirmed",
    sub: "Your token has been received and the slot is held for you.",
    tag: "Done",
    done: true,
    active: false,
  },
  {
    icon: "📞",
    title: "Provider will call you",
    sub: "Expect a call from the provider within 24 hours to confirm event details.",
    tag: "Next step",
    done: false,
    active: true,
  },
  {
    icon: "📋",
    title: "Confirm all details on call",
    sub: "Discuss setup time, venue access, equipment specifics, and any special requirements.",
    tag: null,
    done: false,
    active: false,
  },
  {
    icon: "🎵",
    title: "Event day",
    sub: "Provider arrives and sets up as agreed. Enjoy your event.",
    tag: null,
    done: false,
    active: false,
  },
  {
    icon: "💰",
    title: "Pay remaining amount",
    sub: `Pay the balance directly to the provider after the event. Leave a review to help others.`,
    tag: null,
    done: false,
    active: false,
  },
];
