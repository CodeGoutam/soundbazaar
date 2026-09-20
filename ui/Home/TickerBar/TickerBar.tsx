import { Box, Typography } from "@mui/material";
import { styles } from "./TickerBar.styles";
import { FEATURES, TICKER_ITEMS } from "./TickerItems";

export function TickerBar() {
  return (
    <Box sx={styles.tk}>
      <Box sx={styles.tkTrack}>
        {TICKER_ITEMS.map((item, i) => (
          <Box key={i} sx={styles.tkItem}>
            <Box sx={styles.tkDot} />
            {item}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export function FeaturesSection() {
  return (
    <Box sx={styles.ft}>
      <Box sx={styles.ftInner}>
        <Box sx={styles.ftHead}>
          <Box>
            <Typography variant="overline">Why choose us</Typography>
            <Typography variant="h3" component="h2">
              Built for events
              <br />
              that matter
            </Typography>
            <Box
              sx={{ width: 60, height: 2, backgroundColor: "#C4893A", mt: 1 }}
            />
          </Box>
          <Typography sx={styles.ftDesc}>
            From intimate birthday gatherings to grand weddings, we connect you
            with the right sound professionals — transparently, securely, and
            reliably.
          </Typography>
        </Box>

        <Box sx={styles.ftGrid}>
          {FEATURES.map((f, i) => (
            <Box key={i} sx={styles.ftCard}>
              <Box sx={styles.ftCardGhost}>{f.num}</Box>
              <Box sx={styles.ftIconBar}>
                <Box sx={styles.ftIcon}>{f.icon}</Box>
                <Box sx={styles.ftBar} />
              </Box>
              <Typography sx={styles.ftCardTitle}>{f.title}</Typography>
              <Typography sx={styles.ftCardDesc}>{f.desc}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
