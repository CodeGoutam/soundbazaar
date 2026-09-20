import { Box, Typography } from "@mui/material";
import { styles } from "./HowItWorksSection.styles";
import { STEPS } from "./Steps";

export function HowItWorksSection() {
  return (
    <Box sx={styles.section} id="how">
      <Box sx={styles.inner}>
        {/* Header */}
        <Box sx={styles.head}>
          <Typography sx={styles.label}>The process</Typography>

          <Box sx={styles.titleWrap}>
            <Typography component="h2" sx={styles.title}>
              From search to
              <br />
              standing ovation
            </Typography>
          </Box>

          <Box sx={styles.rule} />
        </Box>

        {/* Steps */}
        <Box sx={styles.steps}>
          {STEPS.map((s, i) => (
            <Box key={i} sx={styles.step}>
              <Box sx={styles.circleWrap}>
                <Box sx={styles.circle}>{s.n}</Box>
              </Box>

              <Box sx={styles.stepContent}>
                <Typography sx={styles.stepTitle}>{s.title}</Typography>

                <Typography sx={styles.stepDesc}>{s.desc}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
