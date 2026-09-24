import Link from "next/link";
import { Box, Typography, Button } from "@mui/material";
import { styles } from "./ProviderSection.styles";
import TrendIcon from "@/components/Icons/TrendIcon";
import MoneyIcon from "@/components/Icons/MoneyIcon";
import ChartIcon from "@/components/Icons/BarCharIcon";
import type { Route } from "next";

const PERKS = [
  {
    icon: <TrendIcon />,
    title: "More bookings, less hustle",
    sub: "Customers come to you — no cold calls, no marketing spend.",
  },
  {
    icon: <MoneyIcon />,
    title: "Guaranteed payment",
    sub: "Token system protects you. Get paid without chasing anyone.",
  },
  {
    icon: <ChartIcon />,
    title: "Your own dashboard",
    sub: "Track earnings, upcoming events, and ratings in one place.",
  },
];

// ================= PROVIDER SECTION =================

export function ProviderSection({ locale }: { locale: string }) {
  return (
    <Box sx={styles.pvSection} id="providers">
      <Box sx={styles.pvInner}>
        {/* LEFT */}
        <Box sx={styles.pvLeft}>
          <Typography sx={styles.label}>For sound professionals</Typography>

          <Typography sx={styles.titleLight}>
            Turn your skills
            <br />
            into steady income
          </Typography>

          <Box sx={styles.rule} />

          <Typography sx={styles.pvDesc}>
            Join hundreds of DJs and sound engineers already growing their
            business through our platform. More bookings, zero cold calls.
          </Typography>

          <Box>
            <Link href={`/${locale}/onboard`}>
              <Button sx={styles.amberBtn}>Become a Partner</Button>
            </Link>
          </Box>
        </Box>

        {/* RIGHT */}
        <Box sx={styles.perks}>
          {PERKS.map((p, i) => (
            <Box key={i} sx={styles.perk}>
              <Box sx={styles.perkIcon}>{p.icon}</Box>

              <Box sx={styles.perkText}>
                <Typography sx={styles.perkTitle}>{p.title}</Typography>

                <Typography sx={styles.perkSub}>{p.sub}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

// ================= FINAL CTA =================

export function FinalCtaSection({ locale }: { locale: string }) {
  return (
    <Box sx={styles.fcSection}>
      <Box sx={styles.fcInner}>
        <Typography sx={styles.label}>Get started today</Typography>

        <Typography sx={styles.title}>
          Your next event
          <br />
          starts here
        </Typography>

        <Box sx={styles.ruleCenter} />

        <Typography sx={styles.fcDesc}>
          Find the perfect sound setup in minutes. No hassle, no guessing, no
          overpaying.
        </Typography>

        <Box sx={styles.fcBtns}>
          <Link href={`/${locale}` as Route}>
            <Button sx={styles.darkBtn}>Book a Provider</Button>
          </Link>

          <Link href={`/${locale}/onboard` as Route}>
            <Button sx={styles.outlineBtn}>List Your Service</Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

// ================= FOOTER =================

export function Footer() {
  return (
    <Box component="footer" sx={styles.footer}>
      <Typography sx={styles.logo}>
        Sound<span>Bazaar</span>
      </Typography>

      <Typography sx={styles.copy}>
        © {new Date().getFullYear()} SoundBazaar. All rights reserved.
      </Typography>
    </Box>
  );
}
