document.getElementById("title").innerText = "Point and Click Adventure game";
//game window reference
const gameWindow = document.getElementById("gameWindow");
 
//Game state
let gameState = {
    "door2locked": true,
    "inventory": [
        "banana",
        "Apple"
    ]
 
}
 
//Main Character
const mainCharacter = document.getElementById("mainCharacter");
const offsetCharacter = 16;
 
//Inventory
const inventoryBox = document.getElementById("inventoryBox")
const inventoryList = document.getElementById("inventoryList")
 
//Foreground items
const door1 = document.getElementById("door1");
const sign = document.getElementById("sign");
 
updateInventory(gameState.inventory, inventoryList);
 
 
gameWindow.onclick = function (e) {
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    console.log(e.target.id);
    mainCharacter.style.left = x - offsetCharacter + "px";
    mainCharacter.style.top = y - offsetCharacter + "px";
 
 
    switch (e.target.id) {
        case "door1":
 
            mainCharacter.style.backgroundColor = "#FFFF00";
            door1.style.opacity = 0.5;
            sign.style.opacity = 1;
 
            if (document.getElementById("key1") !== null) {
                console.log("Found Key!");
                document.getElementById("key1").remove();
                changeInventory('Key', 'add');
 
 
            } break;
 
        case "door2":
            if (gameState.door2locked == true) {
                //check wether we have key
                if (document.getElementById("inv-Key") !== null) {
                    //yes -> unlock door?
                    gameState.door2locked = false;
                    changeInventory('Key', 'delete');
                    console.log("Door is now open.");
 
                } else {
                    //no -> alert 'door locked'
                    alert('Door is locked');
                }
            } else {
                console.log('Enter building');
            }
 
            break;
 
 
 
        case "sign":
 
            mainCharacter.style.backgroundColor = "#00FF00";
            sign.style.opacity = 0.5;
            door1.style.opacity = 1;
 
            break;
 
        default:
            //explode
            mainCharacter.style.backgroundColor = "#7FFFD4"
            door1.style.opacity = 1;
            sign.style.opacity = 1;
            break;
 
    }
 
    updateInventory(gameState.inventory, inventoryList);
 
 
}
 
/**
 * function to change inventory
 * @param {string} itemName
 * @param {string} action
 * @returns
 */
function changeInventory(itemName, action) {
    if (itemName == null || action == null) {
        console.log("Wrong parameters given to changeInventory");
        return
    }
 
    switch (action) {
        case 'add':
            gameState.inventory.push(itemName);
 
            break;
 
        case 'delete':
            gameState.inventory.find(function (item, index) {
                if (item == itemName) {
                    var index = gameState.inventory.indexOf(item);
                    if (index !== -1) {
                        gameState.inventory.splice(index, 1);
                    }
 
                }
            })
            break;
 
        default:
            break;
    }
    updateInventory(gameState.inventory, inventoryList);
}
/**
 * update inventoryList
 * @param {Array} inventory array of items
 * @param {HTMLElement} inventoryList html <ul> element
 */
function updateInventory(inventory, inventoryList) {
    inventoryList.innerHTML = '';
    inventory.forEach(function (item) {
        const inventoryItem = document.createElement("li");
        inventoryItem.id = "inv-" + item;
        inventoryItem.innerText = item;
        inventoryList.appendChild(inventoryItem);
 
    })
 
 
 
}