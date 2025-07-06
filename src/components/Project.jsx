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
  const [openComentarios, setOpenComentarios] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const proyectosProfesionales = texts.proyectos.profesionales;
  const proyectosPracticos = texts.proyectos.practicos;

  return (
    <Box sx={{ textAlign: "center", py: 4 }}>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 2, px: 2 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Button
            fullWidth
            variant="contained"
            onClick={() => setOpenProf(true)}
          >
            {texts.proyectoProf}
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Button
            fullWidth
            variant="contained"
            onClick={() => setOpenPract(true)}
          >
            {texts.proyectoPrac}
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Button
            fullWidth
            variant="contained"
            onClick={() => setOpenSkills(true)}
          >
            {texts.tecnologias}
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Button
            fullWidth
            variant="contained"
            onClick={() => setOpenComentarios(true)}
          >
            COMENTARIOS
          </Button>
        </Grid>
      </Grid>

      {/* Diálogos */}
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
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenComentarios(false)}>
            {" "}
            {texts.cerrar}{" "}
          </Button>
        </DialogActions>
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
          sx={{ backgroundImage: `url(${fondo})`, backgroundSize: "cover" }}
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
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenProf(false)}>{texts.cerrar}</Button>
        </DialogActions>
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
          sx={{ backgroundImage: `url(${fondo})`, backgroundSize: "cover" }}
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
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenPract(false)}>{texts.cerrar}</Button>
        </DialogActions>
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
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenSkills(false)}>{texts.cerrar}</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
