const change = document.getElementById("imageName");
change.addEventListener("focus", (event) =>{
    event.target.style.background = "red";
    event.target.style.color = "white";
})
