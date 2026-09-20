import React from "react";
import {
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  styled,
  stepConnectorClasses,
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  StepIconProps,
} from "@mui/material";
import { CheckIcon } from "../Icons/CheckIcon";

// 1. Custom Connector - Controlled by your theme colors
const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: { top: 12 },
  [`&.${stepConnectorClasses.active}`]: {},
  [`&.${stepConnectorClasses.completed}`]: {},
  [`& .${stepConnectorClasses.line}`]: {
    height: 2,
    border: 0,
    backgroundColor: "#E8E4DE",
    borderRadius: 1,
    transition: "background-color 0.3s",
  },
  [`& .${stepConnectorClasses.lineVertical}`]: {
    width: 2,
    minHeight: 30,
  },
}));

// 2. Custom Step Icon
const ColorlibStepIconRoot = styled("div")<{
  ownerState: { active?: boolean; completed?: boolean };
}>(({ ownerState }) => ({
  backgroundColor: "#E8E4DE",
  zIndex: 1,
  color: "#B0AAA3",
  width: 24,
  height: 24,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  transition: "all 0.3s ease",
  ...(ownerState.active && {
    backgroundColor: "#C4893A",
    color: "#fff",
  }),
}));

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, icon } = props;
  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }}>
      {completed ? (
        <CheckIcon />
      ) : (
        <Typography
          sx={{ fontSize: "0.65rem", fontWeight: 600, color: "inherit" }}
        >
          {icon}
        </Typography>
      )}
    </ColorlibStepIconRoot>
  );
}

// 3. Main Component
interface GenericStepperProps {
  activeStep: number; // 0-indexed: 0 = first step, 1 = second step
  steps: string[];
  orientation?: "horizontal" | "vertical";
}

export function StepBar({
  activeStep,
  steps,
  orientation = "horizontal",
}: GenericStepperProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const effectiveOrientation = isMobile ? "vertical" : orientation;

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: effectiveOrientation === "horizontal" ? 400 : "100%",
        mx: "auto",
        mb: 4,
      }}
    >
      <Stepper
        activeStep={activeStep}
        orientation={effectiveOrientation}
        connector={<ColorlibConnector />}
      >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel
              StepIconComponent={ColorlibStepIcon}
              sx={{
                "& .MuiStepLabel-label": {
                  fontSize: "0.85rem",
                  transition: "color 0.3s",
                },
                "& .MuiStepLabel-label.Mui-active": {
                  color: "#18181B",
                  fontWeight: 600,
                },
                "& .MuiStepLabel-label.Mui-completed": {
                  fontWeight: 500,
                },
                "& .MuiStepLabel-label.Mui-disabled": {
                  color: "#B0AAA3",
                  fontWeight: 400,
                },
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
