import { isProperFraction } from "../implement/2-is-proper-fraction.js";

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

test(`should return false when numerator is larger than denominator`, () => {
  expect(isProperFraction(6, 4)).toEqual(false);
});

test(`should return false when numerator and denominator are the same value`, () => {
  expect(isProperFraction(3, 3)).toEqual(false);
});
test(`should return true when is a proper fraction`, () => {
  expect(isProperFraction(1, 2)).toEqual(true);
});

test(`should return true when numerator is 0`, () => {
  expect(isProperFraction(0, 1)).toEqual(true);
});
