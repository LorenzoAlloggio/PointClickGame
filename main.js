document.getElementById("title").innerText = "Point and Click Adventure game";
//game window reference
const gameWindow = document.getElementById("gameWindow");
 
//Game state
let gameState = {
    "door2locked": true,
    "inventory": [
 
    ]
 
}
const sec = 1000;
 
//Main Character
const mainCharacter = document.getElementById("mainCharacter");
const offsetCharacter = 16;
 
//speech bubbles
const mainCharacterSpeech = document.getElementById("mainCharacterSpeech");
const counterSpeech = document.getElementById("counterSpeech");
const counterAvatarImg = document.getElementById("counterAvatarImg");
const mcAudio = document.getElementById("mcAudio");
const counterAudio = document.getElementById("counterAudio");
 
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
 
    if (e.target.id !== "mcImage") {
        mainCharacter.style.left = x - offsetCharacter + "px";
        mainCharacter.style.top = y - offsetCharacter + "px";
    }
 
 
    console.log(e.target.id);
    switch (e.target.id) {
        case "door1":
 
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
            sign.style.opacity = 0.5;
            door1.style.opacity = 1;
 
            break;
 
        case "statue":
            showMessage(mainCharacterSpeech, mcAudio, "Wow, a cool statue!");
            setTimeout(function () { counterAvatarImg.style.opacity = 1 }, 2 * sec);
            setTimeout(showMessage, 4 * sec, counterSpeech, counterAudio, "Hello... Person");
            setTimeout(showMessage, 8 * sec, mainCharacterSpeech, mcAudio, "YOU CAN TALK?!");
            setTimeout(showMessage, 12 * sec, counterSpeech, counterAudio, "Yes.. wait you can hear me?");
            setTimeout(showMessage, 16 * sec, mainCharacterSpeech, mcAudio, "Yes i can! this is amazing.");
            setTimeout(showMessage, 20 * sec, counterSpeech, counterAudio, "This has never happened before..");
            setTimeout(showMessage, 24 * sec, mainCharacterSpeech, mcAudio, "Could you help me find the key to the left house?");
            setTimeout(showMessage, 28 * sec, counterSpeech, counterAudio, "Go to the well, there is a key hidden in there.");
            setTimeout(showMessage, 32 * sec, mainCharacterSpeech, mcAudio, "Thank you!!");
 
            setTimeout(function () { counterAvatarImg.style.opacity = 0 }, 36 * sec);
            break;
 
        default:
            //explode
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
 
/**
 * Shows a message in the speech bubble
 * @param {getElementById} targetBalloon
 * @param {getElementById} targetSound
 * @param {string} message
 */
function showMessage(targetBalloon, targetSound, message) {
    targetSound.currentTime = 0;
    targetSound.play();
    targetBalloon.style.opacity = "1";
    targetBalloon.innerText = message;
    setTimeout(hideMessage, 4 * sec, targetBalloon, targetSound);
}
 
/**
 * Sets the opacity to 0 so you don't see it anymore
 * @param {getElementById} targetBalloon
 * @param {getElementById} targetSound
 */
function hideMessage(targetBalloon, targetSound) {
    targetSound.pause();
    targetBalloon.style.opacity = "0";
}
 
//showMessage("mainCharacterSpeech");
//showMessage("counterSpeech");
//setTimeout(showMessage, 1 * sec, mainCharacterSpeech, "hey what's up");
//setTimeout(showMessage, 2 * sec, counterSpeech, "Yo buddy");
 
showMessage()
 