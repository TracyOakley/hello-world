//invoking
//greetUser();

//Code from Class 8

function howManyStars(){

    let numOfStars = prompt("How would your rate going to the beach in the Summer? (Enter 1 to 5)");


    while(numOfStars == null || numOfStars == "" || numOfStars > 5 || numOfStars < 1 ){
   
        console.log(numOfStars);

        

        if(numOfStars > 5){
            alert("Too Many Stars but thank you!");
        }
    
        if(numOfStars == null || numOfStars == ""){
            alert("You didn't type anything. Try again");
        }
        numOfStars = prompt("How would your rate going to the beach in the Summer? (Enter 1 to 5)");
        
        
    }
    return numOfStars;

}


function outputStarsonScreen(){

    let numOfStars = howManyStars();

    for(let i = 1; i <= numOfStars; i++){
        document.write('<img class="jsImg" src="starimage.png" alt="Pic of Star"/>');
      }
    
}


//Using JS to write inline HTML

// for(let i =0; i < var; i++){
//     document.write("<img class="loop-img" src="" alt="" />")
//   "''" or '""' but not """" because pairs closest sets.
// }




//Code from Class 7
//let userInfo = "";
//let userInfo = askUserforInfo();
//let infoNotBlank = checkValidInput(userInfo); //this is where I am doing the stretch goal.
//judgeUserLocation(infoNotBlank);



//declaring
function greetUser(){
    alert("Welcome to Travel Destination!");
}

// function askUserforInfo (){
//     let userInfo = prompt('Where are you now?');
//     console.log(userInfo);
//     return userInfo;
// }

// function checkValidInput(inputToCheck){
//     if (inputToCheck == null || inputToCheck == "" ){
//         alert("That's not cool, you are suppose to put your location."); 
//         let newUserInfo = checkValidInput(askUserforInfo());
//         return newUserInfo;
//     } else {
//         return inputToCheck;
//     }
// }

// function judgeUserLocation(userInfo){

//     console.log("Beach is the best place.");

//     if(userInfo == "Beach" || userInfo == "beach"){
//         alert("Nice!");

//         document.write("Enjoy that Cool Breeze!");
//     } else {
//         alert(userInfo + "  is cool I guess.");

//         document.write("Being at the Beach would be better..");
//     }
// }


