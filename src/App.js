import React, { useCallback, useState } from "react";
import { Box } from "@mui/material";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Project";
import Footer from "./components/Footer";
import Cv from "./components/cv";

import fondo from "./assets/fondoTela.avif";
import translations from "./components/translations";

function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const [language, setLanguage] = useState("es");
  const t = translations[language];

  return (
    <Routes>
      {/* LANDING */}
      <Route
        path="/"
        element={
          <Box
            sx={{
              position: "relative",
              minHeight: "100vh",
              backgroundImage: `url(${fondo})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              overflow: "hidden",
            }}
          >
            {/* Partículas */}
            <Particles
              id="tsparticles"
              init={particlesInit}
              options={{
                fullScreen: { enable: false },
                background: { color: "transparent" },
                particles: {
                  number: { value: 60 },
                  size: { value: { min: 1, max: 3 } },
                  color: { value: "#ffffff" },
                  opacity: { value: 0.3 },
                  links: {
                    enable: true,
                    color: "#ffffff",
                    distance: 150,
                    opacity: 0.2,
                    width: 1,
                  },
                  move: { enable: true, speed: 1 },
                },
              }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 0,
                width: "100%",
                height: "100%",
              }}
            />

            {/* Overlay oscuro */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 1,
                backgroundColor: "rgba(0, 0, 0, 0.6)",
              }}
            />

            {/* Contenido */}
            <Box sx={{ position: "relative", zIndex: 2, color: "#fff" }}>
              <Header texts={t} setLanguage={setLanguage} />
              <About texts={t} />
              <Projects texts={t} />
              <Footer texts={t} language={language} />
            </Box>
          </Box>
        }
      />

      {/* CV */}
      <Route path="/cv" element={<Cv language={language} />} />
    </Routes>
  );
}

export default App;
