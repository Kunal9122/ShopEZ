import "dotenv/config"; // Replaces import dotenv + dotenv.config()
import dns from "node:dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);

import express from "express";
import cors from "cors";
import { connectDB } from "./db.js";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
await connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

// Root Route (removed the duplicate app.get("/"))
app.get("/", (req, res) => {
  res.send("ShopEZ API Server is running...");
});

// Start Server
app.listen(PORT, () => {
  console.log(`[ShopEZ Server] Running on http://localhost:${PORT}`);
});