var buttons=document.querySelectorAll(".drum");

for (button of buttons){

    button.addEventListener("click",function(){
        var buttonPressed=this.innerHTML;
        makeSound(buttonPressed);
        buttonFlash(buttonPressed);
    });
}

document.addEventListener("keydown",function(){
    var keyPressed=event.key;
    makeSound(keyPressed);
    buttonFlash(keyPressed);
});

function makeSound(key){
    
    
    
    switch (key) {
        case "w":
            var audio= new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio= new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
         case "s":
            var audio= new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio= new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio= new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio= new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio= new Audio("sounds/kick.mp3");
            audio.play();
            break;
    
        default:
            console.log(key);
            break;
    }
    
}
function buttonFlash(key){
    var activeButton=document.querySelector("."+key);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100)
}