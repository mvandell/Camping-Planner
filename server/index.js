require("dotenv").config();
const app = require("./app");
const ViteExpress = require("vite-express");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is listening at http://localhost:" + PORT);
});