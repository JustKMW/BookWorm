
var password = document.getElementById("psw");
var repeat = document.getElementById("psw-repeat")
var lower = document.getElementById("lower");
var upper = document.getElementById("upper");
var number = document.getElementById("number");
var length = document.getElementById("length");
var username = document.getElementById("username");
var uEmail = document.getElementById("uEmail");
//var usersArray=["Name","Email","Pass","Name2","Email2","Pass2"]
//var usersArray = ["Admin0", "admin0@gmail.com","Admin42069"];
var usersArray = JSON.parse(localStorage.getItem('usersArray'));

//set userArray if empty
if (usersArray == null) {
  usersArray = ["Admin0", "admin0@gmail.com", "Admin42069"];
}

username.onkeyup = function nameLength() {
  if (username.value.length > 20) {
    document.getElementById("uname_msg").style.display = "block";
  } else {
    document.getElementById("uname_msg").style.display = "none";
  }
}


//Add new user
function emailExist(email) {
  return email == uEmail.value;
}

uEmail.onfocus = function checkEmail() {
  if (uEmail.value == usersArray.find(emailExist)) {
    document.getElementById("email_msg").style.display = "block";
    document.getElementById("signupbtn").disabled = true;
  } else {
    document.getElementById("email_msg").style.display = "none";
    document.getElementById("signupbtn").disabled = false;
  }
}
uEmail.onblur = function checkEmail() {
  if (uEmail.value == usersArray.find(emailExist)) {
    document.getElementById("email_msg").style.display = "block";
    document.getElementById("signupbtn").disabled = true;
  } else {
    document.getElementById("email_msg").style.display = "none";
    document.getElementById("signupbtn").disabled = false;
  }
}
uEmail.onkeyup = function checkEmail() {
  if (uEmail.value == usersArray.find(emailExist)) {
    document.getElementById("email_msg").style.display = "block";
    document.getElementById("signupbtn").disabled = true;
  } else {
    document.getElementById("email_msg").style.display = "none";
    document.getElementById("signupbtn").disabled = false;
  }
}

//Confirming password
repeat.onfocus = function confirm() {
  if (password.value != repeat.value) {
    document.getElementById("repeat_msg").style.display = "block";
    document.getElementById("signupbtn").disabled = true;
  } else {
    document.getElementById("repeat_msg").style.display = "none";
    document.getElementById("signupbtn").disabled = false;
  }

}
repeat.onblur = function confirm() {
  if (password.value != repeat.value) {
    document.getElementById("repeat_msg").style.display = "block";
    document.getElementById("signupbtn").disabled = true;
  } else {
    document.getElementById("repeat_msg").style.display = "none";
    document.getElementById("signupbtn").disabled = false;
  }
}
repeat.onkeyup = function confirm() {
  if (password.value != repeat.value) {
    document.getElementById("repeat_msg").style.display = "block";
    document.getElementById("signupbtn").disabled = true;
  } else {
    document.getElementById("repeat_msg").style.display = "none";
    document.getElementById("signupbtn").disabled = false;
  }
}


//Password validation prompt
password.onfocus = function password() {
  document.getElementById("psw_message").style.display = "block";
}

password.onblur = function password() {
  document.getElementById("psw_message").style.display = "none";
}

password.onkeyup = function pswValidatePrompt() {
  // Validate lowercase lowers
  var lowerCaselowers = /[a-z]/g;
  if (password.value.match(lowerCaselowers)) {
    lower.classList.remove("invalid");
    lower.classList.add("valid");
  } else {
    lower.classList.remove("valid");
    lower.classList.add("invalid");
  }

  // Validate upper lowers
  var upperCaselowers = /[A-Z]/g;
  if (password.value.match(upperCaselowers)) {
    upper.classList.remove("invalid");
    upper.classList.add("valid");
  } else {
    upper.classList.remove("valid");
    upper.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if (password.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if (password.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}


//prompt success n save user data for this session
function signUpSubmit() {
  // var uArray = [];
  // uArray.push(usersArray, username.value, uEmail.value, password.value);
  // localStorage.setItem('usersArray',JSON.stringify(uArray));
  usersArray.push(username.value, uEmail.value, password.value);
  localStorage.setItem('usersArray', JSON.stringify(usersArray));
  alert("Congrats! Your Sign Up is Successful!");
  //alert(uArray);
}


