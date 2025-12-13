import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import axios from "axios";

export default function ComentariosForm({ texts }) {
  const [autor, setAutor] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);

  const tuNombre = texts.formulario.tu_nombre;
  const gmail = texts.formulario.email;
  const mensajetexto = texts.formulario.mensaje;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://mi-portfolio-be-2.onrender.com/api/comentarios/", {
        autor,
        email,
        mensaje,
      })
      .then(() => {
        setAutor("");
        setEmail("");
        setMensaje("");
        setEnviado(true); // mensaje de confirmación
        setTimeout(() => setEnviado(false), 4000); // oculta mensaje después de 4s
      })
      .catch((err) => {
        console.error(err);
        alert("Hubo un error al enviar tu comentario.");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        margin="dense"
        label={tuNombre}
        fullWidth
        value={autor}
        onChange={(e) => setAutor(e.target.value)}
        autoFocus
        required
      />
      <TextField
        margin="dense"
        label={gmail}
        fullWidth
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <TextField
        margin="dense"
        label={mensajetexto}
        fullWidth
        multiline
        rows={4}
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
        required
      />
      <Button type="submit" variant="contained" sx={{ mt: 1, mb: 1 }}>
        Enviar
      </Button>
      <Typography
        variant="caption"
        sx={{
          fontStyle: "italic",
          display: "block",
          textAlign: "center",
          mt: 2,
          color: "text.secondary",
          fontWeight: "bold",
          whiteSpace: "pre-line",
        }}
      >
        Te invito a que dejes un comentario, una opinion o algun consejo...
        {"\n"} el mismo sera enviado automaticamente a mi direccion de correo y
        voy a estar atento a todos los mensajes
      </Typography>
      {enviado && (
        <Typography color="success.main">
          ¡Comentario enviado correctamente!
        </Typography>
      )}
    </form>
  );
}
