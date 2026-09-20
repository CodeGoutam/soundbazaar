"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Stack,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { heroStyles } from "./Hero.styles";
import { useAuthStore } from "@/store/auth.store";
import Image from "next/image";
import { useParams } from "next/navigation";

export function HeroSection() {
  const theme = useTheme();
  const { locale } = useParams() as { locale: string };

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const { user } = useAuthStore();
  const [count, setCount] = useState({
    providers: 100,
    events: 1000,
    cities: 10,
  });

  useEffect(() => {
    const targets = { providers: 300, events: 2400, cities: 18 };
    if (isMobile) {
      setCount(targets);
      return;
    }

    const steps = 60;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const ease = 1 - Math.pow(1 - step / steps, 3);
      setCount({
        providers: Math.round(targets.providers * ease),
        events: Math.round(targets.events * ease),
        cities: Math.round(targets.cities * ease),
      });
      if (step >= steps) clearInterval(timer);
    }, 1800 / steps);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box sx={heroStyles.hr}>
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "calc(100vh - 64px)",
        }}
      >
        {/* <Image
          src="/assets/hero-bg.jpeg"
          alt="Hero Background"
          fill
          priority
          style={{ objectFit: "cover", opacity: 0.19 }}
          sizes="100vw"
        /> */}
      </Box>
      <Box sx={heroStyles.hrAmbient} />
      <Box sx={heroStyles.hrGrid} />
      <Box sx={heroStyles.hrContent}>
        <Stack direction="row" alignItems="center" sx={heroStyles.hrBadge}>
          About SoundBazaar
        </Stack>

        <Typography component="h1" sx={heroStyles.hrTitle}>
          Making great sound simple
          <br />
          for every event
        </Typography>

        {/* <Typography sx={heroStyles.hrSub}>
          Book trusted DJs, sound systems & live audio professionals for
          weddings, parties and corporate events — all in one place.
        </Typography> */}
        <Typography sx={heroStyles.hrSub}>
          SoundBazaar brings event hosts and trusted sound professionals
          together, so finding the right setup is clear, secure, and simple.
        </Typography>

        {!user && (
          <Box sx={heroStyles.hrActions}>
            <Button
              component={Link}
              href={`/${locale}`}
              variant="contained"
            >
              Browse Services
            </Button>
            <Button
              component={Link}
              href={`/${locale}/onboard`}
              variant="outlined"
            >
              Become a Partner
            </Button>
          </Box>
        )}

        <Stack sx={heroStyles.hrStats} direction={{ xs: "column", sm: "row" }}>
          <Box sx={heroStyles.hrStat}>
            <Typography sx={heroStyles.hrStatNum}>
              {count.providers}
              <Box component="span" sx={{ color: "var(--amber, #C4893A)" }}>
                +
              </Box>
            </Typography>
            <Typography sx={heroStyles.hrStatLabel}>
              Verified Providers
            </Typography>
          </Box>
          <Box sx={heroStyles.hrStat}>
            <Typography sx={heroStyles.hrStatNum}>
              {count.events.toLocaleString()}
              <Box component="span" sx={{ color: "var(--amber, #C4893A)" }}>
                +
              </Box>
            </Typography>
            <Typography sx={heroStyles.hrStatLabel}>Events Served</Typography>
          </Box>
          <Box sx={heroStyles.hrStat}>
            <Typography sx={heroStyles.hrStatNum}>{count.cities}</Typography>
            <Typography sx={heroStyles.hrStatLabel}>Cities</Typography>
          </Box>
        </Stack>
      </Box>
      <Box sx={heroStyles.hrScroll}>
        <Box sx={heroStyles.hrScrollLine} />
      </Box>
    </Box>
  );
}
