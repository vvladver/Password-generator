
const characters = {
    charactersAll: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"],
    charactersWithoutNumbers: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"],
    charactersOnly: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
}

let generateBtn = document.getElementById("generate-btn");
let generatedPass1 = document.getElementById("generated-pass1");
let generatedPass2 = document.getElementById("generated-pass2");
let passLength = document.getElementById("pass-leng");
passLength.value = " "


function randomPass() {
    if (isNaN(passLength.value) || passLength.value <= 0 || passLength.value < 8 || passLength.value > 18) {
        generatedPass1.textContent = "Invalid password length";
        generatedPass2.textContent = "Length should be 8-18 ";
        passLength.value = ""
        return;
    }

    generatedPassword1 = "";
    generatedPassword2 = "";
    const selectedCharacterSet = characters.charactersAll; 

    for (let i = 0; i < passLength.value; i++) {
        const randomIndex1 = Math.floor(Math.random() * selectedCharacterSet.length);
        const randomIndex2 = Math.floor(Math.random() * selectedCharacterSet.length);
        generatedPassword1 += selectedCharacterSet[randomIndex1];
        generatedPassword2 += selectedCharacterSet[randomIndex2];

    }

    generatedPass1.textContent =  generatedPassword1;
    generatedPass2.textContent =  generatedPassword2;
    passLength.value = ""

    generatedPass1.addEventListener("click", copyToClipboard);
    generatedPass2.addEventListener("click", copyToClipboard);
    

}

    function copyToClipboard(event) {
        const password = event.target.textContent;
    
        if (password.length < 8 || password.length > 18) {
            displayNotification ("Password length is not valid");
            return;
        }

        navigator.clipboard.writeText(password)
            .then(() => {
                displayNotification("Password copied!");
            })
            .catch(err => {
                console.error("Failed to copy password: ", err);
                displayNotification("Failed to copy password.", "error")
            });
}
 function displayNotification(message,type){
    const notificationContainer = document.getElementById("notification-container")
    const notification = document.createElement("div")
    notification.classList.add("notification",type)
    notification.textContent = message

    notificationContainer.appendChild(notification)

    setTimeout(() => {
        notificationContainer.removeChild(notification);
    }, 1000);

 }