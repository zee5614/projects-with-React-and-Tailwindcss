import React, { useState, useEffect, useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
  Box,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
} from "@mui/material";
import {
  Code,
  Email,
  LinkedIn,
  GitHub,
  Menu as MenuIcon,
  WhatsApp,
  Home,
  DarkMode,
  LightMode,
} from "@mui/icons-material";
import { ColorModeContext } from "../App.jsx";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();

  useEffect(() => {
    setActiveSection(location.pathname);
  }, [location.pathname]);

  const navLinks = [
    {
      label: "Projects",
      href: "/projects",
      id: "projects",
      icon: <Code fontSize="small" />,
    },
    {
      label: "Skills",
      href: "/skills",
      id: "skills",
      icon: <Home fontSize="small" />,
    },
    {
      label: "Contact",
      href: "/contact",
      id: "contact",
      icon: <Email fontSize="small" />,
    },
  ];

  const socialLinks = [
    {
      label: "LinkedIn",
      icon: <LinkedIn fontSize="small" />,
      onClick: () =>
        window.open(
          "https://linkedin.com/in/brenda-mumelo-41185724a",
          "_blank"
        ),
    },
    {
      label: "GitHub",
      icon: <GitHub fontSize="small" />,
      onClick: () => window.open("https://github.com/zee5614", "_blank"),
    },
    {
      label: "Email",
      icon: <Email fontSize="small" />,
      onClick: () => window.open("brendamumelo5614@gmail.com", "_blank"),
    },
    {
      label: "WhatsApp",
      icon: <WhatsApp fontSize="small" />,
      onClick: () => window.open("https://wa.me/25490902634", "_blank"),
    },
  ];

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: theme.palette.mode === "dark" ? "#1a1a1a" : "#fff",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      }}
    >
      <Toolbar
        sx={{ justifyContent: "space-between", py: 1, px: { xs: 2, md: 6 } }}
      >
        {/* Logo */}
        <Box
          component={Link}
          to="/"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          <Code
            sx={{
              fontSize: 28,
              color: theme.palette.mode === "dark" ? "#FFD700" : "#3f51b5",
            }}
          />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              background: "linear-gradient(45deg, #FFD700 30%, #00FFFF 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            B.Mumelo
          </Typography>
        </Box>

        {/* Navigation & Theme Toggle */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton
            onClick={colorMode.toggleColorMode}
            sx={{ color: theme.palette.mode === "dark" ? "#FFD700" : "#000" }}
          >
            {theme.palette.mode === "dark" ? <LightMode /> : <DarkMode />}
          </IconButton>

          {!isSmallScreen ? (
            <Box sx={{ display: "flex", gap: 4, alignItems: "center" }}>
              {/* Navigation Links */}
              {navLinks.map((link) => (
                <Button
                  key={link.label}
                  component={Link}
                  to={link.href}
                  startIcon={link.icon}
                  onClick={() => scrollToSection(link.id)}
                  sx={{
                    color: activeSection.includes(link.id)
                      ? "#FFD700"
                      : theme.palette.text.primary,
                    fontWeight: 600,
                    textTransform: "none",
                    borderBottom: activeSection.includes(link.id)
                      ? "2px solid #FFD700"
                      : "none",
                    borderRadius: 0,
                    "&:hover": {
                      borderBottom: "2px solid #FFD700",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  {link.label}
                </Button>
              ))}

              {/* Social Links - Compact layout */}
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                {socialLinks.map((social) => (
                  <IconButton
                    key={social.label}
                    onClick={social.onClick}
                    sx={{ color: theme.palette.text.primary, p: 0.5 }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>
            </Box>
          ) : (
            <IconButton onClick={handleMenuOpen} sx={{ color: "#FFD700" }}>
              <MenuIcon />
            </IconButton>
          )}
        </Box>
      </Toolbar>

      {/* Mobile Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        PaperProps={{
          sx: {
            background: theme.palette.background.paper,
            minWidth: 200,
          },
        }}
      >
        {navLinks.map((link) => (
          <MenuItem
            key={link.label}
            component={Link}
            to={link.href}
            onClick={() => {
              handleMenuClose();
              scrollToSection(link.id);
            }}
            sx={{
              color: activeSection.includes(link.id)
                ? "#FFD700"
                : theme.palette.text.primary,
              borderBottom: activeSection.includes(link.id)
                ? "2px solid #FFD700"
                : "none",
            }}
          >
            <ListItemIcon sx={{ color: "inherit" }}>{link.icon}</ListItemIcon>
            {link.label}
          </MenuItem>
        ))}
        <Divider />
        {socialLinks.map((social) => (
          <MenuItem key={social.label} onClick={social.onClick}>
            <ListItemIcon sx={{ color: theme.palette.text.primary }}>
              {social.icon}
            </ListItemIcon>
            {social.label}
          </MenuItem>
        ))}
      </Menu>
    </AppBar>
  );
}