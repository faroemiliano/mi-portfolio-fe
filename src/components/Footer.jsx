// import React from "react";
// import { Box, Typography } from "@mui/material";

// export default function Footer() {
//   return (
//     <Box
//       component="footer"
//       sx={{
//         bgcolor: "primary.main",
//         color: "white",
//         py: 2,
//         textAlign: "center",
//         mt: "auto",
//       }}
//     >
//       <Typography variant="body2">
//         &copy; {new Date().getFullYear()} Emiliano Faro. Todos los derechos
//         reservados.
//       </Typography>
//     </Box>
//   );
// }
import React from "react";
import { Box, Container, Typography, Link } from "@mui/material";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import fotoContacto from "../assets/contactos.jpeg";

export default function Contacto() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "rgba(10, 25, 41, 0.85)", // fondo oscuro semitransparente
        color: "#66FCF1", // azul neón suave para texto e íconos
        py: 3,
        px: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "0 -2px 10px rgba(102, 252, 241, 0.3)", // sombra azulada difusa para efecto glow
      }}
    >
      {/* Contenido principal (foto + info) */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          gap: 3,
          mb: 2,
        }}
      >
        {/* Foto */}
        <Box
          component="img"
          src={fotoContacto}
          alt="Contacto"
          sx={{
            width: 350,
            height: 130,
            borderRadius: "10%",
            objectFit: "cover",
            boxShadow: "0 0 15px #66FCF1", // resplandor azul neón
          }}
        />

        {/* Datos de contacto */}
        <Container id="contactos">
          <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
            Contacto
          </Typography>

          <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Email sx={{ color: "#66FCF1" }} />
            Email:{" "}
            <Link
              href="mailto:emiliano@example.com"
              underline="hover"
              color="inherit"
            >
              faroemiliano@gmail.com
            </Link>
          </Typography>

          <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LinkedIn sx={{ color: "#66FCF1" }} />
            LinkedIn:{" "}
            <Link
              href="https://www.linkedin.com/in/emiliano-faro/"
              target="_blank"
              underline="hover"
              color="inherit"
            >
              linkedin.com/in/emiliano-faro
            </Link>
          </Typography>

          <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <GitHub sx={{ color: "#66FCF1" }} />
            GitHub:{" "}
            <Link
              href="https://github.com/faroemiliano?tab=repositories"
              target="_blank"
              underline="hover"
              color="inherit"
            >
              github.com/faroEmiliano
            </Link>
          </Typography>
        </Container>
      </Box>

      {/* Frase inferior centrada */}
      <Typography variant="body2" align="center" sx={{ color: "#7FFFD4" }}>
        &copy; {new Date().getFullYear()} Emiliano Faro. Todos los derechos
        reservados.
      </Typography>
    </Box>
  );
}
