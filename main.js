document.getElementById("title").innerText = "Point and click adventure game"

//Game windows reference
const gameWindow = document.getElementById("gameWindow");

//Main Character Reference
const mainCharacter = document.getElementById("mainCharacter");

gameWindow.onclick = function(e){
    console.log(e.target.id);
}