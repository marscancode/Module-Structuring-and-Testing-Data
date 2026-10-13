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
});
test("Classifies straight angle", () => {
  const straightAngle = getAngleType(180);
  assert.equal(straightAngle, "Straight angle");
});

test("Classifies reflex angles", () => {
  const reflexAngle = getAngleType(181);
  assert.equal(reflexAngle, "Reflex angle");
});

test("Classifies invalid angles", () => {
  const invalidAngle = getAngleType(-1);
  assert.equal(invalidAngle, "Invalid angle");
});
