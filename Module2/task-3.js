"use strict";

const findLongestWord = function(string) {
  const words = string.split(" ");
  let theLongest = "";
  for (let word of words) {
    if (theLongest.length < word.length) {
      theLongest = word;
    }
  }
  return theLongest;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
