// - Write a function that checks if two paths point to the same file (after normalization) explain with example
const path=require("path");
const p1="/documents/mokshang/jesus.txt";
const p2="/documents/moksh/user/jesus.txt"

const n1=path.normalize(p1);
const n2=path.normalize(p2);

if (n1 == n2) {
  console.log("Normalized → Same path");
} else {
  console.log("Different paths");
}

// - Both paths are already clean (no redundant slashes, no . or .. segments).
// - path.normalize() only fixes messy paths. Since these are already valid, normalization doesn’t change them.
// - That’s why the comparison gives "Different paths".
