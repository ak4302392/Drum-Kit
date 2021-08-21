

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {


    document.querySelectorAll("button")[i].addEventListener("click", function () {
        makeSound(this.innerHTML);
        activeButton(this.innerHTML);
    });





}

document.addEventListener("keydown",function(ev){
   
   makeSound(ev.key);
   activeButton(ev.key);

});
 function makeSound(key){
    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kick= new Audio("sounds/kick-bass.mp3");
            kick.play();
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        case "d":
            var tom_1 = new Audio("sounds/tom-1.mp3");
            tom_1.play();
        case "j":
            var tom_2 = new Audio("sounds/tom-2.mp3");
            tom_2.play();
        case "k":
            var tom_3= new Audio("sounds/tom-3.mp3");
            tom_3.play();
        case "l":
            var tom_4 = new Audio("sounds/tom-4.mp3");
            tom_4.play();




    }

 }

 function activeButton(pressedButton){
     document.querySelector("."+pressedButton).classList.add("pressed");
     setTimeout(function(){
         document.querySelector("."+pressedButton).classList.remove("pressed");
     },1.00);
 }
