//Goal: have a pet you can interact with via 3 buttons
//Create a Class for your Tamagotchi including name and metrics
class Tamagotchi {
    constructor(name) {
      this.name = name;
      this.hungry = 0;
      this.sleepy = 0;
      this.bored = 0;
      this.age = 0;
    }
    //include methods that will prevent tsuki from waning and serve as logic for clicking buttons in html
    grow() { //grow the moon 
        this.hungry--;
    }
  
    sleep() { //rest the moon
        this.sleepy--;
    }
  
    play() { //be with the moon
        this.bored--;
    }
}  
//Create background for tsuki
document.body.style.backgroundImage = "url('golden-gate.png')";

//Create tsuki and display tsuki on screen using HTML
const tsuki = new Tamagotchi("Tsuki");
const idTsuki = document.getElementById("tsuki");

//Create event listeners for users to change values for grow, sleep, play
document.getElementById("feed").addEventListener("click", function() {
  tsuki.grow();
});
document.getElementById("sleep").addEventListener("click", function() {
  tsuki.sleep();
});
document.getElementById("play").addEventListener("click", function() {
  tsuki.play();
});

//Let user name the pet and display name on screen
const tsukiName = prompt("Name your moon: ");
document.getElementById("name").innerHTML = tsukiName;

//Animate pet while it's alive
idTsuki.classList.add("animate");

//Increase tsuki age every 800 ms & increment metrics by 1
const time = setInterval(function() {  
  tsuki.age++;
  tsuki.hungry++;
  tsuki.sleepy++;
  tsuki.bored++;
  
  document.getElementById("age").innerHTML = "Age: "+tsuki.age;
  document.getElementById("hunger").innerHTML = "Hunger: "+tsuki.hungry;
  document.getElementById("sleepiness").innerHTML = "Sleepiness: "+tsuki.sleepy;
  document.getElementById("boredom").innerHTML = "Boredom: "+tsuki.bored;

  //Morph tsuki at certain ages
  if (tsuki.age === 7 && tsuki.hungry != 10 && tsuki.sleepy != 10 && tsuki.bored != 10) {
    idTsuki.src = "half.png";
  }

  else if (tsuki.age === 14 && tsuki.hungry != 10 && tsuki.sleepy != 10 && tsuki.bored != 10) {
    idTsuki.src = "gibbous.png";
  }
  //Win game when tsuki morphs to full moon
  else if (tsuki.age === 21 && tsuki.hungry != 10 && tsuki.sleepy != 10 && tsuki.bored != 10) {
    idTsuki.src = "full.png";
    clearInterval(time);
    idTsuki.classList.remove("animate");
  }
  //Lose game when tsuki reverts to new moon if Hunger, Boredom, or Sleepiness hits 10
  else if (tsuki.hungry === 10 || tsuki.sleepy === 10 || tsuki.bored === 10) {
    idTsuki.src = "new.png";
    clearInterval(time);
    idTsuki.classList.remove("animate");
  }
}, 1000);

