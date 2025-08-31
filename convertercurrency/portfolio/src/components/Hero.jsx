import { motion, useAnimation } from "framer-motion";
import {
  Button,
  Container,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Code, Download } from "@mui/icons-material";
import { useEffect } from "react";

const Hero = () => {
  const theme = useTheme();
  const controls = useAnimation();
  const gradientControls = useAnimation();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  
  

  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        y: [-5, 5, -5],
        transition: { duration: 3, repeat: Infinity },
      });
    };
    sequence();

    const gradientSequence = async () => {
      await gradientControls.start({
        background: [
          "linear-gradient(45deg, #FFD700, #00FFFF)",
          "linear-gradient(45deg, #00FFFF, #FFD700)",
          "linear-gradient(45deg, #FFD700, #00FFFF)",
          "linear-gradient(45deg,rgb(139, 138, 127),rgb(60, 33, 180))",
        ],
        transition: { duration: 3, repeat: Infinity },
      });
    };
    gradientSequence();
  }, [controls, gradientControls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80 },
    },
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/nekesa brenda.pdf";
    link.download = "nekesa brenda_Software_Engineer_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box
      component="section"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      <motion.div
        animate={gradientControls}
        className="absolute w-full h-full opacity-10 z-0"
        style={{
          background: "linear-gradient(45deg, #FFD700, #00FFFF)",
        }}
      />

      <Container maxWidth="xl" className="relative z-1">
        <Box className="flex flex-col lg:flex-row items-center gap-6 py-16">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            style={{ flex: 1, textAlign: { xs: "center", lg: "left" } }}
          >
            <motion.div variants={itemVariants}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: "2rem", md: "4rem", lg: "4rem" },
                  fontWeight: 900,
                  lineHeight: 1.2,
                  mb: 3,
                  mt: { xs: 3 },
                  background:
                    theme.palette.mode === "dark"
                      ? "linear-gradient(45deg, #FFD700, #00FFFF)"
                      : "linear-gradient(45deg,rgb(49, 48, 48),rgb(131, 127, 121))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textAlign: { xs: "center", lg: "left" },
                }}
              >
                Brenda Mumelo
                <Code
                  sx={{
                    fontSize: "inherit",
                    ml: 2,
                    verticalAlign: "middle",
                    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
                  }}
                />
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.div animate={controls}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: "2rem" },
                    mb: 4,
                    textAlign: { xs: "center", lg: "left" },
                    background:
                      theme.palette.mode === "darkk"
                        ? "linear-gradient(45deg, #00FFFF, #FFD700)"
                        : "linear-gradient(45deg, #FFC371, #FF5F6D)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "inline-block",
                  }}
                >
                  <p className="text-center">Frontend Developer</p>
                </Typography>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                
                color={theme.palette.text.secondary}
                sx={{ mb: 4, maxWidth: 600, mx: { xs: "auto", lg: 0 } }}
              >
                 
                  An accomplished Software Engineer for frontend developer of robust
                  digital solutions & immersive user experiences with a proven
                  record of delivering innovative, scalable solutions that
                  empower business growth and technological advancement.
                
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button
                variant="contained"
                size="large"
                endIcon={<Download />}
                onClick={downloadCV}
                sx={{
                  background:
                    "linear-gradient(45deg, #FFD700 30%, #00FFFF 90%)",
                  color: theme.palette.mode === "dark" ? "#000" : "#000",
                  px: 6,
                  py: 2,
                  borderRadius: "12px",
                  fontWeight: 700,
                  textTransform: "none",
                  fontSize: "1.1rem",
                  boxShadow: "0 8px 24px rgba(255,215,0,0.3)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 12px 28px rgba(0,255,255,0.4)",
                    background:
                      "linear-gradient(45deg, #FFD700 20%, #00FFFF 80%)",
                  },
                }}
              >
                Download Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={!isSmallScreen ? { scale: 1.05 } : undefined}
            whileTap={!isSmallScreen ? { scale: 0.95 } : undefined}
            className="flex-1 flex justify-center relative"
          >
            <Box className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl">
              <img
                src="/Profile.jpg"
                alt="Brenda Mumelo"
                className="w-full h-full object-cover grayscale-[20%] contrast-110"
              />
              <div className="absolute inset-0 mix-blend-overlay bg-gradient-to-r from-[rgba(255,215,0,0.1)] to-[rgba(0,255,255,0.1)]" />
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;