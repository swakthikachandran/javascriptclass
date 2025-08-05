const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function reverseWords(sentence) {
  return sentence.split(" ").reverse().join(" ");
}

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log("Choose an option:");
console.log("1. Reverse words in a sentence");
console.log("2. Remove duplicates from an array");
console.log("3. Count vowels in a string");

rl.question("Enter your choice (1/2/3): ", function (choice) {
  if (choice === "1") {
    rl.question("Enter a sentence: ", function (sentence) {
      console.log("Reversed:", reverseWords(sentence));
      rl.close();
    });
  } else if (choice === "2") {
    rl.question("Enter array elements (comma-separated): ", function (input) {
      const arr = input.split(",").map(item => item.trim());
      console.log("Without duplicates:", removeDuplicates(arr));
      rl.close();
    });
  } else if (choice === "3") {
    rl.question("Enter a string: ", function (str) {
      console.log("Number of vowels:", countVowels(str));
      rl.close();
    });
  } else {
    console.log("Invalid choice!");
    rl.close();
  }
});
