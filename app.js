//invoking
greetUser();

let userInfo = askUserforInfo();

let infoNotBlank = checkValidInput(userInfo);
//this iswhere I am doing the stretch goal.

judgeUserLocation(infoNotBlank);




//declaring
function greetUser(){
    alert("Welcome to Travel Destination!");
}

function askUserforInfo (){
    let userInfo = prompt('Where are you now?');
    console.log(userInfo);
    return userInfo;
}

function checkValidInput(inputToCheck){
    if (inputToCheck == null || inputToCheck == "" ){
        alert("That's not cool, you are suppose to put your location."); 
        let newUserInfo = checkValidInput(askUserforInfo());
        return newUserInfo;
    } else {
        return inputToCheck;
    }
}

function judgeUserLocation(userInfo){

    console.log("Beach is the best place.");

    if(userInfo == "Beach" || userInfo == "beach"){
        alert("Nice!");

        document.write("Enjoy that Cool Breeze!");
    } else {
        alert(userInfo + "  is cool I guess.");

        document.write("Being at the Beach would be better..");
    }
}


