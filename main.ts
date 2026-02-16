import { safeTry } from "neverthrow";
import "./promise.js";
import { asyncSafeDivide, E, safeDivide } from "./lib.js";

const res = safeTry<number, E>(function* () {
  const a = yield* safeDivide(10, 0);
  const b = yield* safeDivide(20, 5);

  return safeDivide(a, b);
});

if (res.isErr()) {
  console.error(res.error);
} else {
  console.log(res.value);
}

const res2 = await safeTry<number, E>(async function* () {
  const a = yield* await asyncSafeDivide(10, 0);
  const b = yield* await asyncSafeDivide(20, 5);

  return asyncSafeDivide(a, b);
});

if (res2.isErr()) {
  console.error(res2.error);
} else {
  console.log(res2.value);
}
