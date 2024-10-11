// server.js

// const http = require('http');
const express = require("express");
const cors = require("cors");
const app = express();

let data = { message: "여러분 화이팅!" };

// CORS 설정을 위한 헤더
// const headers = {
//   "Access -Control-Allow-Origin": "http://127.0.0.1:9000",
//   "Access-Control-Allow-Methods": "OPTIONS, POST, GET, PUT, DELETE",
//   "Access-Control-Allow-Headers": "Content-Type",
// };
app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    methods: ["OPTIONS", "POST", "GET", "PUT", "DELETE"],
  })
);
app.use(express.json());
app.use(express.text());
//   if (req.method === "DELETE") {
//     data = {};
//     res.writeHead(200, headers);
//     res.end("데이터가 삭제되었습니다.");
//   }
// });
app.options("/", (req, res) => {
  //     res.writeHead(204, headers);
  //     res.end();
  //     return;
  res.send("요청을 보내세요");
  return;
});

app.get("/", (req, res) => {
  //     res.writeHead(200, { "Content-Type": "application/json", ...headers });
  //     res.end(JSON.stringify(data));
  return res.send(data);
});

app.post("/", (req, res) => {
  //     let body = "";
  //     req.on("data", (chunk) => {
  //       body += chunk.toString();
  //     });
  //     req.on("end", () => {
  //       data.message = body;
  //       res.writeHead(200, headers);
  //       res.end(`받은 POST 데이터: ${body}`);
  //     });
  data.message = req.body;
  return res.send(`받은 POST 데이터: ${req.body}`);
});

app.put("/", (req, res) => {
  //     let body = "";
  //     req.on("data", (chunk) => {
  //       body += chunk.toString();
  //     });

  //     req.on("end", () => {
  //       data.message = body;
  //       res.writeHead(200, headers);
  //       res.end(`업데이트된 데이터: ${body}`);
  //     });
  data.message = req.body;
  return res.send(`업데이트된 데이터: ${req.body}`);
});

app.delete("/", (req, res) => {
  data = {};
  res.send("데이터가 삭제되었습니다.");
});
app.listen(3000, () => {
  console.log("서버가 http://localhost:3000/ 에서 실행 중입니다.");
});
