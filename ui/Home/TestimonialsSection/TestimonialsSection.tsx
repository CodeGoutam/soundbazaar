import { Box, Typography, Avatar } from "@mui/material";
import { styles } from "./TestimonialsSection.styles";
import { TESTIMONIALS } from "./dummyTestimonials";
import Image from "next/image";

export function TestimonialsSection() {
  return (
    <Box sx={styles.section}>
      <Box sx={styles.inner}>
        {/* header */}
        <Box sx={styles.head}>
          <Typography sx={styles.label}>What people say</Typography>

          <Typography sx={styles.title}>Trusted at every stage</Typography>

          <Box sx={styles.rule} />
        </Box>

        {/* grid */}
        <Box sx={styles.grid}>
          {TESTIMONIALS.map((t, i) => (
            <Box key={i} sx={styles.card}>
              <Box sx={styles.cardInner}>
                <Box sx={styles.footer}>
                  {t.img ? (
                    <Image
                      src={t.img}
                      alt="avatar"
                      width={36}
                      height={36}
                      style={styles.avatar}
                    />
                  ) : (
                    <Box sx={styles.avatar}></Box>
                  )}
                  <Box sx={styles.userInfo}>
                    <Typography sx={styles.name}>{t.name}</Typography>

                    <Typography sx={styles.role}>{t.role}</Typography>
                  </Box>
                </Box>
                <Typography sx={styles.quote}>"{t.quote}"</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
