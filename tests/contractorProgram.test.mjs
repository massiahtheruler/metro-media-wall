import assert from "node:assert/strict";
import test from "node:test";
import createJiti from "jiti";

const jiti = createJiti(import.meta.url);
const { contractorProgram } = jiti("../lib/contractorProgram.ts");

test("contractorProgram explains the partner value clearly", () => {
  assert.equal(contractorProgram.heading, "Join the Metro installation network");
  assert.ok(contractorProgram.benefits.includes("First look at new unit offers"));
  assert.ok(contractorProgram.benefits.includes("Qualified leads sent directly to you"));
});

test("contractorProgram includes the signup discounts", () => {
  assert.deepEqual(contractorProgram.discounts, [
    { amount: "10% off", label: "Legend Flame fireplaces" },
    {
      amount: "15% off",
      label: "consultations, plans, and drafting services",
    },
  ]);
});

test("contractorProgram includes contest and award hooks", () => {
  assert.deepEqual(contractorProgram.awards, [
    "Best in Show",
    "Most Installed",
    "Highest Rated",
    "Cleanest Finish",
  ]);
});
