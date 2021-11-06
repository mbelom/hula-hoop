var lowerCaseChar = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
//uppcase array
var upperCaseChar = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
// special char array
var specialChar = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Assignment code here
function generatePasswordInfo() {
  var getPasswordLength = parseInt(
    prompt("Choose number of characters for your password.")
  );
  if (getPasswordLength < 8) {
    alert("A minimum number of 8 characters requried.");
    generatePassword();
  }
  if (getPasswordLength > 128) {
    alert("A Maximum number of 128 characters requried.");
    generatePassword();
  }
  if (isNaN(getPasswordLength)) {
    alert("Invalid input. Please insert a number.");
    generatePassword();
  }

  //Confirm including lowercase letters
  var includeLowerCase = window.confirm(
    "Click Ok to include lowercase characters"
  );

  //Confirm including uppercase letter
  var includeUpperCase = window.confirm(
    "click Ok to include uppercase characters"
  );

  //Confirm including numbers
  var includeNumbers = window.confirm("click Ok to include numbers");

  //Confirm including special characters
  var includespecial = window.confirm("click Ok to include special characters");

  if (
    !includeLowerCase &&
    !includeUpperCase &&
    !includeNumbers &&
    !includespecial
  ) {
    alert("Minimum of 1 character type needed.");
    return;
  }

  //stores password Info in object
  var passwordInfo = {
    passwordLength: getPasswordLength,
    includeLowerCase: includeLowerCase,
    includeUpperCase: includeUpperCase,
    includeNumbers: includeNumbers,
    includespecial: includespecial,
  };

  return passwordInfo;
}

// Get a random character from an array
function getRandomChar(arr) {
  var randomChar = Math.floor(Math.random() * arr.length);
  var selectedChar = arr[randomChar];

  return selectedChar;
}

function generatePassword() {
  // passwordInfo object
  var passwordIncludes = generatePasswordInfo();

  //store created password
  var createdPassword = [];

  // Array to store types of characters to include in password
  var availableCharacters = [];

  // adds array of lower characters to array of available characters
  if (passwordIncludes.includeLowerCase) {
    availableCharacters = availableCharacters.concat(lowerCaseChar);
  }

  // adds array of upper characters to array of available characters
  if (passwordIncludes.includeUpperCase) {
    availableCharacters = availableCharacters.concat(upperCaseChar);
  }

  // adds array of numbers to array of available characters
  if (passwordIncludes.includeNumbers) {
    availableCharacters = availableCharacters.concat(numbersChar);
  }

  // adds array of special characters to array of available characters
  if (passwordIncludes.includespecial) {
    availableCharacters = availableCharacters.concat(specialChar);
  }

  // Iterate through the password length, get random index from the array of available characters
  for (var i = 0; i < passwordIncludes.passwordLength; i++) {
    var c = getRandomChar(availableCharacters);

    // add characters to password array
    createdPassword.push(c);
  }

  return createdPassword.join("");
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
