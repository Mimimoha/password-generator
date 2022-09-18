// Assignment Code
var generateBtn = document.querySelector("#generate");


// password of 8 to 128 characters with option of lowercase, uppercase, numeric, and/or special characters

// ask the user how many characters should be in the password
function howManyCharacters() {
  numOfCharacters = parseInt( prompt("How many characters?") );
if (howManyCharacters < 8 || howManyCharacters > 128) { 
alert( "your password must be between 8 to 128 characters, please try again");
}
}

// ask user if they want numaric in their password
function numeric(min,max){
  usenumeric = confirm( "do you want numaric in your password?")
  if (numeric) {
  confirm === usenumeric};
  console.log(usenumeric)
}

// ask the user if they want lower case letters in the password
function useLowerCase(){
  useLowerCaseLtrs = confirm("Do you want lower case letters in the password?");
  if (useLowerCase) {
  confirm === useLowerCaseLtrs}
  console.log(useLowerCaseLtrs)
}
 
// ask user if they want uppercase letters in the password 
function useUpperCase(){
  useUpperCaseltrs = confirm("Do you want uppercase letter in the password?");
  if (useUpperCase) {
  confirm === useUpperCaseltrs;}
  console.log(useUpperCaseltrs)
}
// as user if the want special characters added in their password

function specialchatacters(){
  specialchatactersadded = confirm ("Do you want special characters added to your password?")
  if (specialchatacters) {
  confirm === specialchatactersadded;
 } 
  console.log(specialchatactersadded)
}
function generatePassword() {
  var characters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 20;
  var password = "";
for (var i = 0; i <= passwordLength; i++) {
 var randomNumber = Math.floor(Math.random() * characters.length);
 password += characters.substring(randomNumber, randomNumber +1);
}
}
 function generatePassword() {
  console.log("start here");
  howManyCharacters();
  useLowerCase();
  useUpperCase();
  numeric();
  specialchatacters();

return "final password"
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
