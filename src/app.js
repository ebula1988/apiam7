import express from "express";
import morgan from "morgan";

//routes
import clientsRoutes from "./routes/clientes.routes.js"
import hardwareRoutes from "../src/routes/hardware.routes.js"
import taskRoutes from "../src/routes/task.routes.js"

//cors
const cors = require('cors')
const app=express();

// settings
app.set("port", 4000);



//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors())

//Routes
app.use("/api/clients", clientsRoutes);
app.use("/api/hardware",hardwareRoutes);
app.use("/api/task",taskRoutes);



export default app;
//module.exports = app;