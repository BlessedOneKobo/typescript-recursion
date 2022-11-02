export function mergeSort(a: number[]): number[] {
  if (a.length === 1) {
    return a;
  }
  const m = Math.floor(a.length / 2);
  return merge(mergeSort(a.slice(0, m)), mergeSort(a.slice(m)));
}

function merge(a: number[], b: number[]): number[] {
  const c = Array(a.length + b.length);
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < a.length && j < b.length) {
    c[k++] = a[i] < b[j] ? a[i++] : b[j++];
  }

  while (i < a.length) {
    c[k++] = a[i++];
  }

  while (j < b.length) {
    c[k++] = b[j++];
  }

  return c;
}
