
const storyBTN = document.getElementById("oStory");
const philosophyBTN = document.getElementById("oPhilosophy");
const promiseBTN = document.getElementById("oPromise");
var content = 0;
const story = document.getElementById("story");
const philosophy = document.getElementById("philosophy");
const promise = document.getElementById("promise");

function showStory(){
    //change any other active btn back to inactive
    philosophyBTN.classList.add("inactiveBTN");
    philosophyBTN.classList.remove("activeBTN");
    promiseBTN.classList.add("inactiveBTN");
    promiseBTN.classList.remove("activeBTN");
    //set this btn to active
    storyBTN.classList.add("activeBTN");
    storyBTN.classList.remove("inactiveBTN");
    //show this hidden content while hiding others
    story.removeAttribute("hidden"); 
    philosophy.setAttribute("hidden", true);
    promise.setAttribute("hidden", true);
}

function showPhilosophy(){
    //change any currently active btn back to inactive
    storyBTN.classList.add("inactiveBTN");
    storyBTN.classList.remove("activeBTN");
    promiseBTN.classList.add("inactiveBTN");
    promiseBTN.classList.remove("activeBTN");
    //set this btn to active
    philosophyBTN.classList.add("activeBTN");
    philosophyBTN.classList.remove("inactiveBTN");
    //show this hidden content while hiding others
    philosophy.removeAttribute("hidden"); 
    story.setAttribute("hidden", true);
    promise.setAttribute("hidden", true);
}

function showPromise(){
    //change any currently active btn back to inactive
    philosophyBTN.classList.add("inactiveBTN");
    philosophyBTN.classList.remove("activeBTN");
    storyBTN.classList.add("inactiveBTN");
    storyBTN.classList.remove("activeBTN");
    //set this btn to active
    promiseBTN.classList.add("activeBTN");
    promiseBTN.classList.remove("inactiveBTN");
    //show this hidden content while hiding others
    promise.removeAttribute("hidden"); 
    philosophy.setAttribute("hidden", true);
    story.setAttribute("hidden", true);
}

// function toggleContent(content){
//     if (content = 1){
//         story.style.display = "block";
//         philosophy.style.display = "none";
//         promise.style.display = "none";
//     } else if (content = 2) {
//         philosophy.style.display = "block";
//         story.style.display = "none";
//         promise.style.display = "none";
//     } else if (content =3) {
//         promise.style.display = "block";
//         philosophy.style.display = "none";
//         story.style.display = "none";
//     }
// }
