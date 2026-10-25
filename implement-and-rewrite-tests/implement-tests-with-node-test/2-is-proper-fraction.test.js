import assert from "node:assert";
import test from "node:test";

import { isProperFraction } from "../implement/2-is-proper-fraction.js";

// TODO: Write tests to cover all cases.
// What combinations of numerators and denominators should you test?

test("Basic proper fraction", () => {
  // Example: 1/2 is a proper fraction
  assert.equal(isProperFraction(1, 2), true);
});

test("Proper fraction numerator is 0", () => {
  assert.equal(isProperFraction(0, 1), true);
});

test("Proper fraction with a negative numerator but positive denominator", () => {
  assert.equal(isProperFraction(-2, 3), true);
});
test("Proper fraction with a positive numerator but negative denominator", () => {
  assert.equal(isProperFraction(2, -3), true);
});

test("Proper fraction with both a negative numerator and denominator", () => {
  assert.equal(isProperFraction(-2, -3), true);
});

test("Improper fraction denominator is 0", () => {
  assert.equal(isProperFraction(1, 0), false);
});

test("Improper fraction numerator is larger than denominator", () => {
  assert.equal(isProperFraction(6, 4), false);
});

test("Improper fraction numerator and denominator are the same value", () => {
  assert.equal(isProperFraction(3, 3), false);
});
