document.getElementById("title").innerText = "Point and click adventure game"

//Game windows reference
const gameWindow = document.getElementById("gameWindow");

//Game stats
gamestate = {
    "door2locked": true,
};

//Main Character Reference
const mainCharacter = document.getElementById("mainCharacter");
const offsetCharacter = 16;

//Inventory
const inventoryBox = document.getElementById("inventoryBox");
const inventoryList = document.getElementById("inventoryList");

//Foreground items
const door1 = document.getElementById("door1");

gameWindow.onclick = function (e) {
    var rect = gameWindow.getBoundingClientRect();
    var X = e.clientX - rect.left;
    var Y = e.clientY - rect.top;
    console.log(e.target.id);
    mainCharacter.style.left = X - offsetCharacter + "px";
    mainCharacter.style.top = Y - offsetCharacter + "px";

    switch (e.target.id) {

        case "door1":
            mainCharacter.style.backgroundColor = "#FF0000"
            door1.style.opacity = 0.5;
            if (document.getElementById("key1") !== null) {
                console.log("found key")
                document.getElementById('key1').remove()
                const keyElement = document.createElement('LI');
                keyElement.id = "Inv-key";
                keyElement.innerText = "key";
                inventoryList.appendChild(keyElement);
            }
            break;

            case "door2":
                // check if we have key
                if(gamestate.door2locked == true){
                if(document.getElementById("Inv-key") !== null){
                    //yes -> unlock door
                    gamestate.door2locked = false;
                    console.log("Door unlocked")
                }else{
                        //no -> alert 'door locked'
                        alert("Door is locked");
                    }
                }else{
                    console.log("Enter Building")
                }
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