// alert("Inner Width: " + window.innerWidth + "px;");
// alert("Inner Height: " + window.innerHeight + "px;");

// 1. Normal usage (most common)
const sum = [1, 2, 3].reduce((a, b) => a + b, 0);

// 2. Using it manually from the prototype
const sum2 = Array.prototype.reduce.call([1, 2, 3], (a, b) => a + b, 0);

const fontFamily = getComputedStyle(document.body).fontFamily;
// alert(fontFamily);