import React from "react";
import { Box, Typography, Link, Container } from "@mui/material";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import fotoContacto from "../assets/contactos.jpeg";

export default function Contacto({ texts, language }) {
  console.log("LANGUAGE EN CONTACTO:", language);
  const cvUrl = language?.startsWith("pt")
    ? "/cv-Faro-pt.pdf"
    : "/cv-Faro-es.pdf";
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "rgba(10, 25, 41, 0.85)",
        color: "#66FCF1",
        py: 4,
        px: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "0 -2px 10px rgba(102, 252, 241, 0.3)",
      }}
    >
      {/* Contenido principal */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
          width: "100%",
          maxWidth: "1000px",
          mb: 3,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        {/* Imagen */}
        <Box
          component="img"
          src={fotoContacto}
          alt="Contacto"
          sx={{
            width: { xs: "100%", sm: 350 },
            height: { xs: "auto", sm: 130 },
            borderRadius: "10%",
            objectFit: "cover",
            boxShadow: "0 0 15px #66FCF1",
          }}
        />

        {/* Info */}
        <Container id="contactos">
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
              {texts.contacto}
            </Typography>

            <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
              <Email />
              <Link
                href="mailto:faroemiliano@gmail.com"
                color="inherit"
                underline="hover"
              >
                faroemiliano@gmail.com
              </Link>
            </Box>

            <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
              <LinkedIn />
              <Link
                href="https://www.linkedin.com/in/emiliano-faro/"
                target="_blank"
                color="inherit"
                underline="hover"
              >
                linkedin.com/in/emiliano-faro
              </Link>
            </Box>

            <Box sx={{ display: "flex", gap: 1 }}>
              <GitHub />
              <Link
                href="https://github.com/faroemiliano"
                target="_blank"
                color="inherit"
                underline="hover"
              >
                github.com/faroemiliano
              </Link>
            </Box>
          </Box>
        </Container>
        {/* CV */}
        <Box mt={3} display="flex" justifyContent="center">
          <Link
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            download
            underline="none"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              px: 3,
              py: 1.2,
              minWidth: 180,

              borderRadius: "12px",
              border: "2px solid #66FCF1",
              color: "#66FCF1",
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: "1px",

              background: "rgba(10, 25, 41, 0.7)",
              boxShadow: "0 0 12px rgba(102, 252, 241, 0.4)",
              transition: "all 0.3s ease",

              "&:hover": {
                background: "#66FCF1",
                color: "#0A1929",
                boxShadow: "0 0 20px rgba(102, 252, 241, 0.9)",
                transform: "translateY(-2px)",
              },
            }}
          >
            {texts.cv}
          </Link>
        </Box>
      </Box>

      <Typography variant="body2" sx={{ color: "#7FFFD4" }}>
        © {new Date().getFullYear()} Emiliano Faro
      </Typography>
    </Box>
  );
}
