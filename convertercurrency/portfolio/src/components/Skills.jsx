import React, { useMemo } from "react";
import {
  Box,
  Typography,
  Chip,
  Avatar,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import CodeIcon from "@mui/icons-material/Code";
import DataObjectIcon from "@mui/icons-material/DataObject";
import StorageIcon from "@mui/icons-material/Storage";
import CloudIcon from "@mui/icons-material/Cloud";
import TerminalIcon from "@mui/icons-material/Terminal";
import SettingsIcon from "@mui/icons-material/Settings";
import BugReportIcon from "@mui/icons-material/BugReport";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ApiIcon from "@mui/icons-material/Api";
import WebIcon from "@mui/icons-material/Web";
import InsightsIcon from "@mui/icons-material/Insights";
import MemoryIcon from "@mui/icons-material/Memory";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import PhoneIcon from "@mui/icons-material/Phone";
import VideocamIcon from "@mui/icons-material/Videocam";

const skills = [
  { name: "React.js", icon: <CodeIcon />, category: "Frontend" },
  { name: "Next.js", icon: <WebIcon />, category: "Frontend" },
  { name: "React Native", icon: <DataObjectIcon />, category: "Mobile" },
  { name: "Node.js", icon: <DataObjectIcon />, category: "Backend" },
  { name: "Express.js", icon: <DataObjectIcon />, category: "Backend" },
  { name: "Tailwind CSS", icon: <SettingsIcon />, category: "Frontend" },
  { name: "Material UI", icon: <SettingsIcon />, category: "Frontend" },
  { name: "RESTful APIs", icon: <ApiIcon />, category: "Backend" },
  { name: "JSON", icon: <CloudQueueIcon />, category: "Backend" },
  { name: "SQL & NoSQL", icon: <StorageIcon />, category: "Database" },
  { name: "Firebase", icon: <CloudIcon />, category: "Database" },
  { name: "AWS", icon: <CloudIcon />, category: "Cloud & DevOps" },
  {
    name: "CI/CD (GitHub Actions)",
    icon: <CloudIcon />,
    category: "Cloud & DevOps",
  },
  {
    name: "Git & GitHub",
    icon: <GroupWorkIcon />,
    category: "Version Control",
  },
  { name: "Unit Testing (Jest)", icon: <BugReportIcon />, category: "Testing" },
  { name: "Machine Learning", icon: <MemoryIcon />, category: "AI/ML" },
  { name: "Flask", icon: <DataObjectIcon />, category: "Backend" },
  {
    name: "Linux & Shell Scripting",
    icon: <TerminalIcon />,
    category: "Systems",
  },
  {
    name: "Project Management",
    icon: <ManageAccountsIcon />,
    category: "Management",
  },
  { name: "Agile & Scrum", icon: <InsightsIcon />, category: "Management" },
  {
    name: "API Integrations",
    icon: <IntegrationInstructionsIcon />,
    category: "Backend",
  },
  { name: "Twilio", icon: <PhoneIcon />, category: "Communication" },
  { name: "Agora", icon: <VideocamIcon />, category: "Communication" },
];

const SkillPill = ({ skill, delay, isAnimated }) => {
  return (
    <motion.div
      initial={{ opacity: isAnimated ? 0 : 1, scale: isAnimated ? 0.8 : 1 }}
      whileInView={isAnimated ? { opacity: 1, scale: 1 } : {}}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay, type: "spring", stiffness: 100 }}
      className="m-2"
    >
      <Chip
        avatar={<Avatar className="bg-blue-500">{skill.icon}</Avatar>}
        label={skill.name}
        className="px-4 py-3 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 font-semibold"
        sx={{
          backgroundColor: "background.paper",
          "&:hover": { transform: "translateY(-2px)" },
        }}
      />
    </motion.div>
  );
};

export default function Skills() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // Optimize skill shuffling by using useMemo and ensuring it's only calculated once
  const randomizedSkills = useMemo(() => {
    return [...skills].sort(() => Math.random() - 0.5);
  }, []);

  // Illustration content
  const illustration = (
    <>
      <div
        className="w-4/5 h-4/5 bg-blue-200 rounded-full opacity-30 
                   absolute md:top-1/2 md:left-1/2 
                   md:-translate-x-1/2 md:-translate-y-1/2 blur-3xl"
      />
      <img
        src="/hero.webp"
        alt="Skills illustration"
        className="w-full h-full object-contain relative z-10 drop-shadow-xl"
      />
    </>
  );

  const gradientClasses =
    theme.palette.mode === "dark"
      ? "bg-gradient-to-r from-gray-50 to-purple-100"
      : "bg-gradient-to-r from-blue-400 to-purple-600";

  return (
    <Box id="skills" className="relative py-20 overflow-hidden z-10 w-full">
      {/* Title */}
      <Typography
        variant="h3"
        className={`font-extrabold bg-gradient-to-r ${gradientClasses} bg-clip-text text-transparent text-center mb-12`}
      >
        Technical Expertise
      </Typography>

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {randomizedSkills.map((skill, index) => (
              <SkillPill
                key={skill.name}
                skill={skill}
                delay={isSmallScreen ? 0 : index * 0.05} // Reduce delay for faster loading
                isAnimated={!isSmallScreen} // Disable animations for small screens
              />
            ))}
          </div>
          {/* Responsive Illustration */}{" "}
          <div className="relative h-96 w-full">{illustration}</div>
        </div>
      </div>
    </Box>
  );
}