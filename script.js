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

const numClosedDoors = 3;

playDoor = () => {
  numClosedDoors -= 1;
  if (numClosedDoors === 0) {
    gameOver();
  };
}

isClicked = (door) => {
  if (door.src === closedDoorPath) {
    return false;
  } else {
    return true
  }
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
  if (!isClicked(doorImage1)) {
    doorImage1.src = openDoor1;
    playDoor();
  }
}

doorImage2.onclick = () => {
  if (!isClicked(doorImage2)) {
    doorImage2.src = openDoor2;
    playDoor();
  }
}

doorImage3.onclick = () => {
  if (!isClicked(doorImage3)) {
    doorImage3.src = openDoor3;
    playDoor();
  }
}

gameOver = () => {

}

randomChoreDoorGenerator();