const express = require("express");
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const csv = require("fast-csv");
const app = express();
const port = 3000;
const upload = multer({ dest: "uploads/" }).single("file");
const {
  echoHelper,
  invertHelper,
  flateenHelper,
  sumHelper,
  multiplyHelper,
  readAndReturn,
} = require("./helper");
app.use(upload);
app.post("/echo", async (req, res, next) => {
  try {
    const { filename } = req.file;
    const matrix = await readAndReturn(filename);
    const result = echoHelper(matrix);
    res.send(result);
  } catch (err) {
    next(err);
  }
});
app.post("/invert", async (req, res, next) => {
  const { filename } = req.file;
  try {
    const matrix = await readAndReturn(filename);
    const invertedMatrix = invertHelper(matrix);
    res.send(invertedMatrix.map((e) => e.join(",")).join("\n"));
  } catch (err) {
    next(err);
  }
});
app.post("/flatten", async (req, res) => {
  const { filename } = req.file;
  const matrix = await readAndReturn(filename);
  const result = flateenHelper(matrix);
  res.send(result);
});
app.post("/sum", async (req, res) => {
  const { filename } = req.file;
  const matrix = await readAndReturn(filename);
  const result = sumHelper(matrix);
  res.send(result.toString());
});
app.post("/multiply", async (req, res) => {
  const { filename } = req.file;
  const matrix = await readAndReturn(filename);
  const result = multiplyHelper(matrix);
  res.send(result.toString());
});

app.listen(port, () => {
  console.log("Server launched");
});
