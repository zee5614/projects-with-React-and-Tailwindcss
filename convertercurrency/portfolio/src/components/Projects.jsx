import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Chip,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Code } from "@mui/icons-material";
import { motion } from "framer-motion";




const projects = [
  {
    title: "Super Admin Module",
    desc: "A comprehensive dashboard designed for hospital administrators to onboard facilities, monitor usage trends, and generate detailed performance reports.",
    tech: [
      "React",
      "Node.js",
      "Material UI",
      "Firebase",
      "TailwindCSS",
      "Redux",
      "EmailJS",
      "Twilio",
      "JWT",
    ],
  },
  {
    title: "Hospital Emergency & Admission Module",
    desc: "A responsive module that streamlines emergency response and patient admissions. It supports remote video consultations via Agora and includes automated symptom analysis for prescription guidance.",
    tech: [
      "React",
      "Firebase",
      "Material UI",
      "TailwindCSS",
      "Node.js",
      "JWT",
      "Twilio",
      "Redux",
      "EmailJS",
      "Agora",
      "Figma",
      "ML",
    ],
  },
  {
    title: "Hospital Administration & Diagnostic Suite",
    desc: "An integrated system for managing hospital operations, including staff scheduling, patient records, and diagnostic tools like ECG analysis and predictive medicine models.",
    tech: [
      "React",
      "Firebase",
      "Material UI",
      "TailwindCSS",
      "Node.js",
      "JWT",
      "Figma",
      "Twilio",
      "Redux",
      "EmailJS",
      "Agora",
      "ML",
      "CI/CD",
      "Git",
    ],
  },
  {
    title: "Emergency Response & Blood Bank Management",
    desc: "A streamlined system for coordinating emergency calls and managing blood bank inventory to ensure prompt assistance and resource allocation.",
    tech: [
      "React",
      "Firebase",
      "Material UI",
      "TailwindCSS",
      "Node.js",
      "JWT",
      "Barcode Readers",
      "Twilio",
      "Redux",
      "Agora",
    ],
  },
  {
    title: "Shuleni Software",
    desc: "A full-featured platform that handles scheduling, resource management, and student tracking for tertiary institutions.",
    tech: [
      "React",
      "MySQL",
      "Material UI",
      "TailwindCSS",
      "Node.js",
      "JWT",
      "Figma",
      "Redux",
      "EmailJS",
      "ML",
      "CI/CD",
      "Git",
    ],
  },
  {
    title: "Academy E-Learning Software",
    desc: "A dynamic e-learning solution that supports real-time collaboration, role-based access, and interactive dashboards to enhance remote education and assessment tracking.",
    tech: [
      "React",
      "MySQL",
      "Material UI",
      "TailwindCSS",
      "Node.js",
      "JWT",
      "Figma",
      "Twilio",
      "Redux",
      "EmailJS",
      "CI/CD",
      "Git",
    ],
  },
  {
    title: "Kenvy Software",
    desc: "An integrated platform for managing water plant operations, including inventory control, payment processing, and activity tracking for improved efficiency.",
    tech: [
      "React",
      "MySQL",
      "Material UI",
      "TailwindCSS",
      "Node.js",
      "JWT",
      "Figma",
      "Twilio",
      "Redux",
      "EmailJS",
      "CI/CD",
      "Git",
    ],
  },
  {
    title: "Agroprobe",
    desc: "An IoT-based solution that analyzes soil composition to provide farmers with actionable insights and tailored crop recommendations.",
    tech: [
      "React Native",
      "Firebase",
      "Arduino",
      "Node.js",
      "JWT",
      "Flask",
      "Machine Learning",
    ],
  },
];

const ProjectCard = ({ project, index, disableAnimation }) => {
  const theme = useTheme();

  const cardContent = (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        bgcolor:
          theme.palette.mode === "dark"
            ? theme.palette.grey[900]
            : theme.palette.background.paper,
        boxShadow: 3,
        "&:hover": { boxShadow: 6 },
        borderRadius: 2,
      }}
    >
      {/* Icon Section */}
      <Box
        sx={{
          p: 3,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: 180,
          bgcolor: theme.palette.mode === "dark" ? "grey.800" : "grey.200",
        }}
      >
        <Code
          sx={{
            fontSize: 58,
            color: theme.palette.primary.main,
            opacity: 0.8,
          }}
        />
      </Box>

      {/* Content Section */}
      <CardContent sx={{ flex: 1 }}>
        <Typography
          variant="h6"
          fontWeight="bold"
          color="text.primary"
          gutterBottom
        >
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={2}>
          {project.desc}
        </Typography>

        {/* Tech Tags */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {project.tech.map((tech, i) => (
            <Chip
              key={i}
              label={tech}
              size="small"
              sx={{
                bgcolor:
                  theme.palette.mode === "dark" ? "grey.800" : "grey.200",
                color: theme.palette.text.primary,
              }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <Grid container spacing={5}>
     <Grid sx={{ gridColumn: 'span 12', sm: 'span 6', md: 'span 4' }}>
      {disableAnimation ? (
        cardContent
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: index * 0.1 }}
        >
          {cardContent}
        </motion.div>
      )}
    </Grid>
  </Grid>
  );
};

export default function Projects() {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const theme = useTheme();

  const gradientClasses =
    theme.palette.mode === "dark"
      ? "bg-gradient-to-r from-gray-50 to-purple-100"
      : "bg-gradient-to-r from-blue-400 to-purple-600";

  return (
    <Box id="projects" sx={{ py: 6, px: 3 }}>
      <Typography
        variant="h3"
        className={`font-extrabold bg-gradient-to-r ${gradientClasses} bg-clip-text text-transparent text-center mb-12`}
      >
        Featured Projects
      </Typography>

      <Grid container spacing={5} justifyContent="center" className="md:px-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            index={index}
            disableAnimation={isSmallScreen}
          />
        ))}
      </Grid>
    </Box>
  );
}