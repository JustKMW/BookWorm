var username = document.getElementById("username");
var uEmail = document.getElementById("uEmail");

var usersArray = JSON.parse(localStorage.getItem('usersArray'));
var currentUser = JSON.parse(sessionStorage.getItem('currentUser'))

username.value = currentUser;

for (var i = 0; i < usersArray.length; i++) {
    if (currentUser == usersArray[i]) {
        uEmail.value = usersArray[i+1];
    }
}


