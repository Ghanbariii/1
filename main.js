const array = ["a","a","b","c","a","a","c","c","b","b","k","k","k","l","l"];
let count = array.reduce((prevData, arrayItem) => {
    prevData[arrayItem] = (prevData[arrayItem] || 0) + 1;
    return prevData;
}, {});

console.log(count);