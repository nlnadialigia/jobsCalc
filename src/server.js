import express from "express";
import path from "path";

const server = express();
const __dirname = path.resolve(path.dirname(""));

server.use(express.static("public"));

server.get("/", (request, response) => {
  return response.sendFile(`${__dirname}/views/index.html`);
});

server.listen(5010, () => console.log("Server is running!"));
