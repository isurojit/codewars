"use strict";

// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:
// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.
// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.
// For example, decode("h3 th2r2") would return "hi there".
// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.
var encode = function encode(string) {
  var newStringArray = [];
  string.split("").forEach(function (ele) {
    if (ele.toLowerCase() === "a") {
      newStringArray.push("1");
    } else if (ele.toLowerCase() === "e") {
      newStringArray.push("2");
    } else if (ele.toLowerCase() === "i") {
      newStringArray.push("3");
    } else if (ele.toLowerCase() === "o") {
      newStringArray.push("4");
    } else if (ele.toLowerCase() === "u") {
      newStringArray.push("5");
    } else {
      newStringArray.push(ele);
    }
  });
  return newStringArray.join("");
};

var decode = function decode(string) {
  var newStringArray = [];
  string.split("").forEach(function (ele) {
    if (ele.toLowerCase() === "1") {
      newStringArray.push("a");
    } else if (ele.toLowerCase() === "2") {
      newStringArray.push("e");
    } else if (ele.toLowerCase() === "3") {
      newStringArray.push("i");
    } else if (ele.toLowerCase() === "4") {
      newStringArray.push("o");
    } else if (ele.toLowerCase() === "5") {
      newStringArray.push("u");
    } else {
      newStringArray.push(ele);
    }
  });
  return newStringArray.join("");
};

console.log(decode("h2ll4"));