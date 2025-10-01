var password = document.getElementById("psw");
var repeat = document.getElementById("psw-repeat")
var lower = document.getElementById("lower");
var upper = document.getElementById("upper");
var number = document.getElementById("number");
var length = document.getElementById("length");
var username = document.getElementById("username");
var uEmail = document.getElementById("uEmail");
var nameMsg = document.getElementById("uname_msg");
var nextbtn = document.getElementById("nextbtn");
var usersArray = JSON.parse(localStorage.getItem('usersArray'));

//set userArray if empty
if (usersArray == null) {
    usersArray = ["Admin0", "admin0@gmail.com", "Admin42069"];
}

function pwForm(){

    for (var i = 0; i < usersArray.length; i++) {
        //alert(usersArray[i]); //to test and check data in the array
        if (username.value == usersArray[i] && uEmail.value == usersArray[i + 1]) {
            document.getElementById("pwForm").removeAttribute("style","display: none");
            document.getElementById("pwForm").setAttribute("style","display: flex");
            document.getElementById("verifyForm").setAttribute("style","display: none");
        } else{document.getElementById("error_msg").style.display = "block";}
    }
}

//Confirming password
repeat.onfocus = function confirm() {
    if (password.value != repeat.value) {
      document.getElementById("repeat_msg").style.display = "block";
      document.getElementById("pw").disabled = true;
    } else {
      document.getElementById("repeat_msg").style.display = "none";
      document.getElementById("pw").disabled = false;
    }
  
  }
  repeat.onblur = function confirm() {
    if (password.value != repeat.value) {
      document.getElementById("repeat_msg").style.display = "block";
      document.getElementById("pw").disabled = true;
    } else {
      document.getElementById("repeat_msg").style.display = "none";
      document.getElementById("pw").disabled = false;
    }
  }
  repeat.onkeyup = function confirm() {
    if (password.value != repeat.value) {
      document.getElementById("repeat_msg").style.display = "block";
      document.getElementById("pw").disabled = true;
    } else {
      document.getElementById("repeat_msg").style.display = "none";
      document.getElementById("pw").disabled = false;
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

function updatePass(){
    for (var i = 0; i < usersArray.length; i++) {
        //alert(usersArray[i]); //to test and check data in the array
        if (username.value == usersArray[i] && uEmail.value == usersArray[i + 1]) {
            usersArray[i+2] = password.value;
            localStorage.setItem('usersArray', JSON.stringify(usersArray));
        }
    }
}





