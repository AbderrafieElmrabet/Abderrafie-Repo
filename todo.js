function allowdrop(ev) {
  ev.preventDefault()
}

function drag(ev) {
  ev.dataTransfer.setData('text', ev.target.id)
}

function drop(ev) {
  ev.preventDefault()
  var data = ev.dataTransfer.getData('text')
  ev.target.appendChild(document.getElementById(data))
}

const images = ["Animals/Sheep.png", "Animals/Elephant.png", "Animals/Lion.png", "Animals/Pig.png", "Animals/Chick.png", "Animals/YOU WIN!.gif"];
const sounds = ["Animal Sounds/Sheep.mp3", "Animal Sounds/Elephant.mp3", "Animal Sounds/Lion.mp3", "Animal Sounds/Pig.mp3", "Animal Sounds/Chick.mp3"];
let currentImageIndex = 0;
let currentSoundIndex = 0;

function checkanswer() {
  let answer = document.getElementById('rightanswer').textContent;
  const currentImageName = images[currentImageIndex].split('/').pop().split('.')[0];

  if (answer === currentImageName) {
    document.getElementById('rightanswer').style.borderColor='rgb(52, 84, 190)'
    const imageElement = document.getElementById('image');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    imageElement.src = images[currentImageIndex];
    
    const soundElement = document.getElementById('sound');
    currentSoundIndex = (currentSoundIndex + 1) % sounds.length;
    soundElement.src = sounds[currentSoundIndex];


    document.getElementById('rightanswer').textContent = "";
  } else {
    document.getElementById('rightanswer').style.borderColor='red'
  } 
}
function playSound() {
  const soundElement = document.getElementById('sound');
  soundElement.play();
}