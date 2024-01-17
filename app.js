import express, { urlencoded, json } from "express";
import { engine } from "express-handlebars";
import productsRouter from "./src/routes/products.router.js";
import cartRouter from "./src/routes/cart.router.js";
import viewsRouter from "./routes/views.router.js";


const app = express();
const PUERTO = 8080;

//Middleware
app.use(urlencoded({ extended: true }));
app.use(json());

// handlebars
app.engine("handlebars", engine())
app.set("view engine", "handlebars")
app.set("views", "./src/views");
app.use(express.static("./src/public"));
app.use("/", viewsRouter);

//routing
app.use("/api/products", productsRouter);
app.use("/api/cart", cartRouter);
//Listen
const httpServer = app.listen(PUERTO, () => {
  console.log(`escuchando en el http://localhost:${PUERTO}`);
});
const io = socket(httpServer);