const prompt = require('prompt-sync')();


function getPassword ( length, upperCase,lowerCase,numbers,specialCharacters) {
    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let lowercase ="abcdefghijklmonpqrstuvwxyz"
    let number = 1234567890
    let specialCharacter = "!@#$%^&*()_+{}:<>?[]";
    let character = ''
    let passWord = ""

   if(userupperCase === upperCase && lowerCase === lowerCase){
       console.log(upperCase);
   }

}

passwordLength = parseInt(prompt('Enter password length: '))
        if(passwordLength < 4 || isNaN(passwordLength)) {
            console.log('Password length must be at least 4 characters');
        }
    userupperCase = (prompt('Include uppercase letters (y,n): '))
    userlowerCase = (prompt('Include lowercase letters (y,n): '))
    usernumbers = (prompt('Include numbers (y,n): '))
    userspecialCharacters = (prompt('Include special characters (y,n): '))
console.log(getPassword());

