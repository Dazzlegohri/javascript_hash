const hello = new Set(["abc", "xyz"]);

for (let i of hello) {
  console.log(hello);
}

function getMaskString(originalWord, guessedLetters) {
  guessedLetters = guessedLetters.map((letter) => letter.toUpperCase());
  console.log(guessedLetters);

  const guessedLettersSet = new Set(guessedLetters);
  const result = originalWord
    .toUpperCase()
    .split("")
    .map((char) => {
      if (guessedLettersSet.has(char)) {
        return char;
      } else {
        return "_";
      }
    });

  console.log(result);
}

getMaskString("humble", ["h", "m", "k"]);

const arr = [2, 4, 6, 8, 10];
console.log(arr.findIndex((char) => char >= 3));
