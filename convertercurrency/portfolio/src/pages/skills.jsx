import React from "react";
import Skills from "../components/Skills";
import { useTheme } from "@mui/material/styles";
import { HelmetProvider } from "react-helmet-async";

function SkillsPage() {
  const theme = useTheme();
  return (
    <>
      <HelmetProvider>
        <title>
          Skills | Brenda Mumelo Portfolio - Software Developer (Frontend)
        </title>
        <meta
          name="keywords"
          content="computer science, software engineering, software developer, software development, machine learning, brenda, brenda mumelo, mumelo, zee5614"
        />
        <meta
          name="description"
          content="Looking for a software engineer, computer scientist or machine learning expert?Welcome to Brenda mumelo's portfolio. Discover projects and insights on software development, engineering, and machine learning."
        />
      </HelmetProvider>
      <div
        className={
          theme.palette.mode === "dark"
            ? "bg-element3 md:py-20 py-10 bg-overlay-dark bg-cover bg-center h-full items-center bg-repeat w-full"
            : "bg-element3 md:py-20 py-10 bg-overlay-light bg-cover bg-center h-full items-center w-full"
        }
      >
        <Skills />
      </div>
    </>
  );
}

export default SkillsPage;