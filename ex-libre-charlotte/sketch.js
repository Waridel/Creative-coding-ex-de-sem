let sound;

function preload() {
  sound = loadSound("asset/Wanted Dead - Dasha Rush.mp3");
}

function setup() {
  sound.loop();

  createCanvas(windowWidth, windowHeight);

  amp = new p5.Amplitude();
}

function draw() {
  let level = amp.getLevel();

  noStroke();
  fill(255);

  for (let i = 0; i < mouseX * level; i++) {
    push();
    translate(width / 2, height / 2);
    rotate(radians(i * 90 + i * frameCount * 0.005));
    rect(mouseX * 0.002 * i, 0, 40, 20);
    rect(level + mouseY * 0.002 * i + 15, 35, 16, windowWidth);
    pop();
  }

  //translate(mouseX, mouseY);
  fill(0, 0, 255);

  ellipse(mouseX, mouseY, 30, 30);

  if (sound.isPlaying() == true) {
    background(0, 30);
  } else {
    background(255);
  }
}
function mousePressed() {
  if (sound.isPlaying() == true) {
    sound.pause();
  } else {
    sound.play();
  }
}
