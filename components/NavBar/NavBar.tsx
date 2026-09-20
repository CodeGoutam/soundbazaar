"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import { Box, Typography, Button } from "@mui/material";
import { useAuthStore } from "@/store/auth.store";
import { styles } from "./NavBar.styles";
import LogoIcon from "../Icons/LogoIcon";

export function Navbar() {
  const params = useParams();
  const locale = params?.locale || "en";
  const { user, logout } = useAuthStore();
  const router = useRouter();
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname?.includes("/auth")) return null;

  const handleSignOut = async () => {
    await logout();
    router.push(`/${locale}`);
  };

  return (
    <Box sx={{ ...styles.nav, ...(scrolled && styles.navScrolled) }}>
      {/* ── Brand Logo ────────────────────────────────────────────────────── */}
      <Link href={`/${locale}`} style={{ textDecoration: "none" }}>
        <Box sx={styles.logo}>
          <Box sx={styles.logoMark}>
            <Box component="svg" viewBox="0 0 16 16" sx={styles.logoSvg}>
              <LogoIcon size={18} />
            </Box>
          </Box>
          <Typography sx={styles.logoText}>
            Sound<span>Bazaar</span>
          </Typography>
        </Box>
      </Link>

      {/* ── Logged-in User Links (Desktop) ─────────────────────────────────── */}
      {user && (
        <Box sx={styles.links}>
          {user.userType === "customer" && (
            <>
              <Link href={`/${locale}`} style={styles.link}>
                Browse
              </Link>
              <Link href={`/${locale}/bookings`} style={styles.link}>
                My Bookings
              </Link>
            </>
          )}

          {user.userType === "provider" && (
            <>
              <Link href={`/${locale}/dashboard`} style={styles.link}>
                Dashboard
              </Link>
              <Link href={`/${locale}/services`} style={styles.link}>
                My Services
              </Link>
            </>
          )}
        </Box>
      )}

      {/* ── Right Actions ─────────────────────────────────────────────────── */}
      <Box sx={styles.right}>
        {!user ? (
          <>
            {/* 1. About Us (Completely hidden on mobile xs) */}
            <Box sx={{ display: { xs: "none", sm: "inline-block" } }}>
              <Link
                href={`/${locale}/about`}
                style={{ textDecoration: "none" }}
              >
                <Button sx={styles.btnAbout}>About Us</Button>
              </Link>
            </Box>

            {/* 2. Business (Outlined brand button) */}
            <Link
              href={`/${locale}/onboard`}
              style={{ textDecoration: "none" }}
            >
              <Button sx={styles.btnBusiness}>Business</Button>
            </Link>

            {/* 3. Register / Login (Primary Brand CTA) */}
            <Link href={`/${locale}/auth`} style={{ textDecoration: "none" }}>
              <Button sx={styles.btnAuth}>
                <Box
                  component="span"
                  sx={{ display: { xs: "none", sm: "inline" } }}
                >
                  Register /&nbsp;
                </Box>
                Login
              </Button>
            </Link>
          </>
        ) : (
          <>
            {/* Logged-in Navbar State */}
            <Box sx={{ display: { xs: "none", sm: "inline-block" } }}>
              <Link
                href={`/${locale}/about`}
                style={{ textDecoration: "none" }}
              >
                <Button sx={styles.btnAbout}>About Us</Button>
              </Link>
            </Box>

            <Box sx={styles.avatar}>
              {user.fullName?.charAt(0)?.toUpperCase() || "U"}
            </Box>

            <Typography sx={styles.name}>{user.fullName}</Typography>

            <Button sx={styles.logout} onClick={handleSignOut}>
              Logout
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
}
