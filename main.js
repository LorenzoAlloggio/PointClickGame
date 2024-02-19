document.getElementById("title").innerText = "Point and click adventure game"

//Game windows reference
const gameWindow = document.getElementById("gameWindow");

//Main Character Reference
const mainCharacter = document.getElementById("mainCharacter");
const offsetCharacter = 16;

//Foreground items
const door1 = document.getElementById("door1");

gameWindow.onclick = function(e){
    var rect = gameWindow.getBoundingClientRect();
    var X = e.clientX - rect.left;
    var Y = e.clientY - rect.top;
    console.log(e.target.id);
    mainCharacter.style.left = X - offsetCharacter + "px";
    mainCharacter.style.top = Y - offsetCharacter + "px";

    switch(e.target.id){

        case "key1":
            console.log("found key")
            break;

        case "door1":
            mainCharacter.style.backgroundColor = "#FF0000"
            door1.style.opacity = 0.5;
            break;

            case "sign":
                mainCharacter.style.backgroundColor = "#FF0000"
                door1.style.opacity = 0.5;
                sign.style.opacity = 1;
                break;
            
            default:
                //explode
                mainCharacter.style.backgroundColor = "#0084ff";
        door1.style.opacity = 1;
        sign.style.opacity = 1;
                break;
    }
}