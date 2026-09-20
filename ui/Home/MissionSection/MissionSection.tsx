import { Box, Typography } from "@mui/material";

const values = [
  {
    title: "Clarity before booking",
    description:
      "Compare trusted sound services, pricing, and provider details in one place.",
  },
  {
    title: "Confidence on event day",
    description:
      "Book the right audio professional for your occasion without the usual guesswork.",
  },
  {
    title: "Growth for professionals",
    description:
      "Help DJs, sound engineers, and rental teams reach customers who need their expertise.",
  },
];

export function MissionSection() {
  return (
    <Box component="section" sx={styles.section}>
      <Box sx={styles.inner}>
        <Box sx={styles.intro}>
          <Typography sx={styles.label}>Our mission</Typography>
          <Typography component="h2" sx={styles.title}>
            Better events start with better sound.
          </Typography>
          <Typography sx={styles.description}>
            We created SoundBazaar to make professional audio services easier
            to discover and easier to book, for every celebration and every
            event team.
          </Typography>
        </Box>

        <Box sx={styles.values}>
          {values.map((value, index) => (
            <Box key={value.title} sx={styles.value}>
              <Typography sx={styles.number}>0{index + 1}</Typography>
              <Typography component="h3" sx={styles.valueTitle}>
                {value.title}
              </Typography>
              <Typography sx={styles.valueDescription}>
                {value.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

const styles = {
  section: {
    bgcolor: "#F7F5F2",
    py: { xs: "4.5rem", md: "7rem" },
    px: { xs: "1.25rem", md: "3rem" },
  },
  inner: {
    maxWidth: "1180px",
    mx: "auto",
  },
  intro: {
    maxWidth: "690px",
  },
  label: {
    color: "#C4893A",
    fontSize: "0.72rem",
    fontWeight: 600,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    mb: "0.85rem",
  },
  title: {
    color: "#18181B",
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: { xs: "2.25rem", md: "3.25rem" },
    fontWeight: 600,
    lineHeight: 1.08,
    mb: "1.25rem",
  },
  description: {
    color: "#625D57",
    fontSize: { xs: "1rem", md: "1.1rem" },
    lineHeight: 1.75,
  },
  values: {
    display: "grid",
    gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
    gap: { xs: "1rem", md: "1.5rem" },
    mt: { xs: "2.5rem", md: "4rem" },
  },
  value: {
    borderTop: "2px solid #C4893A",
    pt: "1.25rem",
  },
  number: {
    color: "#C4893A",
    fontSize: "0.75rem",
    fontWeight: 600,
    letterSpacing: "0.12em",
    mb: "1.25rem",
  },
  valueTitle: {
    color: "#18181B",
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "1.35rem",
    fontWeight: 600,
    mb: "0.65rem",
  },
  valueDescription: {
    color: "#625D57",
    fontSize: "0.92rem",
    lineHeight: 1.65,
  },
};
