const fs = require("fs");
const path = require("path");
const echoHelper = (matrix) => {
  const n = matrix.length;
  const m = matrix[0].length;
  if (n != m) throw new Error("Matrix dimension does not match");
  return matrix.map((e) => e.join(",")).join("\n");
};
const invertHelper = (matrix) => {
  const n = matrix.length;
  const m = matrix[0].length;
  if (n != m) throw new Error("Matrix dimension does not match");
  for (var i = 0; i < n; i++) {
    for (var j = i; j < n; j++) {
      tem = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = tem;
    }
  }
  return matrix;
};
const flateenHelper = (matrix) => {
  const n = matrix.length;
  const m = matrix[0].length;
  if (n != m) throw new Error("Matrix dimension does not match");
  return matrix.flat().join(",");
};
const sumHelper = (matrix) => {
  const n = matrix.length;
  const m = matrix[0].length;
  if (n != m) throw new Error("Matrix dimension does not match");
  return matrix
    .flat()
    .map((e) => parseInt(e))
    .reduce((p, c) => p + c, 0);
};
const multiplyHelper = (matrix) => {
  const n = matrix.length;
  const m = matrix[0].length;
  if (n != m) throw new Error("Matrix dimension does not match");
  return matrix
    .flat()
    .map((e) => parseInt(e))
    .reduce((p, c) => p * c, 1);
};
const readAndReturn = async (filename) => {
  return new Promise((resolve, reject) => {
    try {
      const data = fs.readFileSync(
        path.resolve(__dirname, "uploads", filename)
      );
      const matrixString = data.toString();
      var matrix = matrixString.split("\n");
      matrix = matrix.map((e) => e.split(","));
      resolve(matrix);
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = {
  echoHelper,
  invertHelper,
  flateenHelper,
  sumHelper,
  multiplyHelper,
  readAndReturn,
};
