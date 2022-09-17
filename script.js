// Assignment Code
var generateBtn = document.querySelector("#generate");
var useLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var length = [26] 
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

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
  var random = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(numeric)
}
  
// ask the user if they want lower case letters in the password
function useLowerCase(useLower){
  useLowerCaseLtrs = confirm("Do you want lower case letters in the password?");
  if (useLowerCase) {
  confirm === useLowerCaseLtrs};
  for(var i=0; i< length; i++){
    useLowerCase += useLower.charAt(Math.floor(Math.random() * 
    length));

  return useLowerCase;
  }
}

// ask user if they want uppercase letters in the password 
function useUpperCase(){
  useUpperCaseltrs = confirm("Do you want uppercase letter in the password?");
  if (useUpperCase) {
  confirm === useUpperCaseltrs;
 } 
 var random = useUpperCase(0, uppercase.length -1)
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
  console.log("start here");
  howManyCharacters();
  useLowerCase();
  useUpperCase();
  numeric(0,100);
  specialchatacters();
  return "finalpassword"
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
