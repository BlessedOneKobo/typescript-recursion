export function fibsRec(n: number): number[] {
  if (n < 0) {
    throw new Error("fibs: n cannot be negative");
  }

  if (n === 1) {
    return [0];
  }

  if (n === 2) {
    return [0, 1];
  }

  const prev = fibsRec(n - 1);
  return prev.concat(prev[n - 2] + prev[n - 3]);
}
