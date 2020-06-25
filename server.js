const express = requiere("express");
const path = requiere("path");
const app = express();

app.use(express.static(__dirname + "/dist/carr-leasing"));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/carr-leasing/index.html"));
});
app.listen(process.env.PORT || 8080);
