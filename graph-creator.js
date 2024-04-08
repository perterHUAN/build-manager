import assert from "node:assert";
import graphlib from "@dagrejs/graphlib";
import ConfigLoader from "./config-loader.js";

class GraphCreator extends ConfigLoader {
  buildGraph() {
    this.graph = new graphlib.Graph();
    this.config.forEach((rule) => {
      this.graph.setNode(rule.target, {
        recipes: rule.recipes,
      });
      rule.depends.forEach((depend) => {
        this.graph.setEdge(depend, rule.target);
      });
    });
  }
  checkCycles() {
    const cycles = graphlib.alg.findCycles(this.graph);
    assert(cycles.length === 0, `Dependency graph contains cycles ${cycles}`);
  }
}
export default GraphCreator;
