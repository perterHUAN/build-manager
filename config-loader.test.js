import ConfigLoader from "./config-loader.js";
import { test } from "node:test";
import assert from "node:assert";

const loader = new ConfigLoader("./three-simple-rules.yml");
loader.loadConfig();
const expectedConfig = [
  {
    target: "A",
    depends: ["B", "C"],
    recipes: ["update A from B and C"],
  },
  { target: "B", depends: ["C"], recipes: ["update B from C"] },
  { target: "C", depends: [], recipes: [] },
];

test(`the dependency graph should be ${JSON.stringify(expectedConfig)}`, () => {
  assert.deepEqual(loader.config, expectedConfig);
});
