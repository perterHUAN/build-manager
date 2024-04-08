import assert from "node:assert";

class SkeletonBuilder {
  constructor(configFile) {
    this.configFile = configFile;
  }
  build() {
    this.loadConfig();
    this.buildGraph();
    this.checkCycles();
    this.run();
  }
  loadConfig() {
    // assert, an alias of assert.ok
    assert(false, "not implemented");
  }
  buildGraph() {
    assert(false, "not implemented");
  }
  checkCycles() {
    assert(false, "not implemented");
  }
  run() {
    assert(false, "not implemented");
  }
}

export default SkeletonBuilder;
