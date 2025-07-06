import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useState,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import iconeArg from "../assets/iconeArgen.jpeg";
import iconeBra from "../assets/iconeBrasil.jpeg";

export default function Header({ texts, setLanguage }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

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
    <>
      <AppBar
        position="static"
        sx={{
          bgcolor: "rgba(10, 25, 41, 0.85)",
          color: "#66FCF1",
          boxShadow: "0 0 10px #66FCF1",
          px: { xs: 1, sm: 3 },
        }}
      >
        <Toolbar sx={{ display: "flex", alignItems: "center" }}>
          {/* Nombre a la izquierda */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "bold",
                letterSpacing: 2,
                fontSize: { xs: "1rem", sm: "1.2rem" },
              }}
            >
              {texts.name}
            </Typography>
          </Box>

          {/* Centro - Rol o Menú Hamburguesa */}
          {isMobile ? (
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleDrawerToggle}
              sx={{ mr: 1 }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ flex: 1, textAlign: "center" }}>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                  fontSize: { md: "1.8rem", lg: "2rem" },
                  letterSpacing: 2,
                }}
              >
                {texts.role}
              </Typography>
            </Box>
          )}

          {/* Banderas a la derecha */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "flex-end",
              gap: 1,
            }}
          >
            <Box
              component="img"
              src={iconeArg}
              alt="Español"
              onClick={() => setLanguage("es")}
              sx={{
                width: 30,
                height: 30,
                cursor: "pointer",
                borderRadius: "50%",
                boxShadow: "0 0 5px #fff",
                transition: "all 0.2s",
                "&:hover": { transform: "scale(1.1)" },
              }}
            />
            <Box
              component="img"
              src={iconeBra}
              alt="Português"
              onClick={() => setLanguage("pt")}
              sx={{
                width: 30,
                height: 30,
                cursor: "pointer",
                borderRadius: "50%",
                boxShadow: "0 0 5px #fff",
                transition: "all 0.2s",
                "&:hover": { transform: "scale(1.1)" },
              }}
            />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer Mobile */}
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </>
  );
}
