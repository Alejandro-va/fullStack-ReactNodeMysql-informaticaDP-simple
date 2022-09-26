import express from "express";
import cors from "cors";

//CONEXION A LA BASE DE DATOS
import db from "./database/db.js";

//CONEXION AL ENRUTADOR
import blogRoutes from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/blogs", blogRoutes);

try {
  await db.authenticate();
  console.log("Conexión exitosa a la base de datos");
} catch (error) {
  console.log(`El error de la conexion es ${error}`);
}

/* app.get("/", (req, res) => {
  res.send("Hi worl");
}); */

app.listen(8000, () => {
  console.log("Server running in http://localhost:8000/");
});
