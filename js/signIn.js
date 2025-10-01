var password = document.getElementById("psw");
var uEmail = document.getElementById("uEmail");
var usersArray = JSON.parse(localStorage.getItem('usersArray'));

//set userArray if empty ("Deafult permenant user")
if (usersArray == null) {
    usersArray = ["Admin0", "admin0@gmail.com", "Admin42069"];
}

//check email and password validity
function signInSubmit() {
    for (var i = 0; i < usersArray.length; i++) {
        //alert(usersArray[i]); //to test and check data in the array
        if (uEmail.value == usersArray[i]) {
            if (password.value == usersArray[i + 1]) {
                var currentUser = usersArray[i - 1];
                sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
                document.signIn.submit();
            } else { document.getElementById("signIn_error").style.display = "block"; }
        } else { document.getElementById("signIn_error").style.display = "block"; }
    }
    //localStorage.clear(); //clear local storage if needed during test
    //alert(usersArray); //to check the whole array during testing 
    //alert(currentUser);
}
