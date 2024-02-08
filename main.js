document.getElementById("title").innerText = "Point and click adventure game"

//Game windows reference
const gameWindow = document.getElementById("gameWindow");

//Main Character Reference
const mainCharacter = document.getElementById("mainCharacter");
const offsetCharacter = 16;

gameWindow.onclick = function(e){
    var rect = gameWindow.getBoundingClientRect();
    var X = e.clientX - rect.left;
    var Y = e.clientY - rect.top;
    console.log(e.target.id);
    mainCharacter.style.left = X - offsetCharacter + "px";
    mainCharacter.style.top = Y - offsetCharacter + "px";

    if(e.target.id == "door1"){
        console.log("Open door.");
    }
}