import React from "react";
import { useTheme } from "@mui/material/styles";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact.jsx";
import { HelmetProvider } from "react-helmet-async";

function Home() {
  const theme = useTheme();

  return (
    <>
      <HelmetProvider>
        <title>
          Brenda Mumelo Portfolio - Software Developer (Frontend Developer)
        </title>
        <meta
          name="keywords"
          content="computer science, software engineering, software developer, software development, machine learning, Brenda, brenda mumelo, mumelo, zee5614"
        />
        <meta
          name="description"
          content="Looking for a software engineer, computer scientist or machine learning expert?Welcome to Brenda mumelo's portfolio. Discover projects and insights on software development, engineering, and machine learning."
        />
      </HelmetProvider>
      <div>
        <div
          className={` ${
            theme.palette.mode === "dark"
              ? "bg-element1 bg-overlay-dark bg-cover bg-center h-full items-center bg-no-repeat w-full"
              : "bg-element1 bg-cover bg-center h-full items-center bg-no-repeat w-full"
          }`}
        >
          <Hero />
        </div>
        <div
          className={` ${
            theme.palette.mode === "dark"
              ? "bg-element1 bg-overlay-light-dark bg-cover bg-center h-full items-center bg-no-repeat w-full"
              : "bg-element1 bg-cover bg-center h-full items-center bg-no-repeat w-full"
          }`}
        >
          <Projects />
        </div>
        <div
          className={
            theme.palette.mode === "dark"
              ? "bg-element3 bg-overlay-dark bg-cover bg-center h-full items-center bg-no-repeat w-full"
              : "bg-element3 bg-overlay-lighter bg-cover bg-center h-full items-center w-full"
          }
        >
          <Skills />
        </div>
        <div
          className={
            theme.palette.mode === "dark"
              ? "bg-element3 bg-overlay-light-dark bg-cover bg-center h-full items-center bg-repeat w-full"
              : "bg-element3 bg-overlay-light bg-cover bg-center h-full items-center w-full"
          }
        >
          <Contact />
        </div>
      </div>
    </>
  );
}

export default Home;