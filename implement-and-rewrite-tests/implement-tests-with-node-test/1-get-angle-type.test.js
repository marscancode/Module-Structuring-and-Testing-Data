import assert from "node:assert";
import test from "node:test";

import { getAngleType } from "../implement/1-get-angle-type.js";

// TODO: Write tests to cover all cases, including boundary and invalid cases.
// Example: Identify Right Angles

test("Classifies right angles", () => {
  const right = getAngleType(90);
  assert.equal(right, "Right angle");
});

test("Classifies acute angle", () => {
  const thirty = getAngleType(30);
  assert.equal(thirty, "Acute angle");

  const eightyNine = getAngleType(89);
  assert.equal(eightyNine, "Acute angle");

  const fortyFive = getAngleType(45);
  assert.equal(fortyFive, "Acute angle");
});

test("Classifies obtuse angles", () => {
  const obtuse = getAngleType(91);
  assert.equal(obtuse, "Obtuse angle");

  const oneHundredAndSeventyNine = getAngleType(179);
  assert.equal(oneHundredAndSeventyNine, "Obtuse angle");

  const oneHundredAndTen = getAngleType(110);
  assert.equal(oneHundredAndTen, "Obtuse angle");
});

test("Classifies straight angle", () => {
  const straightAngle = getAngleType(180);
  assert.equal(straightAngle, "Straight angle");
});

test("Classifies reflex angles", () => {
  const reflexAngle = getAngleType(181);
  assert.equal(reflexAngle, "Reflex angle");
  const threeHundredAndFiftyNine = getAngleType(359);
  assert.equal(threeHundredAndFiftyNine, "Reflex angle");
  const twoHundredAndFifty = getAngleType(250);
  assert.equal(twoHundredAndFifty, "Reflex angle");
});

test("Classifies invalid angles", () => {
  const invalidAngle = getAngleType(-1);
  assert.equal(invalidAngle, "Invalid angle");

  const zero = getAngleType(0);
  assert.equal(zero, "Invalid angle");

  const fiveHundred = getAngleType(500);
  assert.equal(fiveHundred, "Invalid angle");

  const threeHundredAndSixty = getAngleType(360);
  assert.equal(threeHundredAndSixty, "Invalid angle");
});
