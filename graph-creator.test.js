import GraphCreator from "./graph-creator.js";
import { describe, test } from "node:test";
import assert from "node:assert";

describe("GraphCrator", () => {
  const g = new GraphCreator("./three-simple-rules.yml");
  test("loadConfig method should create a object based on config file", () => {
    g.loadConfig();
    const expectedConfig = [
      {
        target: "A",
        depends: ["B", "C"],
        recipes: ["update A from B and C"],
      },
      { target: "B", depends: ["C"], recipes: ["update B from C"] },
      { target: "C", depends: [], recipes: [] },
    ];
    assert.deepEqual(g.config, expectedConfig);
  });
  test("buildGraph method should create a graph based on config", () => {
    g.buildGraph();
    assert.deepEqual(g.graph.nodes(), ["A", "B", "C"]);
    assert.deepEqual(g.graph.edges(), [
      { v: "B", w: "A" },
      { v: "C", w: "A" },
      { v: "C", w: "B" },
    ]);
  });
  test("checkCycles method should check if the graph has a cycles", () => {
    g.checkCycles();
  });
});
