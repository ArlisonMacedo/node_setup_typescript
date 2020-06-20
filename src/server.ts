import express from "express";
import { UserControlller } from "@controllers/UserControllers";
const app = express();

app.get("/", (request, response) => {
  return response.json({
    message: "Hello World",
  });
});

app.get("/users", (request, response) => {
  return response.send("My Eggs");
});

app.listen(3333);
