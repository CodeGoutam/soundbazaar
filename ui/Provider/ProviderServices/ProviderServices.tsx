"use client";

import { useState, useCallback } from "react";
import { Box, Typography, Button, Skeleton } from "@mui/material";
import { Add, MusicNote } from "@mui/icons-material";

import { pageStyles as s } from "./ProviderServices.styles";
import { Service, ServiceFormData } from "@/types/ProviderServicesTypes";
import ServiceCard from "./ProviderServicesCard/ProviderServicesCard";
import ServiceForm from "./ServicesForm/ServicesForm";
import { DeleteDialog } from "@/components/DeleteDialog/DeleteDialog";

// ─── Dummy data ────────────────────────────────────────────────────────────────
const DUMMY_SERVICES: Service[] = [
  {
    id: "svc1",
    provider_id: "prov1",
    service_name: "Wedding DJ Package",
    description:
      "Full DJ setup with 2× JBL SRX835P 2000W speakers, Pioneer CDJ-2000 NXS2 decks, 32-channel Behringer mixer, 4× LED moving heads, fog machine. Suitable for dance floors up to 300 guests.",
    event_types: ["Wedding", "Sangeet / Mehendi", "Anniversary"],
    max_capacity: "300",
    base_price: 15000,
    min_hours: 6,
    extra_hour_rate: 2000,
    max_hours: 12,
    distance_slabs: [
      { id: "d1", from_km: 0, to_km: 10, charge: 0, not_available: false },
      { id: "d2", from_km: 11, to_km: 25, charge: 500, not_available: false },
      { id: "d3", from_km: 26, to_km: 50, charge: 1200, not_available: false },
      { id: "d4", from_km: 51, to_km: null, charge: 0, not_available: true },
    ],
    advance_notice_days: 3,
    available_days: ["Thu", "Fri", "Sat", "Sun"],
    special_notes:
      "Requires 1.5 hrs setup time. Generator not included for outdoor events.",
    image_url: null,
    is_active: true,
    created_at: "2026-01-15T10:00:00Z",
  },
  {
    id: "svc2",
    provider_id: "prov1",
    service_name: "Corporate PA System",
    description:
      "Clean PA system for corporate events. 2× QSC K12.2 2000W active speakers, Yamaha MG12XU mixer, 2× wireless lapel + handheld mics, laptop input. Crystal clear for conferences and product launches.",
    event_types: ["Corporate Event"],
    max_capacity: "200",
    base_price: 8000,
    min_hours: 4,
    extra_hour_rate: 1500,
    max_hours: 10,
    distance_slabs: [
      { id: "d1", from_km: 0, to_km: 15, charge: 0, not_available: false },
      { id: "d2", from_km: 16, to_km: 40, charge: 800, not_available: false },
      { id: "d3", from_km: 41, to_km: null, charge: 0, not_available: true },
    ],
    advance_notice_days: 2,
    available_days: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    special_notes: "Weekday only. Formal events only.",
    image_url: null,
    is_active: true,
    created_at: "2026-02-01T10:00:00Z",
  },
];

// ─── Main page ────────────────────────────────────────────────────────────────
export default function ProviderServices() {
  const [services, setServices] = useState<Service[]>(DUMMY_SERVICES);
  const [loading] = useState(false); // TODO: replace with useQuery
  const [formOpen, setFormOpen] = useState(false);
  const [editService, setEditService] = useState<Service | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Service | null>(null);

  // ── Handlers ──────────────────────────────────────────────────────────────────
  const handleAdd = () => {
    setEditService(null);
    setFormOpen(true);
  };

  const handleEdit = (service: Service) => {
    setEditService(service);
    setFormOpen(true);
  };

  const handleFormClose = () => {
    setFormOpen(false);
    setEditService(null);
  };

  const handleSave = useCallback(
    async (data: ServiceFormData) => {
      // TODO: call API → POST /provider/services  or  PATCH /provider/services/:id
      // const saved = await serviceApi.save({ ...data, id: editService?.id });

      if (editService) {
        setServices((prev) =>
          prev.map((s) =>
            s.id === editService.id
              ? {
                  ...s,
                  ...data,
                  distance_slabs: data.distance_slabs,
                  image_url: data.image_url,
                }
              : s,
          ),
        );
      } else {
        const newService: Service = {
          id: Math.random().toString(36).substring(2, 8), // replace with real ID from backend
          provider_id: "prov1",
          service_name: data.service_name,
          description: data.description,
          event_types: data.event_types,
          max_capacity: data.max_capacity,
          base_price: data.base_price,
          min_hours: data.min_hours,
          extra_hour_rate: data.extra_hour_rate,
          max_hours: data.max_hours,
          distance_slabs: data.distance_slabs,
          advance_notice_days: data.advance_notice_days,
          available_days: data.available_days,
          special_notes: data.special_notes ?? "",
          image_url: data.image_url,
          is_active: true,
          created_at: new Date().toISOString(),
        };
        setServices((prev) => [newService, ...prev]);
      }
    },
    [editService],
  );

  const handleDeleteConfirm = () => {
    if (!deleteTarget) return;
    // TODO: call API → DELETE /provider/services/:id
    setServices((prev) => prev.filter((s) => s.id !== deleteTarget.id));
    setDeleteTarget(null);
  };

  const handleToggleActive = (id: string, active: boolean) => {
    // TODO: call API → PATCH /provider/services/:id  { is_active: active }
    setServices((prev) =>
      prev.map((s) => (s.id === id ? { ...s, is_active: active } : s)),
    );
  };

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <Box sx={s.root}>
      <Box sx={s.content}>
        {/* ── Page header ─────────────────────────────────────────────────── */}
        <Box sx={s.pageHeader}>
          <Box sx={s.pageHeaderLeft}>
            <Typography component="span" sx={s.pageLabel}>
              Provider
            </Typography>
            <Typography sx={s.pageTitle}>My Services</Typography>
            <Typography sx={s.pageSub}>
              {loading
                ? "Loading…"
                : services.length === 0
                  ? "No services yet — add your first one"
                  : `${services.length} service${services.length === 1 ? "" : "s"} · ${services.filter((s) => s.is_active).length} active`}
            </Typography>
          </Box>

          <Button
            onClick={handleAdd}
            startIcon={<Add sx={{ fontSize: 16 }} />}
            sx={s.addBtn}
          >
            Add Service
          </Button>
        </Box>

        {/* ── Loading skeletons ────────────────────────────────────────────── */}
        {loading && (
          <Box sx={s.cardsGrid}>
            {[1, 2, 3].map((i) => (
              <Box
                key={i}
                sx={{
                  bgcolor: "#FDFCFB",
                  border: "1px solid #E8E4DE",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <Skeleton variant="rectangular" height={160} />
                <Box
                  sx={{
                    p: "1rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <Skeleton width="65%" height={22} />
                  <Skeleton width="90%" height={16} />
                  <Skeleton width="75%" height={16} />
                  <Skeleton width="45%" height={30} sx={{ mt: "0.25rem" }} />
                </Box>
              </Box>
            ))}
          </Box>
        )}

        {/* ── Empty state ───────────────────────────────────────────────────── */}
        {!loading && services.length === 0 && (
          <Box sx={s.emptyState}>
            <Box sx={s.emptyIconWrap}>
              <MusicNote sx={{ fontSize: 28, color: "#C4893A" }} />
            </Box>
            <Typography sx={s.emptyTitle}>No services yet</Typography>
            <Typography sx={s.emptySub}>
              Add your first service to start receiving bookings. Include
              equipment details, pricing, and travel charges.
            </Typography>
            <Button
              onClick={handleAdd}
              startIcon={<Add sx={{ fontSize: 16 }} />}
              sx={s.addBtn}
            >
              Add your first service
            </Button>
          </Box>
        )}

        {/* ── Services grid ─────────────────────────────────────────────────── */}
        {!loading && services.length > 0 && (
          <Box sx={s.cardsGrid}>
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onEdit={handleEdit}
                onDelete={(id: any) =>
                  setDeleteTarget(services.find((s) => s.id === id) ?? null)
                }
                onToggleActive={handleToggleActive}
              />
            ))}
          </Box>
        )}
      </Box>

      {/* ── Form drawer ───────────────────────────────────────────────────────── */}
      <ServiceForm
        open={formOpen}
        onClose={handleFormClose}
        onSave={handleSave}
        editService={editService}
      />

      {/* ── Delete confirmation ───────────────────────────────────────────────── */}
      <DeleteDialog
        open={!!deleteTarget}
        title="Delete service?"
        subTitle={`"${deleteTarget?.service_name}" will be permanently deleted. Existing bookings will not be affected.`}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteTarget(null)}
      />
    </Box>
  );
}
