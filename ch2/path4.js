const a = "/documents/mokshang/../moksh/jesus.txt";
const b = "/documents/moksh/jesus.txt";

console.log(path.normalize(a)); // "/documents/moksh/jesus.txt"
console.log(path.normalize(b)); // "/documents/moksh/jesus.txt"

if (path.normalize(a) === path.normalize(b)) {
  console.log("Normalized → Same path");
} else {
  console.log("Different paths");
}