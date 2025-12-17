import React from "react";
import { Box, Typography, Button } from "@mui/material";

export default function Cv({ language }) {
  const cvSrc = language?.startsWith("pt")
    ? "/cv-Faro-pt.pdf"
    : "/cv-Faro-es.pdf";

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  return (
    <Box sx={{ width: "100%", height: "100vh", bgcolor: "#0A1929" }}>
      <Typography
        variant="h6"
        sx={{ color: "#66FCF1", textAlign: "center", py: 1 }}
      >
        Curriculum Vitae
      </Typography>

      {isMobile ? (
        <Box
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            variant="outlined"
            href={cvSrc}
            target="_blank"
            sx={{
              color: "#66FCF1",
              borderColor: "#66FCF1",
              fontWeight: "bold",
            }}
          >
            Abrir CV
          </Button>
        </Box>
      ) : (
        <iframe
          src={cvSrc}
          title="CV"
          width="100%"
          height="100%"
          style={{ border: "none" }}
        />
      )}
    </Box>
  );
}
