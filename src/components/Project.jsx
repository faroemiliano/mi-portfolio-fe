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
  useMediaQuery,
  useTheme,
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
  const [openCurso, setOpenCurso] = useState(false);
  const [openComentarios, setOpenComentarios] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const proyectosProfesionales = texts.proyectos.profesionales;
  const proyectosPracticos = texts.proyectos.practicos;
  const proyectosCurso = texts.proyectos.curso;

  const buttons = [
    { label: texts.proyectoProf, onClick: () => setOpenProf(true) },
    { label: texts.proyectoPrac, onClick: () => setOpenPract(true) },
    { label: texts.tecnologias, onClick: () => setOpenSkills(true) },
    { label: texts.curso, onClick: () => setOpenCurso(true) },
    { label: "COMENTARIOS", onClick: () => setOpenComentarios(true) },
  ];

  return (
    <Box sx={{ textAlign: "center", py: 4 }}>
      <Grid container spacing={2} justifyContent="center" sx={{ px: 2 }}>
        {buttons.map((btn, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx}>
            <Button
              fullWidth
              variant="contained"
              onClick={btn.onClick}
              sx={{
                py: 1.5,
                fontWeight: "bold",
                fontSize: "1rem",
                textTransform: "uppercase",
                color: "#66FCF1",
                backgroundColor: "rgba(10, 25, 41, 0.85)",
                boxShadow:
                  "0 0 8px #66FCF1, 0 0 15px #66FCF1, 0 0 20px #66FCF1",
                borderRadius: 2,
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#66FCF1",
                  color: "rgba(10, 25, 41, 0.85)",
                  boxShadow:
                    "0 0 15px #66FCF1, 0 0 25px #66FCF1, 0 0 35px #66FCF1",
                },
              }}
            >
              {btn.label}
            </Button>
          </Grid>
        ))}
      </Grid>

      {/* Los diálogos sin cambios */}
      <Dialog
        open={openComentarios}
        onClose={() => setOpenComentarios(false)}
        fullScreen={isMobile}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle
          textAlign="center"
          sx={{ fontWeight: "bold", backgroundColor: "#bbdefb" }}
        >
          Dejá tu comentario
        </DialogTitle>
        <DialogContent
          sx={{
            backgroundImage: `url(${fondo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Box
            sx={{
              backgroundColor: "rgba(255,255,255,0.89)",
              p: 2,
              borderRadius: 2,
              mt: 2,
            }}
          >
            <ComentariosForm texts={texts} />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
            <Button
              onClick={() => setOpenComentarios(false)}
              sx={{
                color: "#66FCF1",
                border: "1px solid #66FCF1",
                mt: "3px",
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: "rgba(102, 252, 241, 0.1)",
                  boxShadow: "0 0 8px #66FCF1",
                },
              }}
            >
              {texts.cerrar}
            </Button>
          </Box>
        </DialogContent>
      </Dialog>

      <Dialog
        open={openProf}
        onClose={() => setOpenProf(false)}
        fullScreen={isMobile}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle
          textAlign="center"
          sx={{ fontWeight: "bold", backgroundColor: "#bbdefb" }}
        >
          Proyectos Profesionales
        </DialogTitle>
        <DialogContent
          sx={{
            backgroundImage: `url(${fondo})`,
            backgroundSize: "cover",
          }}
        >
          <Grid container spacing={2}>
            {proyectosProfesionales.map((proyecto, i) => (
              <Grid item xs={12} sm={6} key={i}>
                <Paper
                  sx={{
                    p: 2,
                    backgroundColor: "rgba(249,249,249,0.9)",
                    borderRadius: 3,
                  }}
                >
                  <Typography variant="h6" fontWeight="bold">
                    {proyecto.title}
                  </Typography>
                  <Typography>{proyecto.description}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
            <Button
              onClick={() => setOpenProf(false)}
              sx={{
                color: "#66FCF1",
                border: "1px solid #66FCF1",
                mt: "3px",
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: "rgba(102, 252, 241, 0.1)",
                  boxShadow: "0 0 8px #66FCF1",
                },
              }}
            >
              {texts.cerrar}
            </Button>
          </Box>
        </DialogContent>
      </Dialog>

      <Dialog
        open={openPract}
        onClose={() => setOpenPract(false)}
        fullScreen={isMobile}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle
          textAlign="center"
          sx={{ fontWeight: "bold", backgroundColor: "#bbdefb" }}
        >
          Proyectos Prácticos
        </DialogTitle>
        <DialogContent
          sx={{
            backgroundImage: `url(${fondo})`,
            backgroundSize: "cover",
          }}
        >
          <Grid container spacing={2}>
            {proyectosPracticos.map((proyecto, i) => (
              <Grid item xs={12} sm={6} key={i}>
                <Paper
                  sx={{
                    p: 2,
                    backgroundColor: "rgba(249,249,249,0.9)",
                    borderRadius: 3,
                  }}
                >
                  <Typography variant="h6" fontWeight="bold">
                    {proyecto.title}
                  </Typography>
                  <Typography>{proyecto.description}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
            <Button
              onClick={() => setOpenPract(false)}
              sx={{
                color: "#66FCF1",
                border: "1px solid #66FCF1",
                mt: "3px",
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: "rgba(102, 252, 241, 0.1)",
                  boxShadow: "0 0 8px #66FCF1",
                },
              }}
            >
              {texts.cerrar}
            </Button>
          </Box>
        </DialogContent>
      </Dialog>

      <Dialog
        open={openSkills}
        onClose={() => setOpenSkills(false)}
        fullScreen={isMobile}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle
          textAlign="center"
          sx={{ fontWeight: "bold", backgroundColor: "#bbdefb" }}
        >
          Tecnologías utilizadas en mis trabajos
        </DialogTitle>
        <DialogContent
          sx={{
            backgroundImage: `url(${fondo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Paper
            sx={{
              p: 4,
              width: isMobile ? "100%" : 400,
              backgroundColor: "rgba(238, 233, 233, 0.89)",
              borderRadius: 4,
              boxShadow: 3,
            }}
          >
            <Grid container spacing={2} justifyContent="center">
              {skills.map((skill, index) => (
                <Grid item xs={4} sm={3} key={index}>
                  <Box textAlign="center">
                    <Box mb={0}>{skill.icon}</Box>
                    <Typography variant="caption" fontWeight="bold">
                      {skill.name}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
            <Button
              onClick={() => setOpenSkills(false)}
              sx={{
                color: "#66FCF1",
                border: "1px solid #66FCF1",
                mt: "3px",
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: "rgba(102, 252, 241, 0.1)",
                  boxShadow: "0 0 8px #66FCF1",
                },
              }}
            >
              {texts.cerrar}
            </Button>
          </Box>
        </DialogContent>
      </Dialog>

      <Dialog
        open={openCurso}
        onClose={() => setOpenCurso(false)}
        fullScreen={isMobile}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle
          textAlign="center"
          sx={{ fontWeight: "bold", backgroundColor: "#bbdefb" }}
        >
          Curso 2025 - Ciberseguridad
        </DialogTitle>
        <DialogContent
          sx={{
            backgroundImage: `url(${fondo})`,
            backgroundSize: "cover",
          }}
        >
          <Grid container spacing={2}>
            {proyectosCurso.map((proyecto, i) => (
              <Grid item xs={12} sm={6} key={i}>
                <Paper
                  sx={{
                    p: 2,
                    backgroundColor: "rgba(249,249,249,0.9)",
                    borderRadius: 3,
                  }}
                >
                  <Typography variant="h6" fontWeight="bold">
                    {proyecto.title}
                  </Typography>
                  <Typography>{proyecto.description}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
            <Button
              onClick={() => setOpenCurso(false)}
              sx={{
                color: "#66FCF1",
                border: "1px solid #66FCF1",
                mt: "3px",
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: "rgba(102, 252, 241, 0.1)",
                  boxShadow: "0 0 8px #66FCF1",
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
