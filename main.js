const toggle = document.getElementById("toggleDark");
const body = document.querySelector('body');
const image = document.querySelector("img")
console.log(toggle)

toggle.addEventListener("click" , function(){
    this.classList.toggle("moon")
    if (this.classList.toggle("theme")) {
        image.src = "images/moon.png"
        body.style.background = "#faebd7";
        body.style.color = "black";
        body.style.transition = "1s"
    }else {
        image.src = "images/sun.png"
        body.style.background = "#24252A";
        body.style.color = "white";
        body.style.transition = "1s"  
    }
})