const images = [
  "BodyParts/Arm.png",
  "BodyParts/Eyes.png",
  "BodyParts/Foot.png",
  "BodyParts/Hand.png",
  "BodyParts/Leg.png",
  "Animals/YOU WIN!.gif",
];
const sounds = [
  "BodyPart sounds/Arm.mp3",
  "BodyPart sounds/Eyes.mp3",
  "BodyPart sounds/Foot.mp3",
  "BodyPart sounds/Hand.mp3",
  "BodyPart sounds/Leg.mp3",
  "Animal Sounds/YOU WIN!.mp3",
];
let score = +document.getElementById("score").innerHTML;
let currentImageIndex = 0;
let currentSoundIndex = 0;

function allowdrop(ev) {
  if (currentImageIndex !== images.length - 1) {
    ev.preventDefault();
    document.getElementById("rightanswer").innerHTML = "";
  }
}

function drag(ev) {
  // ev.dataTransfer.setData("text", ev.target.id);
  ev.dataTransfer.setData("text", ev.target.innerHTML);
}
function drop(ev) {
  if (ev.target.textContent === "" && currentImageIndex !== images.length - 1) {
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
      score += 20;
      document.getElementById("score").innerHTML = score;
    } else if (
      answer != currentImageName &&
      answer != "CORRECT!" &&
      answer != ""
    ) {
      document.getElementById("rightanswer").style.borderColor = "red";
      document.getElementById("rightanswer").style.color = "red";
      document.getElementById("wrong").play();
      score -= 15;
      document.getElementById("score").innerHTML = score;
    }
    if (
      currentImageIndex === images.length - 1 &&
      answer === currentImageName
    ) {
      document.getElementById("win").play();
    }
  }
  if (currentImageIndex === images.length - 1 && score >= 70) {
    document.getElementById("nextbutton").style.display = "block";
    document.getElementById(
      "scoreps"
    ).innerHTML = `You Scored ${score} Points!`;
  }
}

function playSound() {
  const soundElement = document.getElementById("sound");
  soundElement.play();
}

function nextSound() {
  const nextsound = document.getElementById("nextsound");
  nextsound.play();

  nextsound.onended = () => {
    window.location.href = "BodyParts game.html";
  };
}
