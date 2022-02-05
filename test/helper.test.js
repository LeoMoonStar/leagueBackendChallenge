var assert = require("assert");
const {
  echoHelper,
  invertHelper,
  flateenHelper,
  sumHelper,
  multiplyHelper,
  readAndReturn,
} = require("../helper");

const input = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
];

describe("helper", function () {
  describe("echo", function () {
    it("return the exact matrix", function () {
      const echoResult = echoHelper(input);
      const expectedResult = "1,2,3\n4,5,6\n7,8,9";
      assert.equal(echoResult, expectedResult);
    });
  });
  describe("Flatten", function () {
    it("Flatten the matrix", function () {
      const flatResult = flateenHelper(input);
      const expectedResult = "1,2,3,4,5,6,7,8,9";
      assert.equal(flatResult, expectedResult);
    });
  });
  describe("Sum", function () {
    it("return the exact Sum", function () {
      const sumResult = sumHelper(input);
      const expectedResult = 45;
      assert.equal(sumResult, expectedResult);
    });
  });
  describe("Multiply", function () {
    it("return the exact multiply result", function () {
      const multiplyResult = multiplyHelper(input);
      const expectedResult = 362880;
      assert.equal(multiplyResult, expectedResult);
    });
  });
  describe("Invert", function () {
    it("Invert the exact matrix", function () {
      const invertResult = invertHelper(input);
      const expectedResult = [
        ["1", "4", "7"],
        ["2", "5", "8"],
        ["3", "6", "9"],
      ]
        .map((e) => e.join(","))
        .join("\n");
      assert.equal(
        invertResult.map((e) => e.join(",")).join("\n"),
        expectedResult
      );
    });
  });
});
