function isJavaScriptFile(file) {
  if ("string" == typeof file) {
    const fileName = file.split(".");
    if (fileName[fileName.length - 1] === "js") {
      return true;
    } else {
      return false;
    }
  } else {
    return `please provide a string`;
  }
}

console.log(isJavaScriptFile("app.js"));
console.log(isJavaScriptFile("js.png"));
console.log(isJavaScriptFile("image.js.png"));
console.log(isJavaScriptFile("image.jpg.js"));
console.log(isJavaScriptFile(56));
