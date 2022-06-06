const express = require("express");
const app = express();
const db = require('./config/connection');
const routes = require('./routes');
const PORT = process.env.PORT || 3001
const cors = require('cors');
// const http = require("http");
// const { Server } = require("socket.io");

app.use(express.urlencoded({extended: true, limit: '50mb'}));
app.use(express.json({limit: '50mb'}));
app.use(cors());


app.use('/', routes)



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/", routes);
// const server = http.createServer(app);

// // const io = new Server(server, {
// //   cors: {
// //     origin: "http://localhost:3000/chat",
// //     methods: ["GET", "POST"],
// //   },
// // });

// io.on("connection", (socket) => {
//   console.log(`User Connected: ${socket.id}`);

//   socket.on("join_room", (data) => {
//     socket.join(data);
//     console.log(`User with ID: ${socket.id} joined room: ${data}`);
//   });

//   socket.on("send_message", (data) => {
//     socket.to(data.room).emit("receive_message", data);
//   });

//   socket.on("disconnect", () => {
//     console.log("User Disconnected", socket.id);
//   });
// });

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`server running on port ${PORT}!`);
  });
});
