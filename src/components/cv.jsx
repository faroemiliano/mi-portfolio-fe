import React from "react";
import { Box } from "@mui/material";
import { useLocation, Navigate } from "react-router-dom";

export default function Cv() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const lang = params.get("lang");

  if (!lang) {
    return <Navigate to="/cv?lang=es" replace />;
  }

  const cvSrc = lang === "pt" ? "/cv-Faro-pt.pdf" : "/cv-Faro-es.pdf";

  return (
    <Box sx={{ width: "100%", height: "100vh", bgcolor: "#0A1929" }}>
      <iframe
        key={cvSrc} // 🔴 esto evita cache
        src={cvSrc}
        width="100%"
        height="100%"
        style={{ border: "none" }}
        title="CV"
      />
    </Box>
  );
}
