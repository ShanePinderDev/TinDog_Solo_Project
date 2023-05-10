import dogs from "/data.js";
import Dog from "/dog.js";

document.getElementById("btn-nope").addEventListener("click", nope);
document.getElementById("btn-like").addEventListener("click", like);

const profileContainerEl = document.getElementById("profile-container");

let dogsArray = [];

dogs.map((element) => {
  dogsArray.push(element);
});

let dog = getNewDog();
render();

function getNewDog() {
  const nextDogData = dogsArray.shift();
  return nextDogData ? new Dog(nextDogData) : {};
}

function nope() {
  if (dog.hasBeenSwiped === false) {
    dog.setMatchStatus(false);
    profileContainerEl.innerHTML += dog.getNopeImgHtml();
    checkDogsArrayStatus();
  }
}

function like() {
  if (dog.hasBeenSwiped === false) {
    dog.setMatchStatus(true);
    profileContainerEl.innerHTML += dog.getLikeImgHtml();
    checkDogsArrayStatus();
  }
}

function checkDogsArrayStatus() {
  if (dogsArray.length > 0) {
    setTimeout(() => {
      dog = getNewDog();
      render();
    }, 1500);
  } else {
    setTimeout(() => {
      endDisplay();
    }, 1500);
  }
}

function endDisplay() {
  profileContainerEl.innerHTML = dog.getEndgameModalHtml();
}

function render() {
  profileContainerEl.innerHTML = dog.getDogHtml();
}
