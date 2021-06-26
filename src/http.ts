import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import path from "path";
import mongoose from "mongoose";

const app = express();

const server = createServer(app);

mongoose.connect("mongodb://localhost/igniteWeSocket", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const io = new Server(server);

app.use(express.static(path.join(__dirname, "..", "public")));

io.on("connection", (socket) => {
  console.log("Socket", socket.id);
});

app.get("/", (request, response) => {
  return response.json({ message: "Websocket" });
});

export { server, io };
