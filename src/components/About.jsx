import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import fotoPerfil from "../assets/fotoEmi.jpeg";

export default function About({ texts }) {
  const [lopFoto, setLopFoto] = useState(false);

  return (
    <Box sx={{ py: { xs: 4, md: 6 } }}>
      <Container id="sobremi">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: 4, md: 10 },
          }}
        >
          {/* Texto */}
          <Box
            sx={{
              flex: 1,
              textAlign: { xs: "center", md: "left" },
              px: { xs: 2, sm: 3, md: 0 },
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{ color: "#66FCF1", fontWeight: "bold" }}
            >
              {texts.aboutMe}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#B0BEC5",
                fontWeight: "bold",
                textAlign: "justify",
              }}
            >
              {texts.introText}
            </Typography>
          </Box>

          {/* Imagen con efecto flip */}
          <Box
            onClick={() => setLopFoto((prev) => !prev)}
            sx={{
              width: { xs: 220, sm: 280, md: 400 },
              height: { xs: 220, sm: 280, md: 400 },
              perspective: "1000px",
              cursor: lopFoto ? "default" : "pointer",
              mx: { xs: "auto", md: 0 }, // centra imagen en mobile
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                position: "relative",
                transformStyle: "preserve-3d",
                transition: "transform 1s",
                transform: lopFoto ? "rotateY(180deg)" : "none",
              }}
            >
              {/* Lado frontal */}
              <Box
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  backfaceVisibility: "hidden",
                  background:
                    "linear-gradient(135deg, #00bcd4 0%, #3f51b5 100%)",
                  color: "#fff",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: { xs: "1rem", sm: "1.3rem" },
                  fontWeight: "bold",
                  textAlign: "center",
                  px: 2,
                  boxShadow: 10,
                }}
              >
                {texts.clickHere}
              </Box>

              {/* Lado trasero (imagen) */}
              <Box
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                  borderRadius: "50%",
                  overflow: "hidden",
                  boxShadow: 10,
                }}
              >
                <Box
                  component="img"
                  src={fotoPerfil}
                  alt={texts.photoAlt}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: 0.9,
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
