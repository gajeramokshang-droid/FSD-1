const path = require("path");

// Example file path
const filePath = "/users/john/documents/test.txt";

// 1. basename → gets the file name
console.log("basename:", path.basename(filePath)); 
// → "test.txt"

// 2. dirname → gets the directory name
console.log("dirname:", path.dirname(filePath)); 
// → "/users/john/documents"

// 3. extname → gets the file extension
console.log("extname:", path.extname(filePath)); 
// → ".txt"

// 4. join → safely joins paths (handles slashes automatically)
const joinedPath = path.join("/users", "john", "documents", "notes.txt");
console.log("join:", joinedPath); 
// → "/users/john/documents/notes.txt"

// 5. resolve → gives absolute path from segments
const resolvedPath = path.resolve("notes.txt");
console.log("resolve:", resolvedPath); 
// → absolute path like "/home/youruser/notes.txt"

// 6. normalize → cleans up redundant slashes or dots
const messyPath = "/users/john//documents/../notes.txt";
console.log("normalize:", path.normalize(messyPath)); 
// → "/users/john/notes.txt"

// 7. parse → breaks a path into parts
const parsed = path.parse(filePath);
console.log("parse:", parsed);
/*
{
  root: '/',
  dir: '/users/john/documents',
  base: 'test.txt',
  ext: '.txt',
  name: 'test'
}
*/

// 8. format → builds a path back from an object
const formatted = path.format({
  dir: "/users/john/documents",
  name: "report",
  ext: ".pdf"
});
console.log("format:", formatted); 
// → "/users/john/documents/report.pdf"

// 9. delimiter → platform-specific path separator
console.log("delimiter:", path.delimiter); 
// → ":" on POSIX, ";" on Windows

// 10. sep → platform-specific directory separator
console.log("sep:", path.sep); 
// → "/" on POSIX, "\" on Windows

