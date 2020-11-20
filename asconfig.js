const { compile } = require("near-sdk-as/compiler");

compile(
  "./contract.ts", "",
  [
    "--runPasses", "inlining-optimizing,dce",
    "--binaryFile", "./contract.wasm",
    "--measure",
  ],
  { verbose: false }
);