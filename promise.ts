import {
  asyncDivide,
  asyncSafeDivide,
  asyncSafeDivide2,
  safeDivide,
} from "./lib.js";

// eslint-disable-next-line neverthrow/must-use-result
safeDivide(6, 0);

// eslint-disable-next-line @typescript-eslint/no-floating-promises
asyncDivide(6, 0);

// eslint-disable-next-line @typescript-eslint/no-floating-promises
asyncSafeDivide(6, 0);

// eslint-disable-next-line neverthrow/must-use-result
await asyncSafeDivide(6, 0);

// eslint-disable-next-line neverthrow/must-use-result
asyncSafeDivide2(6, 2);

// eslint-disable-next-line neverthrow/must-use-result
await asyncSafeDivide2(6, 2);
