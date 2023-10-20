const images = [
  "Animals/Sheep.png",
  "Animals/Elephant.png",
  "Animals/Lion.png",
  "Animals/Pig.png",
  "Animals/Chick.png",
  "Animals/YOU WIN!.gif",
];
const sounds = [
  "Animal Sounds/Sheep.mp3",
  "Animal Sounds/Elephant.mp3",
  "Animal Sounds/Lion.mp3",
  "Animal Sounds/Pig.mp3",
  "Animal Sounds/Chick.mp3",
  "Animal Sounds/YOU WIN!.mp3",
];
let currentImageIndex = 0;
let currentSoundIndex = 0;

function allowdrop(ev) {
  ev.preventDefault();
  document.getElementById("rightanswer").innerHTML = "";
}

function drag(ev) {
  // ev.dataTransfer.setData("text", ev.target.id);
  ev.dataTransfer.setData("text", ev.target.innerHTML);
}
function drop(ev) {
  if (ev.target.textContent === "") {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    // ev.target.appendChild(document.getElementById(data));
    ev.target.innerHTML = data;
    document.getElementById("rightanswer").style.borderColor = "green";
    document.getElementById("rightanswer").style.color = "green";
    //OLD CODE WARNING
    let answer = document.getElementById("rightanswer").textContent;
    const currentImageName = images[currentImageIndex]
      .split("/")
      .pop()
      .split(".")[0];

    if (answer === currentImageName) {
      document.getElementById("rightanswer").style.borderColor =
        "rgb(52, 84, 190)";
      const imageElement = document.getElementById("image");
      currentImageIndex = (currentImageIndex + 1) % images.length;
      imageElement.src = images[currentImageIndex];

      const soundElement = document.getElementById("sound");
      currentSoundIndex = (currentSoundIndex + 1) % sounds.length;
      soundElement.src = sounds[currentSoundIndex];

      document.getElementById("rightanswer").style.borderColor = "green";
      document.getElementById("rightanswer").style.color = "green";
      document.getElementById("rightanswer").style.fontSize = "25px";
      document.getElementById("rightanswer").innerHTML = "CORRECT!";
      document.getElementById("correct").play();
    } else if (
      answer != currentImageName &&
      answer != "CORRECT!" &&
      answer != ""
    ) {
      document.getElementById("rightanswer").style.borderColor = "red";
      document.getElementById("rightanswer").style.color = "red";
      document.getElementById("wrong").play();
    }
    if (currentImageIndex === 5 && answer === currentImageName) {
      document.getElementById("win").play();
    }
  }
}
function playSound() {
  const soundElement = document.getElementById("sound");
  soundElement.play();
}
