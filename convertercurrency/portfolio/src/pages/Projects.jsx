
import { useTheme } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";

export  function ProjectsPage() {
  const theme = useTheme();
  return (
    <>
      <HelmetProvider>
        <title>
         My Projects | Brenda Mumelo Portfolio - Software Developer (Frontend Developer)
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
        className={`md:py-20 py-10
  ${
    theme.palette.mode === "dark"
      ? "bg-element1 bg-overlay-light-dark bg-cover bg-center h-full items-center bg-no-repeat w-full"
      : "bg-element1 bg-cover bg-center h-full items-center bg-no-repeat w-full"
  }
`}
      >
        <ProjectsPage/>
      </div>
    </>
  );
}
