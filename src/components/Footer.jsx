import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import fotoContacto from "../assets/contactos.jpeg";
import { Container } from "tsparticles-engine";

export default function Contacto() {
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
        {/* Imagen de contacto */}
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

        {/* Información de contacto */}
        <Container id="contactos">
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: "bold",
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              Contacto
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
              <Email sx={{ color: "#66FCF1" }} />
              <Typography variant="body2" component="span">
                Email:&nbsp;
                <Link
                  href="mailto:faroemiliano@gmail.com"
                  underline="hover"
                  color="inherit"
                >
                  faroemiliano@gmail.com
                </Link>
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
              <LinkedIn sx={{ color: "#66FCF1" }} />
              <Typography variant="body2" component="span">
                LinkedIn:&nbsp;
                <Link
                  href="https://www.linkedin.com/in/emiliano-faro/"
                  target="_blank"
                  underline="hover"
                  color="inherit"
                >
                  linkedin.com/in/emiliano-faro
                </Link>
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <GitHub sx={{ color: "#66FCF1" }} />
              <Typography variant="body2" component="span">
                GitHub:&nbsp;
                <Link
                  href="https://github.com/faroemiliano?tab=repositories"
                  target="_blank"
                  underline="hover"
                  color="inherit"
                >
                  github.com/faroEmiliano
                </Link>
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Frase final */}
      <Typography
        variant="body2"
        align="center"
        sx={{ color: "#7FFFD4", fontSize: { xs: "0.8rem", sm: "0.9rem" } }}
      >
        &copy; {new Date().getFullYear()} Emiliano Faro. Todos los derechos
        reservados.
      </Typography>
    </Box>
  );
}
