import { err, ok, Result, ResultAsync } from "neverthrow";

type E = "Division by zero error";

const safeDivide = (a: number, b: number): Result<number, E> =>
  b === 0 ? err("Division by zero error") : ok(a / b);

const asyncDivide = async (a: number, b: number): Promise<number> => {
  await new Promise((resolve) => setTimeout(resolve, 1));
  return a / b;
};

const asyncSafeDivide = async (
  a: number,
  b: number
): Promise<Result<number, E>> => {
  await new Promise((resolve) => setTimeout(resolve, 1));
  return safeDivide(a, b);
};

const asyncSafeDivide2 = (a: number, b: number): ResultAsync<number, E> =>
  new ResultAsync(asyncSafeDivide(a, b));

// eslint-disable-next-line neverthrow/must-use-result
safeDivide(6, 0);

// eslint-disable-next-line @typescript-eslint/no-floating-promises
asyncDivide(6, 0);

// FIXME: This line should trigger both @typescript-eslint/no-floating-promises and neverthrow/must-use-result
asyncSafeDivide(6, 0);

// FIXME: This line should trigger both @typescript-eslint/no-floating-promises and neverthrow/must-use-result
asyncSafeDivide2(6, 2);
