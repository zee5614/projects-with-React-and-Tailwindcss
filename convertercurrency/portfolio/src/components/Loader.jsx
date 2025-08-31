import React from "react";
import { CircularProgress, Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Loader() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Small screen check
  const loaderSize = isSmallScreen ? 50 : 80; // Adjust size

  return (
    <div
      className={` ${
        theme.palette.mode === "dark"
          ? "bg-element1 bg-overlay-dark bg-cover bg-center h-full items-center bg-no-repeat w-full"
          : "bg-element1 bg-cover bg-center h-full items-center bg-no-repeat w-full"
      }`}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box sx={{ position: "relative", display: "inline-flex" }}>
          <CircularProgress
            size={loaderSize}
            thickness={4}
            sx={{
              color: "transparent",
              position: "absolute",
              left: 0,
              "& .MuiCircularProgress-circle": {
                stroke: "url(#gradientColors)", // Apply gradient
              },
            }}
          />
          <svg width="0" height="0">
            <defs>
              <linearGradient
                id="gradientColors"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#FFD700" /> {/* Gold */}
                <stop offset="100%" stopColor="#00BCD4" /> {/* Cyan */}
              </linearGradient>
            </defs>
          </svg>
        </Box>
      </Box>
    </div>
  );
}

