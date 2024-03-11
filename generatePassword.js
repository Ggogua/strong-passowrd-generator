const fs = require("fs");
const readline = require("readline");

function generateStrongPassword(length) {
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialCharacters = "!@#$%^&*()_-+=<>?/{}[]";
  const allCharacters =
    uppercaseLetters + lowercaseLetters + numbers + specialCharacters;

  let password = "";
  password += getRandomCharacter(uppercaseLetters);
  password += getRandomCharacter(lowercaseLetters);
  password += getRandomCharacter(numbers);
  password += getRandomCharacter(specialCharacters);

  for (let i = password.length; i < length; i++) {
    password += getRandomCharacter(allCharacters);
  }

  password = password
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");

  return password;
}

function getRandomCharacter(characterSet) {
  const randomIndex = Math.floor(Math.random() * characterSet.length);
  return characterSet[randomIndex];
}

function getPasswordLength() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question("Enter password length: ", (length) => {
      rl.close();
      resolve(parseInt(length, 10) || 12);
    });
  });
}

function savePassword(password) {
  const filePath = "../Password/password.txt";
  const data = `${password}\n`;

  try {
    fs.appendFileSync(filePath, data);
    console.log("Password saved");
  } catch (error) {
    console.error(`Error saving password: ${error.message}`);
  }
}

async function main() {
  const passwordLength = await getPasswordLength();
  const strongPassword = generateStrongPassword(passwordLength);
  savePassword(strongPassword);
}

main();
