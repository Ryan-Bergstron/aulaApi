const express = require("express");
const app = express();

app.get("/idade/:nome/:idade", (req, res) => {
  const {nome, idade} = req.params
  res.status(200).json ({
    mensagem: `Nome: ${nome}, idade: ${idade}`
  })
});

app.listen(3004, () => {
  console.log("Ryan o servidor está on");
});