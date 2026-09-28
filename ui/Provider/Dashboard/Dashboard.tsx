"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter, useParams } from "next/navigation";
import { Route } from "next";
import {
  Box,
  Typography,
  Button,
  Skeleton,
  Paper,
  Divider,
  Chip,
  TextField,
  InputAdornment,
  Drawer,
  IconButton,
  Snackbar,
  Alert,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Add,
  Phone,
  CheckCircle,
  Search,
  Close,
  ContentCopy,
  LocationOn,
  CalendarMonth,
  InfoOutlined,
  Verified,
} from "@mui/icons-material";
import GenericTable from "@/components/GenericTable/GenericTable";
import { StatCard } from "./StatCard/StatCard";
import { MobileCard } from "./BookingsMobileCard/BookingsMobileCard";
import ServiceForm from "@/ui/Provider/ProviderServices/ServicesForm/ServicesForm";
import { ServiceFormData } from "@/types/ProviderServicesTypes";
import {
  Booking,
  FilterKey,
  ProviderStats,
} from "@/types/ProviderDashboardType";
import { formateDate, STATUS_CFG } from "@/lib/utils";
import { styles } from "./Dashboard.styles";
import {
  BUSINESS_HUBS,
  FILTERS,
  getColumns,
  STATS_CONFIG,
} from "./Dashboard.config";
import { DUMMY_BOOKINGS, DUMMY_STATS } from "./dummyData";

export default function ProviderDashboard() {
  const router = useRouter();
  const { locale } = useParams() as { locale: string };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [bookings, setBookings] = useState<Booking[]>([]);
  const [stats, setStats] = useState<ProviderStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isOnline, setIsOnline] = useState(true);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Service Creation Drawer State
  const [serviceDrawerOpen, setServiceDrawerOpen] = useState(false);

  // Pagination State
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // TanStack Query simulation
  useEffect(() => {
    const t = setTimeout(() => {
      setBookings(DUMMY_BOOKINGS);
      setStats(DUMMY_STATS);
      setLoading(false);
    }, 700);
    return () => clearTimeout(t);
  }, []);

  // Reset page when filter or search changes
  useEffect(() => {
    setPage(1);
  }, [activeFilter, searchQuery, rowsPerPage]);

  // Filtered & Searched bookings
  const filtered = useMemo(() => {
    return bookings.filter((b) => {
      const matchesFilter =
        activeFilter === "all" ? true : b.booking_status === activeFilter;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        b.customer_name.toLowerCase().includes(q) ||
        b.event_type.toLowerCase().includes(q) ||
        b.location.toLowerCase().includes(q) ||
        b.id.toLowerCase().includes(q);

      return matchesFilter && matchesSearch;
    });
  }, [bookings, activeFilter, searchQuery]);

  // Paginated bookings
  const totalPages = Math.max(1, Math.ceil(filtered.length / rowsPerPage));
  const paginatedBookings = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    return filtered.slice(start, start + rowsPerPage);
  }, [filtered, page, rowsPerPage]);

  // Interactive Call Confirmation
  const handleConfirmCall = (id: string) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, call_confirmed: true } : b)),
    );
    if (selectedBooking && selectedBooking.id === id) {
      setSelectedBooking((prev) =>
        prev ? { ...prev, call_confirmed: true } : null,
      );
    }
    setToastMessage("Call marked as confirmed with customer!");
  };

  // View Details Drawer
  const handleViewDetails = (b: Booking) => {
    setSelectedBooking(b);
  };

  // Copy helper
  const handleCopy = (text: string) => {
    navigator.clipboard?.writeText(text);
    setToastMessage(`Copied "${text}" to clipboard`);
  };

  // Save Service from Drawer & Redirect to Services page
  const handleSaveService = async (_data: ServiceFormData) => {
    setServiceDrawerOpen(false);
    setToastMessage("Service created successfully!");
    router.push(`/${locale}/services` as Route);
  };

  // Table columns with callbacks wired up
  const columns = getColumns(handleConfirmCall, handleViewDetails);

  return (
    <Box sx={styles.root}>
      <Box sx={styles.content}>
        {/* ── Welcome Header Card ────────────────────────────────────────── */}
        <Box sx={styles.welcomeCard}>
          <Box sx={styles.welcomeProfileGroup}>
            <Box sx={styles.providerAvatar}>RS</Box>
            <Box sx={styles.welcomeTextGroup}>
              <Box sx={styles.welcomeTopPills}>
                <Box sx={styles.verifiedBadge}>
                  <Verified sx={{ fontSize: 13 }} />
                  Verified Provider
                </Box>
                <Box
                  sx={styles.statusToggleBadge(isOnline)}
                  onClick={() => setIsOnline(!isOnline)}
                  title="Click to toggle receiving bookings"
                >
                  <Box sx={styles.statusDot(isOnline)} />
                  {isOnline ? "Online · Accepting Events" : "Paused · Inactive"}
                </Box>
              </Box>

              <Typography sx={styles.welcomeTitle}>
                Rahul Sound Systems
              </Typography>
              <Typography sx={styles.welcomeSub}>
                {loading
                  ? "Loading provider metrics…"
                  : `${stats?.total_bookings} total events · ₹${((stats?.total_earnings ?? 0) / 1000).toFixed(0)}k earned · Gurugram & NCR`}
              </Typography>
            </Box>
          </Box>

          {/* Primary Action Button (Single Clean CTA) */}
          <Box sx={styles.welcomeActions}>
            <Button
              startIcon={<Add sx={{ fontSize: 16 }} />}
              onClick={() => setServiceDrawerOpen(true)}
              sx={styles.addServiceBtn}
            >
              Add Service
            </Button>
          </Box>
        </Box>

        {/* ── Stats KPI Grid ─────────────────────────────────────────────── */}
        <Box id="stats-section" sx={styles.statsGrid}>
          {STATS_CONFIG.map((stat) => (
            <StatCard
              key={stat.key}
              label={stat.label}
              sub={stat.sub}
              accent={stat.accent}
              badge={stat.badge}
              icon={stat.icon}
              loading={loading}
              value={stats ? stat.getValue(stats) : "—"}
            />
          ))}
        </Box>

        {/* ── Business Hub / Quick Shortcuts ─────────────────────────────── */}
        <Box sx={styles.hubSection}>
          <Box sx={styles.hubHeader}>
            <Typography sx={styles.hubTitle}>Business Console</Typography>
            <Typography sx={{ fontSize: "0.76rem", color: "#A8A29E" }}>
              Quick management shortcuts
            </Typography>
          </Box>

          <Box sx={styles.hubGrid}>
            {BUSINESS_HUBS.map((hub) => (
              <Box
                key={hub.id}
                component="div"
                onClick={() => {
                  if (hub.route.startsWith("#")) {
                    document
                      .getElementById(hub.route.slice(1))
                      ?.scrollIntoView({ behavior: "smooth" });
                  } else {
                    router.push(`/${locale}${hub.route}` as Route);
                  }
                }}
                sx={{ ...styles.hubCard, cursor: "pointer" }}
              >
                <Box sx={styles.hubCardIcon}>{hub.icon}</Box>
                <Box>
                  <Typography sx={styles.hubCardTitle}>{hub.title}</Typography>
                  <Typography sx={styles.hubCardDesc}>{hub.desc}</Typography>
                </Box>
                <Typography sx={styles.hubCardCta}>{hub.cta}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* ── Bookings Management Section ─────────────────────────────────── */}
        <Box id="bookings-section" sx={styles.bookingsSection}>
          <Box sx={styles.bookingsSectionHead}>
            <Box sx={styles.bookingsHeadLeft}>
              <Typography sx={styles.bookingsSectionTitle}>
                Event Bookings
              </Typography>
              <Typography sx={styles.bookingsSectionSub}>
                Track live organizer bookings, deposit tokens, and direct calls.
              </Typography>
            </Box>

            {/* Filter Pills (Clean Wrapping) */}
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

          {/* Search toolbar */}
          <Box sx={styles.toolbar}>
            <TextField
              size="small"
              placeholder="Search client, event, or venue..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={styles.searchInput}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search sx={{ fontSize: 17, color: "#A8A29E" }} />
                  </InputAdornment>
                ),
                endAdornment: searchQuery ? (
                  <InputAdornment position="end">
                    <IconButton size="small" onClick={() => setSearchQuery("")}>
                      <Close sx={{ fontSize: 14 }} />
                    </IconButton>
                  </InputAdornment>
                ) : null,
              }}
            />

            <Typography sx={{ fontSize: "0.78rem", color: "#78716C" }}>
              Total: <strong>{filtered.length}</strong>{" "}
              {filtered.length === 1 ? "booking" : "bookings"}
            </Typography>
          </Box>

          {/* ── Table (Desktop) / Mobile Cards ────────────────────────────── */}
          {isMobile ? (
            <Box>
              {loading ? (
                [1, 2, 3].map((i) => (
                  <Paper key={i} elevation={0} sx={styles.mobileSkeletonCard}>
                    <Skeleton width="55%" height={24} />
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
                  <Box sx={styles.emptyIconBox}>
                    <Search sx={{ fontSize: 24 }} />
                  </Box>
                  <Typography sx={styles.emptyTitle}>
                    No bookings found
                  </Typography>
                  <Typography sx={styles.emptySub}>
                    {searchQuery
                      ? `No bookings matching "${searchQuery}". Try a different keyword.`
                      : `No bookings under "${activeFilter.replace("_", " ")}".`}
                  </Typography>
                  {searchQuery && (
                    <Button
                      size="small"
                      onClick={() => setSearchQuery("")}
                      sx={{
                        mt: "0.75rem",
                        textTransform: "none",
                        color: "#C4893A",
                      }}
                    >
                      Clear search
                    </Button>
                  )}
                </Box>
              ) : (
                paginatedBookings.map((b) => (
                  <MobileCard
                    key={b.id}
                    b={b}
                    onConfirmCall={handleConfirmCall}
                    onViewDetails={handleViewDetails}
                  />
                ))
              )}
            </Box>
          ) : (
            <GenericTable
              data={paginatedBookings}
              columns={columns}
              loading={loading}
              mobileRenderer={(b) => (
                <MobileCard
                  b={b}
                  onConfirmCall={handleConfirmCall}
                  onViewDetails={handleViewDetails}
                />
              )}
              emptyMessage={
                searchQuery
                  ? `No bookings matching "${searchQuery}"`
                  : "No bookings found in this view"
              }
              emptySubMessage={
                searchQuery
                  ? "Check spelling or clear the search query."
                  : "New customer inquiries will appear here automatically."
              }
            />
          )}

          {/* ── Pagination Controls ───────────────────────────────────────── */}
          {!loading && filtered.length > 0 && (
            <Box sx={styles.paginationRow}>
              <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <Typography sx={styles.paginationInfo}>
                  Showing {(page - 1) * rowsPerPage + 1}–
                  {Math.min(page * rowsPerPage, filtered.length)} of{" "}
                  {filtered.length} bookings
                </Typography>

                <Box sx={styles.rowsPerPageSelect}>
                  <span>Rows:</span>
                  {[5, 10].map((num) => (
                    <Button
                      key={num}
                      size="small"
                      onClick={() => setRowsPerPage(num)}
                      sx={{
                        minWidth: 26,
                        height: 24,
                        p: 0,
                        fontSize: "0.72rem",
                        fontWeight: rowsPerPage === num ? 700 : 500,
                        color: rowsPerPage === num ? "#C4893A" : "#78716C",
                        bgcolor:
                          rowsPerPage === num
                            ? "rgba(196, 137, 58, 0.12)"
                            : "transparent",
                        borderRadius: "4px",
                      }}
                    >
                      {num}
                    </Button>
                  ))}
                </Box>
              </Box>

              <Box sx={styles.paginationControls}>
                <Button
                  size="small"
                  disabled={page <= 1}
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  sx={styles.paginationNavBtn}
                >
                  ← Prev
                </Button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (pNum) => (
                    <Button
                      key={pNum}
                      size="small"
                      onClick={() => setPage(pNum)}
                      sx={styles.paginationBtn(page === pNum)}
                    >
                      {pNum}
                    </Button>
                  ),
                )}

                <Button
                  size="small"
                  disabled={page >= totalPages}
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  sx={styles.paginationNavBtn}
                >
                  Next →
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </Box>

      {/* ── Slide-in Service Creation Drawer ─────────────────────────────── */}
      <ServiceForm
        open={serviceDrawerOpen}
        onClose={() => setServiceDrawerOpen(false)}
        onSave={handleSaveService}
      />

      {/* ── Booking Details Drawer ────────────────────────────────────────── */}
      <Drawer
        anchor="right"
        open={Boolean(selectedBooking)}
        onClose={() => setSelectedBooking(null)}
        PaperProps={{ sx: styles.drawerPaper }}
      >
        {selectedBooking && (
          <Box>
            {/* Header */}
            <Box sx={styles.drawerHeader}>
              <Box>
                <Typography
                  sx={{
                    fontSize: "0.68rem",
                    color: "#A8A29E",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  Booking Details
                </Typography>
                <Typography sx={styles.drawerTitle}>
                  {selectedBooking.event_type}
                </Typography>
              </Box>
              <IconButton size="small" onClick={() => setSelectedBooking(null)}>
                <Close fontSize="small" />
              </IconButton>
            </Box>

            {/* Body */}
            <Box sx={styles.drawerBody}>
              {/* Status & ID banner */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Chip
                  label={
                    STATUS_CFG[selectedBooking.booking_status]?.label ??
                    selectedBooking.booking_status
                  }
                  size="small"
                  sx={styles.statusChip(
                    STATUS_CFG[selectedBooking.booking_status]?.bg ?? "#eee",
                    STATUS_CFG[selectedBooking.booking_status]?.color ?? "#333",
                  )}
                />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem",
                    cursor: "pointer",
                  }}
                  onClick={() => handleCopy(selectedBooking.id)}
                >
                  <Typography
                    sx={{
                      fontSize: "0.72rem",
                      color: "#A8A29E",
                      fontFamily: "monospace",
                    }}
                  >
                    ID: #{selectedBooking.id}
                  </Typography>
                  <ContentCopy sx={{ fontSize: 13, color: "#A8A29E" }} />
                </Box>
              </Box>

              {/* Customer Contact Card */}
              <Box sx={styles.drawerSectionCard}>
                <Typography sx={styles.drawerSectionTitle}>
                  Customer & Contact
                </Typography>
                <Box sx={styles.drawerCustomerRow}>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "0.92rem",
                        fontWeight: 700,
                        color: "#18181B",
                      }}
                    >
                      {selectedBooking.customer_name}
                    </Typography>
                    <Typography sx={{ fontSize: "0.78rem", color: "#78716C" }}>
                      +91 98765 43210
                    </Typography>
                  </Box>
                  <Button
                    startIcon={<Phone sx={{ fontSize: 14 }} />}
                    sx={styles.drawerCallCustomerBtn}
                    onClick={() => {
                      window.location.assign("tel:+919876543210");
                    }}
                  >
                    Call Client
                  </Button>
                </Box>

                <Box
                  sx={{
                    mt: "0.3rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.35rem",
                  }}
                >
                  {selectedBooking.call_confirmed ? (
                    <Box sx={styles.callDoneBox}>
                      <CheckCircle sx={{ fontSize: 13, color: "#16a34a" }} />
                      <Typography sx={styles.callDoneText}>
                        Call finalized with customer
                      </Typography>
                    </Box>
                  ) : (
                    <Button
                      size="small"
                      startIcon={<Phone sx={{ fontSize: 12 }} />}
                      onClick={() => handleConfirmCall(selectedBooking.id)}
                      sx={styles.confirmCallBtn}
                    >
                      Confirm Event Call
                    </Button>
                  )}
                </Box>
              </Box>

              {/* Event Date & Location */}
              <Box sx={styles.drawerSectionCard}>
                <Typography sx={styles.drawerSectionTitle}>
                  Date & Venue
                </Typography>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
                >
                  <CalendarMonth sx={{ fontSize: 16, color: "#C4893A" }} />
                  <Typography
                    sx={{
                      fontSize: "0.84rem",
                      fontWeight: 600,
                      color: "#18181B",
                    }}
                  >
                    {formateDate(selectedBooking.event_date)} ·{" "}
                    {selectedBooking.event_time}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.5rem",
                    mt: "0.25rem",
                  }}
                >
                  <LocationOn
                    sx={{ fontSize: 16, color: "#A8A29E", mt: "2px" }}
                  />
                  <Box>
                    <Typography sx={{ fontSize: "0.82rem", color: "#44403C" }}>
                      {selectedBooking.location}
                    </Typography>
                    <Typography sx={{ fontSize: "0.72rem", color: "#A8A29E" }}>
                      Delhi-NCR Region · Travel calculated from base
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Financial Breakdown */}
              <Box sx={styles.drawerSectionCard}>
                <Typography sx={styles.drawerSectionTitle}>
                  Financial Breakdown
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    py: "0.2rem",
                  }}
                >
                  <Typography sx={{ fontSize: "0.8rem", color: "#78716C" }}>
                    Total Booking Value
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      color: "#18181B",
                    }}
                  >
                    ₹{selectedBooking.total_amount.toLocaleString("en-IN")}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    py: "0.2rem",
                  }}
                >
                  <Typography sx={{ fontSize: "0.8rem", color: "#16a34a" }}>
                    Token Deposit Paid (Escrow)
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: "#16a34a",
                    }}
                  >
                    ₹
                    {(selectedBooking.total_amount * 0.2).toLocaleString(
                      "en-IN",
                    )}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    py: "0.2rem",
                  }}
                >
                  <Typography sx={{ fontSize: "0.8rem", color: "#78716C" }}>
                    Balance Due on Arrival
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: "#18181B",
                    }}
                  >
                    ₹
                    {(selectedBooking.total_amount * 0.8).toLocaleString(
                      "en-IN",
                    )}
                  </Typography>
                </Box>

                <Divider sx={{ my: "0.4rem" }} />

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    py: "0.2rem",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "0.85rem",
                        fontWeight: 700,
                        color: "#18181B",
                      }}
                    >
                      Your Net Earnings (90%)
                    </Typography>
                    <Typography sx={{ fontSize: "0.68rem", color: "#A8A29E" }}>
                      Platform fee (10%) deducted
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "#16a34a",
                      fontFamily: "Fraunces, serif",
                    }}
                  >
                    ₹
                    {(selectedBooking.total_amount * 0.9).toLocaleString(
                      "en-IN",
                    )}
                  </Typography>
                </Box>
              </Box>

              {/* Escrow Guarantee note */}
              <Box
                sx={{
                  display: "flex",
                  gap: "0.5rem",
                  p: "0.75rem",
                  bgcolor: "rgba(196, 137, 58, 0.08)",
                  borderRadius: "8px",
                }}
              >
                <InfoOutlined
                  sx={{
                    fontSize: 16,
                    color: "#C4893A",
                    flexShrink: 0,
                    mt: "2px",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "0.72rem",
                    color: "#57534E",
                    lineHeight: 1.4,
                  }}
                >
                  SoundBazaar Escrow Guarantee: Token funds are held securely
                  and released directly to your bank account within 24 hours of
                  successful event completion.
                </Typography>
              </Box>
            </Box>
          </Box>
        )}
      </Drawer>

      {/* Feedback Toast */}
      <Snackbar
        open={Boolean(toastMessage)}
        autoHideDuration={3000}
        onClose={() => setToastMessage(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="success" sx={{ width: "100%", borderRadius: "8px" }}>
          {toastMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}
