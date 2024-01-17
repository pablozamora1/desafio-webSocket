console.log("funciona correctamente");
const socket = io();
socket.emit("mensaje", "Hola mundo!");

// recibimos el saludo del servidor

socket.on("saludo", (data) => {
  console.log(data);
});
