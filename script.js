// Assignment Code
var generateBtn = document.querySelector("#generate");
var numOfCharacters = 0 
var option = []
finalpassword = []
var numbers = ["0", "1","2", "3", "4"]
var lowercase = ["a", "b", "c"]
var uppercase = ["A","B","C"]
var special = ["!","@","#"]

// password of 8 to 128 characters with option of lowercase, uppercase, numeric, and/or special characters
function randomize(array){
  var randomIndex = Math.floor(Math.random()* array.length)
  var indexValue = array[randomIndex]
  return indexValue
}

// ask the user how many characters should be in the password
function howManyCharacters() {
  numOfCharacters = parseInt( prompt("How many characters?") );
}

// ask user if they want numaric in their password
function numeric(min,max){
  var usenumeric = confirm( "do you want numaric in your password?")
  if ( usenumeric === true ) { 
    option = option.concat(numbers)
    var min=0
    var max = 10
    var random = Math.floor(Math.random() * (max - min + 1) + min)
  }
  console.log(usenumeric)

}

// ask the user if they want lower case letters in the password
function useLowerCase(){
  var useLowerCaseLtrs = confirm("Do you want lower case letters in the password?");
  if (useLowerCaseLtrs) {
   option = option.concat(lowercase)}
  console.log(useLowerCaseLtrs)
}
 
// ask user if they want uppercase letters in the password 
function useUpperCase(){
  var useUpperCaseltrs= confirm("Do you want uppercase letter in the password?");
  if (useUpperCaseltrs) {
  option = option.concat (uppercase) }
  console.log(useUpperCaseltrs)
}
// as user if the want special characters added in their password

function specialchatacters(){
  var specialchatactersadded = confirm ("Do you want special characters added to your password?")
  if (specialchatactersadded) {
 option = option.concat (special)
 } 
  console.log(specialchatactersadded)
}


 function generatePassword() {
  console.log("start here");
  howManyCharacters();
  if (numOfCharacters < 8 || numOfCharacters > 128) { 
    alert( "your password must be between 8 to 128 characters, please try again");
    howManyCharacters();
    } 
  useLowerCase();
  useUpperCase();
  numeric();
  specialchatacters()
 console.log (option)
 for(var i = 0; i < numOfCharacters; i++){
finalpassword.push(randomize(option))
console.log(finalpassword)
 }
return finalpassword.join("")
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// for as many times as numofcharacters
// max = option.length
// max = 0
// var random = // put math here
// password.push(option[random])

