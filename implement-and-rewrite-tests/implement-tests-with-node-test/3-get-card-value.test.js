import assert from "node:assert";
import test from "node:test";

import { getCardValue } from "../implement/3-get-card-value.js";

// TODO: Write tests to cover all outcomes, including throwing errors for invalid cards.

test("Valid single-digit card", () => {
  assert.equal(getCardValue("9♠"), 9);
});

test("Arbitrary non-card string", () => {
  assert.throws(
    () => getCardValue("invalid"),
    /Expected a valid number followed by a suit, but got "invalid"/,
    "Expected clear error"
  );
});

// TODO: What other invalid card cases can you think of?
test("Invalid card rank with no suit", () => {
  assert.throws(
    () => getCardValue("15"),
    /Expected a valid number followed by a suit, but got "15"/,
    "Expected clear error"
  );
});

test("An empty string", () => {
  assert.throws(
    () => getCardValue(""),
    /Expected a valid number followed by a suit, but got ""/,
    "Expected clear error"
  );
});

test("A valid card rank but invalid suit", () => {
  assert.throws(
    () => getCardValue("8Z"),
    /Expected a valid number followed by a suit, but got "8Z"/,
    "Expected clear error"
  );
});

test("A valid suit but invalid card rank", () => {
  assert.throws(
    () => getCardValue("26♣"),
    /Expected a valid number followed by a suit, but got "26♣"/,
    "Expected clear error"
  );
});

test("Rank and suit with an extra letter", () => {
  assert.throws(
    () => getCardValue("5♣l"),
    /Expected a valid number followed by a suit, but got "5♣l"/,
    "Expected clear error"
  );
});

test("Two suits", () => {
  assert.throws(
    () => getCardValue("♣♠"),
    /Expected a valid number followed by a suit, but got "♣♠"/,
    "Expected clear error"
  );
});

test("A negative rank but valid suit", () => {
  assert.throws(
    () => getCardValue("-4♣"),
    /Expected a valid number followed by a suit, but got "-4♣"/,
    "Expected clear error"
  );
});

test("Invalid rank 0 but valid suit", () => {
  assert.throws(
    () => getCardValue("0♥"),
    /Expected a valid number followed by a suit, but got "0♥"/,
    "Expected clear error"
  );
});
