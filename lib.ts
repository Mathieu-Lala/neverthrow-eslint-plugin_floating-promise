import { err, ok, Result, ResultAsync } from "neverthrow";

export type E = "Division by zero error";

export const safeDivide = (a: number, b: number): Result<number, E> =>
  b === 0 ? err("Division by zero error") : ok(a / b);

export const asyncDivide = async (a: number, b: number): Promise<number> => {
  await new Promise((resolve) => setTimeout(resolve, 1));
  return a / b;
};

export const asyncSafeDivide = async (
  a: number,
  b: number,
): Promise<Result<number, E>> => {
  await new Promise((resolve) => setTimeout(resolve, 1));
  return safeDivide(a, b);
};

export const asyncSafeDivide2 = (
  a: number,
  b: number,
): ResultAsync<number, E> => new ResultAsync(asyncSafeDivide(a, b));
