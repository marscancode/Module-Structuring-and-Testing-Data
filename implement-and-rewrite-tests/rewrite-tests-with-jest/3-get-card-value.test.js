import { getCardValue } from "../implement/3-get-card-value.js";

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
});

describe("Returns numeric value when given cards ranked (2-10)", () => {
  test("Returns 2 when given a card with rank 2", () => {
    expect(getCardValue("2♥")).toEqual(2);
  });

  test("Returns 3 when given a card with rank 3", () => {
    expect(getCardValue("3♣")).toEqual(3);
  });

  test("Returns 4 when given a card with rank 4", () => {
    expect(getCardValue("4♦")).toEqual(4);
  });

  test("Returns 5 when given a card with rank 5", () => {
    expect(getCardValue("5♣")).toEqual(5);
  });

  test("Returns 6 when given a card with rank 6", () => {
    expect(getCardValue("6♦")).toEqual(6);
  });

  test("Returns 7 when given a card with rank 7", () => {
    expect(getCardValue("7♠")).toEqual(7);
  });

  test("Returns 8 when given a card with rank eight", () => {
    expect(getCardValue("8♥")).toEqual(8);
  });

  test("Returns 9 when given a nine card", () => {
    expect(getCardValue("9♠")).toEqual(9);
  });

  test("Returns 10 when given a ten card", () => {
    expect(getCardValue("10♣")).toEqual(10);
  });
});

describe("Returns 10 when given (Q,J or K) cards", () => {
  test("Returns 10 when given a Q card", () => {
    expect(getCardValue("Q♥")).toEqual(10);
  });

  test("Returns 10 when given a J card", () => {
    expect(getCardValue("J♣")).toEqual(10);
  });

  test("Returns 10 when given a K card", () => {
    expect(getCardValue("K♠")).toEqual(10);
  });
});

describe("Invalid Cards", () => {
  test("Throws an error when given an empty string", () => {
    expect(() => getCardValue("")).toThrow(
      'Expected a valid number followed by a suit, but got ""'
    );
  });
  test("Arbitrary non-card string", () => {
    expect(() => getCardValue("invalid")).toThrow(
      'Expected a valid number followed by a suit, but got "invalid"'
    );
  });

  test("Invalid card rank with no suit", () => {
    expect(() => getCardValue("15")).toThrow(
      'Expected a valid number followed by a suit, but got "15"'
    );
  });

  test("A valid card rank but invalid suit", () => {
    expect(() => getCardValue("8Z")).toThrow(
      'Expected a valid number followed by a suit, but got "8Z"'
    );
  });

  test("A valid suit but invalid card rank", () => {
    expect(() => getCardValue("26♣")).toThrow(
      'Expected a valid number followed by a suit, but got "26♣"'
    );
  });

  test("Rank and suit with an extra letter", () => {
    expect(() => getCardValue("5♣l")).toThrow(
      'Expected a valid number followed by a suit, but got "5♣l"'
    );
  });

  test("Two suits", () => {
    expect(() => getCardValue("♣♠")).toThrow(
      'Expected a valid number followed by a suit, but got "♣♠"'
    );
  });

  test("A negative rank but valid suit", () => {
    expect(() => getCardValue("-4♣")).toThrow(
      'Expected a valid number followed by a suit, but got "-4♣"'
    );
  });

  test("Invalid rank 0 but valid suit", () => {
    expect(() => getCardValue("0♥")).toThrow(
      'Expected a valid number followed by a suit, but got "0♥"'
    );
  });
});

// Suggestion: Group the remaining test data into these categories:
//   Number Cards (2-10)
//   Face Cards (J, Q, K)
//   Invalid Cards

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror
