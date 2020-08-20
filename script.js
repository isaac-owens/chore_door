const doorImage1 = document.getElementById("door1");
const doorImage2 = document.getElementById("door2");
const doorImage3 = document.getElementById("door3");

const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
const closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";

let openDoor1;
let openDoor2;
let openDoor3;

const startButton = document.getElementById('start');
let numClosedDoors = 3;
let currentlyPlaying = false;

const isBot = door => {
  door.src === botDoorPath ? true : false;
}

const playDoor = door => {
  numClosedDoors --;
  if (numClosedDoors === 0) {
    gameOver('win');
  } else if (isBot(door)) {
    gameOver('lose');
  }
}


window.isBot = isBot;

isClicked = door => {
  door.src === closedDoorPath ? false : true;
};

randomChoreDoorGenerator = () => {
  const choreDoor = Math.floor(Math.random() * numClosedDoors);
  switch (choreDoor) {
    case 0:
      openDoor1 = botDoorPath;
      openDoor2 = beachDoorPath;
      openDoor3 = spaceDoorPath;
      break;
    case 1: 
      openDoor2 = botDoorPath;
      openDoor1 = beachDoorPath;
      openDoor3 = spaceDoorPath;
      break;
    default: 
      openDoor3 = botDoorPath;
      openDoor1 = spaceDoorPath;
      openDoor2 = beachDoorPath;
  }
}

doorImage1.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage1) ) {
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
}

doorImage2.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage2) ) {
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
}

doorImage3.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage3)) {
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
}

const startRound = () => {
  if (currentlyPlaying === false) {
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    numClosedDoors = 3;
    startButton.innerHTML = "Good luck!";
    currentlyPlaying = true;
    randomChoreDoorGenerator();
  }
}

startButton.onclick = startRound;

gameOver = status => {
  if (status === 'win') {
    startButton.innerHTML = "You win! Play again?";
  } else if (status === 'lose') {
    startButton.innerHTML = "Game Over! Play again?";
  }
  currentlyPlaying = false;
}

startRound();