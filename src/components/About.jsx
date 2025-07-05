import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import fotoPerfil from "../assets/fotoEmi.jpeg";

export default function About({ texts }) {
  const [lopFoto, setLopFoto] = useState(false);

  return (
    <Box sx={{ py: 4 }}>
      <Container id="sobremi">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // columna en mobile, fila en desktop
            alignItems: "center",
            gap: 10,
          }}
        >
          {/* Texto */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ color: "#66FCF1", fontWeight: "bold" }}
            >
              {texts.aboutMe} {/* Título traducido */}
            </Typography>
            <Typography
              variant="body1"
              textAlign="justify"
              sx={{ color: "#B0BEC5", fontWeight: "bold" }}
            >
              {texts.introText} {/* Texto descriptivo traducido */}
            </Typography>
          </Box>

          {/* Imagen con flip */}
          <Box
            onClick={() => setLopFoto((prev) => !prev)}
            sx={{
              width: 400,
              height: 400,
              perspective: "1000px",
              cursor: lopFoto ? "default" : "pointer",
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
                  fontSize: "1.8rem",
                  fontWeight: "bold",
                  boxShadow: 10,
                }}
              >
                {texts.clickHere}{" "}
                {/* Texto que invita a hacer click, traducido */}
              </Box>

              {/* Lado trasero (la imagen) */}
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
                  alt={texts.photoAlt} /* Alt traducido */
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
