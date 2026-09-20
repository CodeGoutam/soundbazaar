"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Skeleton,
  Paper,
  Divider,
  Chip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Add, Phone, CheckCircle } from "@mui/icons-material";
import GenericTable, { Column } from "@/components/GenericTable/GenericTable";
import { StatCard } from "./StatCard/StatCard";
import { MobileCard } from "./BookingsMobileCard/BookingsMobileCard";
import {
  Booking,
  FilterKey,
  ProviderStats,
} from "@/types/ProviderDashboardType";
import { formateDate, STATUS_CFG } from "@/lib/utils";
import { styles } from "./Dashboard.styles";
import {
  columns,
  FILTERS,
  QUICK_ACTIONS,
  STATS_CONFIG,
} from "./Dashboard.config";
import { DUMMY_BOOKINGS, DUMMY_STATS } from "./dummyData";

export default function ProviderDashboard() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [bookings, setBookings] = useState<Booking[]>([]);
  const [stats, setStats] = useState<ProviderStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  // TODO: replace with useQuery from TanStack Query
  useEffect(() => {
    const t = setTimeout(() => {
      setBookings(DUMMY_BOOKINGS);
      setStats(DUMMY_STATS);
      setLoading(false);
    }, 900);
    return () => clearTimeout(t);
  }, []);

  const filtered =
    activeFilter === "all"
      ? bookings
      : bookings.filter((b) => b.booking_status === activeFilter);

  return (
    <Box sx={styles.root}>
      <Box sx={styles.content}>
        {/* ── Welcome row ─────────────────────────────────────────────────── */}
        <Box sx={styles.welcomeRow}>
          <Box sx={styles.welcomeTextGroup}>
            <Typography component="span" sx={styles.welcomeLabel}>
              Good evening
            </Typography>
            <Typography sx={styles.welcomeTitle}>
              Rahul Sound Systems
            </Typography>
            <Typography sx={styles.welcomeSub}>
              {loading
                ? "Loading your stats…"
                : `${stats?.total_bookings} total bookings · ₹${((stats?.total_earnings ?? 0) / 1000).toFixed(0)}k earned`}
            </Typography>
          </Box>

          <Button
            startIcon={!isMobile && <Add sx={{ fontSize: 16 }} />}
            sx={styles.addServiceBtn}
          >
            Add Service
          </Button>
        </Box>

        {/* ── Stats grid ───────────────────────────────────────────────────── */}
        <Box sx={styles.statsGrid}>
          {STATS_CONFIG.map((stat) => (
            <StatCard
              key={stat.key}
              label={stat.label}
              sub={stat.sub}
              accent={stat.accent}
              icon={stat.icon}
              loading={loading}
              value={stats ? stat.getValue(stats) : "—"}
            />
          ))}
        </Box>

        {/* ── Quick actions ────────────────────────────────────────────────── */}
        <Box sx={styles.quickActionsRow}>
          {QUICK_ACTIONS.map((action) => (
            <Button key={action} sx={styles.quickActionBtn}>
              {action}
            </Button>
          ))}
        </Box>

        {/* ── Bookings header + filters ────────────────────────────────────── */}
        <Box sx={styles.bookingsSectionHead}>
          <Typography sx={styles.bookingsSectionTitle}>Bookings</Typography>

          <Box sx={styles.filterStrip}>
            {FILTERS.map((f) => {
              const isActive = activeFilter === f.key;
              const count =
                f.key === "all"
                  ? bookings.length
                  : bookings.filter((b) => b.booking_status === f.key).length;

              return (
                <Button
                  key={f.key}
                  onClick={() => setActiveFilter(f.key)}
                  sx={styles.filterChip(isActive)}
                >
                  {f.label}
                  {count > 0 && (
                    <Box component="span" sx={styles.filterCount(isActive)}>
                      {count}
                    </Box>
                  )}
                </Button>
              );
            })}
          </Box>
        </Box>

        {/* ── Table / Mobile cards ─────────────────────────────────────────── */}
        {isMobile ? (
          <Box>
            {loading ? (
              [1, 2, 3].map((i) => (
                <Paper key={i} elevation={0} sx={styles.mobileSkeletonCard}>
                  <Skeleton width="55%" height={22} />
                  <Skeleton width="38%" height={16} sx={{ mt: "4px" }} />
                  <Divider sx={styles.mobileSkeletonDivider} />
                  <Box sx={styles.mobileSkeletonFooter}>
                    <Skeleton width={80} height={28} />
                    <Skeleton variant="rounded" width={100} height={30} />
                  </Box>
                </Paper>
              ))
            ) : filtered.length === 0 ? (
              <Box sx={styles.emptyState}>
                <Typography sx={styles.emptyTitle}>No bookings here</Typography>
                <Typography sx={styles.emptySub}>
                  {activeFilter === "all"
                    ? "Complete your profile to get discovered."
                    : `No ${activeFilter.replace("_", " ")} bookings found.`}
                </Typography>
              </Box>
            ) : (
              filtered.map((b) => <MobileCard key={b.id} b={b} />)
            )}
          </Box>
        ) : (
          <GenericTable
            data={filtered}
            columns={columns}
            loading={loading}
            mobileRenderer={(b) => <MobileCard b={b} />}
            emptyMessage="No bookings here"
            emptySubMessage={
              activeFilter === "all"
                ? "Complete your profile to get discovered."
                : `No ${activeFilter.replace("_", " ")} bookings found.`
            }
          />
        )}
      </Box>
    </Box>
  );
}
