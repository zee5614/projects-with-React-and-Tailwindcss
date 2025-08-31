import {  createContext, useMemo, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import { ProjectsPage } from "./pages/Projects.jsx";
import SkillsPage from "./pages/skills.jsx";
import ContactsPage from "./pages/Contacts.jsx";
import Loader from "./components/Loader.jsx";


export const ColorModeContext = createContext({ toggleColorMode: () => {} });


export default function App() {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: "#00bcd4",
          },
          secondary: {
            main: "#ffd700",
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Router>
          <MainContent />
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

function MainContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [location.pathname]); // Runs only on route change

  if (loading) return <Loader />;

  return (
    <>
      <Header />
      <main key={location.pathname}>
        {" "}
        {/* Forces re-render */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/contact" element={<ContactsPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
