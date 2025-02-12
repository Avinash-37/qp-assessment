import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes";
import groceryRoutes from "./routes/groceryRoutes";
import orderRoutes from "./routes/orderRoutes";
import { connectDB } from "./config/database";

dotenv.config();
connectDB();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ limit: "1024mb", extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/auth", userRoutes);
app.use("/admin/groceries", groceryRoutes);
app.use("/orders", orderRoutes);



const PORT = process.env.PORT || 9009;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


export default app;
