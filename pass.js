const passwordBox = document.getElementById("password");
//12 is the length of the password that will be generated
const length = 15;

// characters generated within the passwords
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "~!@#$%^&*()_+=-{}[]|/?><";

const allChars = upperCase + lowerCase + number + symbol;
//this is how the password is generated
function createPassword() {
  let password = ""; // variable "password" is empty
  //will add a random value from the categories made above in the corisponding place below
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  //when the count it not greater than it will add any randomcharacters
  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  // tagged in the button on the html when the button is clicked a random password is generated in teh password box
  passwordBox.value = password;
}

function copyPasswords() {
  passwordBox.select();
  document.execCommand("copy");
}
