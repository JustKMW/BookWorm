var uFeedback = document.getElementById("userFeedback");
var currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
var i = 3;

document.getElementById("uName").innerHTML = "USERNAME: " + currentUser;

function clearTXT(){
    uFeedback.value = "";
}

function addFeedback(){
    let feedbackDetailsHTML = document.querySelector('.feedDetails');

    if (document.getElementById("1s").checked == true){
        var rating = `<label class="stars"><input type="radio" name="star${i}" value="1" checked disabled/></label>
        <label class="stars"><input type="radio" name="star${i}" value="2" disabled/></label>
        <label class="stars"><input type="radio" name="star${i}" value="3" disabled/></label>
        <label class="stars"><input type="radio" name="star${i}" value="4" disabled/></label>
        <label class="stars"><input type="radio" name="star${i}" value="5" disabled/></label>`;
    } else if (document.getElementById("2s").checked == true) {
        var rating = `<label class="stars"><input type="radio" name="star${i}" value="1" disabled/></label>
        <label class="stars"><input type="radio" name="star${i}" value="2" checked disabled/></label>
        <label class="stars"><input type="radio" name="star${i}" value="3" disabled/></label>
        <label class="stars"><input type="radio" name="star${i}" value="4" disabled/></label>
        <label class="stars"><input type="radio" name="star${i}" value="5" disabled/></label>`;
    } else if (document.getElementById("3s").checked == true) {
        var rating = `<label class="stars"><input type="radio" name="star${i}" value="1" disabled/></label>
        <label class="stars"><input type="radio" name="star${i}" value="2" disabled/></label>
        <label class="stars"><input type="radio" name="star${i}" value="3" checked disabled/></label>
        <label class="stars"><input type="radio" name="star${i}" value="4" disabled/></label>
        <label class="stars"><input type="radio" name="star${i}" value="5" disabled/></label>`;
    } else if (document.getElementById("4s").checked == true) {
        var rating = `<label class="stars"><input type="radio" name="star${i}" value="1" disabled/></label>
        <label class="stars"><input type="radio" name="star${i}" value="2" disabled/></label>
        <label class="stars"><input type="radio" name="star${i}" value="3" disabled/></label>
        <label class="stars"><input type="radio" name="star${i}" value="4" checked disabled/></label>
        <label class="stars"><input type="radio" name="star${i}" value="5" disabled/></label>`;
    } else {
        var rating = `<label class="stars"><input type="radio" name="star${i}" value="1" disabled/></label>
        <label class="stars"><input type="radio" name="star${i}" value="2" disabled/></label>
        <label class="stars"><input type="radio" name="star${i}" value="3" disabled/></label>
        <label class="stars"><input type="radio" name="star${i}" value="4" disabled/></label>
        <label class="stars"><input type="radio" name="star${i}" value="5" checked disabled/></label>`;
    }
    
    ++i;
    
    var newFeedback = document.createElement('div');
    newFeedback.classList.add("custFeed");
    
    newFeedback.innerHTML = `<h3>${currentUser}</h3>
    <p>${uFeedback.value}</p>
    <div class="rating">
        <p><b>Service Rating &nbsp;</b></p>
        ${rating}
    </div>`;
    
    feedbackDetailsHTML.appendChild(newFeedback);
    alert(currentUser + ", Your Feedback Has Been Added");
}





