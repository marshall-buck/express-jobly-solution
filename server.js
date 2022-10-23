"use strict";

const app = require("./app");
const { PORT, DOMAIN } = require("./config");

app.listen(PORT, function () {
  console.log(`Started on http://${DOMAIN}:${PORT}`);
});;
