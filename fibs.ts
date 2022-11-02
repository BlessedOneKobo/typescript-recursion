export function fibs(n: number): number[] {
  if (n < 0) {
    throw new Error("fibs: n cannot be negative");
  }

  const arr: number[] = [0, 1];

  if (n <= 2) {
    return arr.slice(0, n);
  }

  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr;
}
