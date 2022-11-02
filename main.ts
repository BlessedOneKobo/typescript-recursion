import { fibs } from "./fibs";
import { fibsRec } from "./fibsRec";
import { mergeSort } from "./mergeSort";

console.log("fibs:");
console.log("-----");
console.log("fibs(8):", fibs(8));
console.log("fibs(2):", fibs(2));
console.log("fibs(1):", fibs(1));

console.log("\n");
console.log("fibsRec:");
console.log("--------");
console.log("fibsRec(8):", fibsRec(8));
console.log("fibsRec(2):", fibsRec(2));
console.log("fibsRec(1):", fibsRec(1));

console.log("\n");
console.log("mergeSort:");
console.log("----------");
console.log("before:");
const arr = Array(10)
  .fill(0)
  .map((it) => Math.floor(Math.random() * 10) + 1);
console.log(arr);
console.log("after:");
console.log(mergeSort(arr));
