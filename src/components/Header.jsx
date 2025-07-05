import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import iconeArg from "../assets/iconeArgen.jpeg";
import iconeBra from "../assets/iconeBrasil.jpeg";

export default function Header({ texts, setLanguage }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = [
    { label: texts.sobreMi, href: "#sobremi" },
    { label: texts.contacto, href: "#contactos" },
  ];

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerToggle}>
      <List>
        {menuItems.map((item) => (
          <ListItem button key={item.label} component="a" href={item.href}>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "rgba(10, 25, 41, 0.85)",
        color: "#66FCF1",
        boxShadow: "0 0 10px #66FCF1",
        px: 3,
      }}
    >
      {/* Botones para cambiar idioma */}
      <Toolbar sx={{ display: "flex", alignItems: "center" }}>
        {/* Nombre a la izquierda */}
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "bold",
              letterSpacing: 2,
              cursor: "default",
            }}
          >
            {texts.name}
          </Typography>
        </Box>

        {/* Rol centrado */}
        <Box sx={{ flex: 1, textAlign: "center" }}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "bold",
              letterSpacing: 2,
              cursor: "default",
            }}
          >
            {texts.role}
          </Typography>
        </Box>

        {/* Banderas a la derecha */}
        <Box
          sx={{ flex: 1, display: "flex", justifyContent: "flex-end", gap: 1 }}
        >
          <Box
            component="img"
            src={iconeArg}
            alt="Español"
            onClick={() => setLanguage("es")}
            sx={{
              width: 32,
              height: 32,
              cursor: "pointer",
              borderRadius: "50%",
              boxShadow: "0 0 5px #fff",
              "&:hover": { transform: "scale(1.1)" },
              transition: "all 0.2s",
            }}
          />
          <Box
            component="img"
            src={iconeBra}
            alt="Português"
            onClick={() => setLanguage("pt")}
            sx={{
              width: 32,
              height: 32,
              cursor: "pointer",
              borderRadius: "50%",
              boxShadow: "0 0 5px #fff",
              "&:hover": { transform: "scale(1.1)" },
              transition: "all 0.2s",
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
