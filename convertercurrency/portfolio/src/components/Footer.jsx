import React from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Email, LinkedIn, GitHub, WhatsApp } from "@mui/icons-material";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  // Determine icon color based on theme mode
  const iconColor = theme.palette.mode === "dark" ? "#fff" : "#000";

  return (
    <>
      <Box
        component="footer"
        sx={{
          backgroundColor:
            theme.palette.mode === "dark"
              ? theme.palette.grey[900]
              : theme.palette.grey[400],
          py: 1,
          pt: 1,
        }}
      >
        <Container maxWidth="lg">
          {isLargeScreen ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 2,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <IconButton
                  onClick={() =>
                    window.open("mailto:brendamumelo5614@gmail.com", "_blank")
                  }
                  sx={{ color: iconColor }}
                >
                  <Email />
                </IconButton>
                <IconButton
                  onClick={() =>
                    window.open("https://wa.me/254790902634", "_blank")
                  }
                  sx={{ color: iconColor }}
                >
                  <WhatsApp />
                </IconButton>
                <IconButton
                  onClick={() =>
                    window.open(
                      "https://linkedin.com/in/brenda-mumelo-41185724a",
                      "_blank"
                    )
                  }
                  sx={{ color: iconColor }}
                >
                  <LinkedIn />
                </IconButton>
                <IconButton
                  onClick={() =>
                    window.open("https://github.com/zee5614", "_blank")
                  }
                  sx={{ color: iconColor }}
                >
                  <GitHub />
                </IconButton>
              </Box>
              <Typography variant="body2" color="textSecondary">
                © {currentYear} Brenda Mumelo. All rights reserved.
              </Typography>
            </Box>
          ) : (
            <Box sx={{ textAlign: "center", mb: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 2,
                  mb: 1,
                }}
              >
                <IconButton
                  onClick={() =>
                    window.open("mailto:brendamumelo5614@gmail.com", "_blank")
                  }
                  sx={{ color: iconColor }}
                >
                  <Email />
                </IconButton>
                <IconButton
                  onClick={() =>
                    window.open("https://wa.me/254790902634", "_blank")
                  }
                  sx={{ color: iconColor }}
                >
                  <WhatsApp />
                </IconButton>
                <IconButton
                  onClick={() =>
                    window.open(
                      "https://linkedin.com/in/brenda-mumelo-41185724a",
                      "_blank"
                    )
                  }
                  sx={{ color: iconColor }}
                >
                  <LinkedIn />
                </IconButton>
                <IconButton
                  onClick={() =>
                    window.open("https://github.com/zee5614", "_blank")
                  }
                  sx={{ color: iconColor }}
                >
                  <GitHub />
                </IconButton>
              </Box>
              <Typography variant="body2" color="textSecondary">
                © {currentYear} Brenda Mumelo. All rights reserved.
              </Typography>
            </Box>
          )}
        </Container>
      </Box>

      {/* Animated WhatsApp Icon for quick contact */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          className="bg-green-800  hover:bg-green-500 text-white p-3 rounded-full shadow-lg animate-bounce"
          onClick={() => window.open("https://wa.me/254790902634", "_blank")}
        >
          <WhatsApp className="w-6 h-6" />
        </button>
      </div>
    </>
  );
}