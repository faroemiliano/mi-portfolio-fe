import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  Paper,
  Chip,
} from "@mui/material";
import {
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiDjango,
  SiPython,
  SiPostgresql,
  SiNodedotjs,
  SiGit,
} from "react-icons/si";
import fondo from "../assets/fondoTela.avif";
import ComentariosForm from "./comentariosForm";

// Tecnologías
const skills = [
  { icon: <SiJavascript size={40} />, name: "JavaScript" },
  { icon: <SiReact size={40} />, name: "React" },
  { icon: <SiHtml5 size={40} />, name: "HTML5" },
  { icon: <SiCss3 size={40} />, name: "CSS3" },
  { icon: <SiDjango size={40} />, name: "Django" },
  { icon: <SiPython size={40} />, name: "Python3" },
  { icon: <SiPostgresql size={40} />, name: "PostgreSQL" },
  { icon: <SiNodedotjs size={40} />, name: "Node.js" },
  { icon: <SiGit size={40} />, name: "Git" },
];

export default function Project({ texts }) {
  const [openProf, setOpenProf] = useState(false);
  const [openPract, setOpenPract] = useState(false);
  const [openSkills, setOpenSkills] = useState(false);
  const [openComentarios, setOpenComentarios] = useState(false);

  const proyectosProfesionales = texts.proyectos.profesionales;
  const proyectosPracticos = texts.proyectos.practicos;

  return (
    <Box sx={{ textAlign: "center", py: 4 }}>
      <Box sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 10 }}>
        <Button
          variant="contained"
          onClick={() => setOpenProf(true)}
          sx={{
            px: 4,
            py: 1.5,
            fontSize: "1rem",
            fontWeight: "bold",
            color: "#fff",
            background: "linear-gradient(135deg, #00bcd4 0%, #3f51b5 100%)",
            borderRadius: "20px",
            boxShadow: "0 4px 15px rgba(0, 188, 212, 0.4)",
            transition: "all 0.3s ease-in-out",
            textTransform: "uppercase",
            letterSpacing: "1px",
            "&:hover": {
              background: "linear-gradient(135deg, #3f51b5 0%, #00bcd4 100%)",
              boxShadow: "0 6px 20px rgba(63, 81, 181, 0.6)",
              transform: "scale(1.05)",
            },
            "&:active": {
              transform: "scale(0.95)",
              boxShadow: "inset 0 3px 6px rgba(0,0,0,0.3)",
            },
          }}
        >
          {texts.proyectoProf}
        </Button>
        <Button
          variant="contained"
          onClick={() => setOpenPract(true)}
          sx={{
            px: 4,
            py: 1.5,
            fontSize: "1rem",
            fontWeight: "bold",
            color: "#fff",
            background: "linear-gradient(135deg, #00bcd4 0%, #3f51b5 100%)",
            borderRadius: "20px",
            boxShadow: "0 4px 15px rgba(0, 188, 212, 0.4)",
            transition: "all 0.3s ease-in-out",
            textTransform: "uppercase",
            letterSpacing: "1px",
            "&:hover": {
              background: "linear-gradient(135deg, #3f51b5 0%, #00bcd4 100%)",
              boxShadow: "0 6px 20px rgba(63, 81, 181, 0.6)",
              transform: "scale(1.05)",
            },
            "&:active": {
              transform: "scale(0.95)",
              boxShadow: "inset 0 3px 6px rgba(0,0,0,0.3)",
            },
          }}
        >
          {texts.proyectoPrac}
        </Button>
        <Button
          variant="contained"
          onClick={() => setOpenSkills(true)}
          sx={{
            px: 4,
            py: 1.5,
            fontSize: "1rem",
            fontWeight: "bold",
            color: "#fff",
            background: "linear-gradient(135deg, #00bcd4 0%, #3f51b5 100%)",
            borderRadius: "20px",
            boxShadow: "0 4px 15px rgba(0, 188, 212, 0.4)",
            transition: "all 0.3s ease-in-out",
            textTransform: "uppercase",
            letterSpacing: "1px",
            "&:hover": {
              background: "linear-gradient(135deg, #3f51b5 0%, #00bcd4 100%)",
              boxShadow: "0 6px 20px rgba(63, 81, 181, 0.6)",
              transform: "scale(1.05)",
            },
            "&:active": {
              transform: "scale(0.95)",
              boxShadow: "inset 0 3px 6px rgba(0,0,0,0.3)",
            },
          }}
        >
          {texts.tecnologias}
        </Button>

        {/* Botón Comentarios */}
        <Button
          onClick={() => setOpenComentarios(true)}
          variant="contained"
          sx={{
            px: 4,
            py: 1.5,
            fontSize: "1rem",
            fontWeight: "bold",
            color: "#fff",
            background: "linear-gradient(135deg, #00bcd4 0%, #3f51b5 100%)",
            borderRadius: "20px",
            boxShadow: "0 4px 15px rgba(0, 188, 212, 0.4)",
            transition: "all 0.3s ease-in-out",
            textTransform: "uppercase",
            letterSpacing: "1px",
            "&:hover": {
              background: "linear-gradient(135deg, #3f51b5 0%, #00bcd4 100%)",
              boxShadow: "0 6px 20px rgba(63, 81, 181, 0.6)",
              transform: "scale(1.05)",
            },
            "&:active": {
              transform: "scale(0.95)",
              boxShadow: "inset 0 3px 6px rgba(0,0,0,0.3)",
            },
          }}
        >
          COMENTARIOS
        </Button>
      </Box>
      {/* Modal Comentarios, separado y fuera del Box de botones */}
      <Dialog
        open={openComentarios}
        onClose={() => setOpenComentarios(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle
          sx={{
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#bbdefb",
          }}
        >
          Dejá tu comentario
        </DialogTitle>

        <DialogContent
          dividers
          sx={{
            backgroundImage: `url(${fondo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backdropFilter: "blur(2px)",
          }}
        >
          <Box
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.89)", // Fondo blanco semitransparente
              padding: 3,
              borderRadius: 8,
              mt: 3,
            }}
          >
            <ComentariosForm texts={texts} />
          </Box>
          <DialogActions>
            <Box
              sx={{
                width: "100%",
                height: "auto",
                display: "flex",
                justifyContent: "flex-end",
                mt: 1,
              }}
            >
              <Button
                onClick={() => setOpenComentarios(false)}
                sx={{
                  backgroundColor: "#bbdefb",
                  color: "#0d47a1",
                  "&:hover": {
                    backgroundColor: "#90caf9",
                  },
                }}
              >
                {texts.cerrar}
              </Button>
            </Box>
          </DialogActions>
        </DialogContent>
      </Dialog>
      ;{/* Modal Profesionales */}
      <Dialog
        open={openProf}
        onClose={() => setOpenProf(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle
          sx={{
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#bbdefb",
          }}
        >
          Proyectos Profesionales
        </DialogTitle>
        <DialogContent
          dividers={false}
          sx={{
            backgroundImage: `url(${fondo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Grid container spacing={3}>
            {proyectosProfesionales.map((proyecto, i) => (
              <Grid item xs={12} md={6} key={i}>
                <Paper
                  sx={{
                    p: 2,
                    mt: 3,
                    backgroundColor: "rgba(249, 249, 249, 0.89)", // blanco suavizado
                    borderRadius: 5,
                    height: "100%",
                  }}
                  elevation={30}
                >
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ color: "#000", fontWeight: "bold" }} // título bien oscuro y fuerte
                  >
                    {proyecto.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ color: "#333", fontWeight: "bold" }} // contenido con gris oscuro
                  >
                    {proyecto.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              px: 0,
              pt: 4,
            }}
          >
            <DialogActions
              dividers={false} // si tenés dividers, quitalo para probar
              sx={{
                borderBottom: "none",
                boxShadow: "none",
              }}
            >
              <Button
                onClick={() => setOpenProf(false)}
                sx={{
                  backgroundColor: "#bbdefb",
                  color: "#0d47a1", // texto en azul oscuro para contraste
                  "&:hover": {
                    backgroundColor: "#90caf9", // un azul un poco más oscuro para hover
                  },
                }}
              >
                {texts.cerrar}
              </Button>
            </DialogActions>
          </Box>
        </DialogContent>
      </Dialog>
      {/* Modal Prácticos */}
      <Dialog
        open={openPract}
        onClose={() => setOpenPract(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle
          sx={{
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#bbdefb",
          }}
        >
          Proyectos Prácticos
        </DialogTitle>
        <DialogContent
          dividers={false}
          sx={{
            backgroundImage: `url(${fondo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Grid container spacing={3}>
            {proyectosPracticos.map((proyecto, i) => (
              <Grid item xs={12} md={6} key={i}>
                <Paper
                  sx={{
                    p: 2,
                    mt: 3,
                    backgroundColor: "rgba(249, 249, 249, 0.88)", // blanco suavizado
                    borderRadius: 5,
                    height: "100%",
                  }}
                  elevation={30}
                >
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ color: "#000", fontWeight: "bold" }} // título bien oscuro y fuerte
                  >
                    {proyecto.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ color: "#333", fontWeight: "bold" }} // contenido con gris oscuro
                  >
                    {proyecto.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
          <DialogActions>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                px: 0,
                pt: 4,
              }}
            >
              <Button
                onClick={() => setOpenPract(false)}
                sx={{
                  backgroundColor: "#bbdefb",
                  color: "#0d47a1",
                  "&:hover": {
                    backgroundColor: "#90caf9",
                  },
                }}
              >
                {texts.cerrar}
              </Button>
            </Box>
          </DialogActions>
        </DialogContent>
      </Dialog>
      {/* Modal Skills */}
      <Dialog
        open={openSkills}
        onClose={() => setOpenSkills(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle
          textAlign="center"
          sx={{
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#bbdefb",
          }}
        >
          Tecnologías utilizadas en mis trabajos
        </DialogTitle>
        <DialogContent
          dividers={false}
          sx={{
            backgroundImage: `url(${fondo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column", // Apilamos el contenido verticalmente
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Contenido principal (skills) */}
          <Paper
            sx={{
              p: 4,
              height: 200,
              width: 400,
              mt: 6,
              backgroundColor: "rgba(238, 233, 233, 0.89)",
              borderRadius: 4,
              boxShadow: 3,
            }}
          >
            <Grid container spacing={2} justifyContent="center">
              {skills.map((skill, index) => (
                <Grid item xs={4} sm={3} key={index}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    textAlign="center"
                  >
                    <Box sx={{ mb: 0 }}>{skill.icon}</Box>
                    <Typography
                      variant="caption"
                      sx={{ fontWeight: "bold", color: "#333" }}
                    >
                      {skill.name}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>

          {/* Botón al margen inferior derecho */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              px: 1,
              pt: 1,
            }}
          >
            <Button
              onClick={() => setOpenSkills(false)}
              sx={{
                backgroundColor: "#bbdefb",
                color: "#0d47a1",
                "&:hover": {
                  backgroundColor: "#90caf9",
                },
              }}
            >
              {texts.cerrar}
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
