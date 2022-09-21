let userInfo = prompt('Where are you now?');

if (userInfo == null || userInfo == "" ){
    alert("That's not cool, you are suppose to put your location.");
    userInfo = prompt("Where are you at now?");
}

console.log("Beach is the best place.")

if(userInfo == "Beach"){
    alert("Nice!");
    document.write("Enjoy that Cool Breeze!");
} else {
    alert(userInfo + "  is cool I guess.");
    document.write("Being at the Beach would be better..");
}

