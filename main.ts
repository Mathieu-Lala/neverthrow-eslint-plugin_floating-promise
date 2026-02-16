import { safeTry } from "neverthrow";
import "./promise.js";
import { E, safeDivide } from "./lib.js";

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
