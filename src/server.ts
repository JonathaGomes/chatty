import express from "express";

const app = express();

app.get("/", (request, response) => {
  response.json({
    "message": "Olá nlw"
  });
});

app.post("/users", (request, response) => {
  return response.json({ 
    "message": "Usuário salvo com sucesso"
  });
});

app.listen(3000, () => console.log("Server started on port 3000"));