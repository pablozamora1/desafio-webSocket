import express, { urlencoded, json } from "express";
import { engine } from "express-handlebars";
import productsRouter from "./src/routes/products.router.js";
import cartRouter from "./src/routes/cart.router.js";

// import __dirname from "./src/utils.js";
// import * as path from "path";
import viewsRouter from "./src/routes/views.router.js";

const app = express();
const PUERTO = 8080;

//Middleware
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(express.static("./src/public"));

// handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");
// app.set("views", path.resolve(__dirname + "/views"));
app.use("/", viewsRouter);

//routing
app.use("/api/products", productsRouter);
app.use("/api/cart", cartRouter);
app.use("/api/realtimeproducts", viewsRouter);


//Listen
app.listen(PUERTO, () => {
  console.log(`escuchando en el http://localhost:${PUERTO}`);
});

