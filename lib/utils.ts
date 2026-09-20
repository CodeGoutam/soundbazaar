export const STATUS_CFG: Record<
  string,
  { label: string; bg: string; color: string }
> = {
  confirmed: { label: "Confirmed", bg: "#EFF6FF", color: "#1D4ED8" },
  token_paid: { label: "Token Paid", bg: "#FEF9EC", color: "#92400E" },
  in_progress: { label: "In Progress", bg: "#ECFDF5", color: "#065F46" },
  completed: { label: "Completed", bg: "#F0FDF4", color: "#15803D" },
  cancelled: { label: "Cancelled", bg: "#FEF2F2", color: "#B91C1C" },
};

export const formateDate = (d: string) =>
  new Date(d).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

export function formatDateWithTime(iso: string) {
  return new Date(iso).toLocaleString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

// ─── Pricing preview helper ───────────────────────────────────────────────────
export function calcPrice(
  base: number,
  minH: number,
  extraRate: number,
  hours: number,
): number {
  if (hours <= minH) return base;
  return base + (hours - minH) * extraRate;
}

// ─── Min booking date (today + advance_notice_days) ────────────────────────────
export function getMinDate(advanceDays: number): string {
  const d = new Date();
  d.setDate(d.getDate() + advanceDays);
  return d.toISOString().split("T")[0];
}
