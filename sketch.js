var buttons = [];
var sounds = [];

class Button {
  constructor(x, y, size, sound) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.sound = sound;
    this.state = false;
  }

  display() {
    if (this.state) {
      fill(254, 74, 73);
    } else {
      fill(255, 195, 31);
    }
    strokeWeight(2);
    stroke(251, 255, 241);
    rect(this.x, this.y, this.size, this.size);
  }

  play() {
    if (this.state) {
      this.sound.play();
    }
  }

  click(clickX, clickY) {
    let d = dist(this.x, this.y, clickX, clickY);

    if (d <= this.size) {
      this.sound.stop();
      this.state = !this.state;
    }
  }
}

function preload() {
  sounds.push(
    loadSound(
      "https://cdn.glitch.com/fe4fbba9-79b0-44e0-be3c-b2ebb193c606%2Fsmall1.wav?v=1629215513259"
    )
  );
  sounds.push(
    loadSound(
      "https://cdn.glitch.com/fe4fbba9-79b0-44e0-be3c-b2ebb193c606%2Fdigital_boop.wav?v=1629215437432"
    )
  );
  sounds.push(
    loadSound(
      "https://cdn.glitch.com/fe4fbba9-79b0-44e0-be3c-b2ebb193c606%2Fsnare.wav?v=1629217077466"
    )
  );
  sounds.push(
    loadSound(
      "https://cdn.glitch.com/fe4fbba9-79b0-44e0-be3c-b2ebb193c606%2Fdigital_long.wav?v=1629215450264"
    )
  );
  sounds.push(
    loadSound(
      "https://cdn.glitch.com/fe4fbba9-79b0-44e0-be3c-b2ebb193c606%2F8bit_beep.wav?v=1629215453571"
    )
  );
  sounds.push(
    loadSound(
      "https://cdn.glitch.com/fe4fbba9-79b0-44e0-be3c-b2ebb193c606%2F8bit_highpitch.wav?v=1629215455922"
    )
  );
  sounds.push(
    loadSound(
      "https://cdn.glitch.com/fe4fbba9-79b0-44e0-be3c-b2ebb193c606%2F8bit_lowpitch.wav?v=1629215458360"
    )
  );
  sounds.push(
    loadSound(
      "https://cdn.glitch.com/fe4fbba9-79b0-44e0-be3c-b2ebb193c606%2F8bit_mediumpitch.wav?v=1629215461110"
    )
  );
  sounds.push(
    loadSound(
      "https://cdn.glitch.com/fe4fbba9-79b0-44e0-be3c-b2ebb193c606%2Fchime1.wav?v=1629215463367"
    )
  );
  sounds.push(
    loadSound(
      "https://cdn.glitch.com/fe4fbba9-79b0-44e0-be3c-b2ebb193c606%2Fcrash1.wav?v=1629215466095"
    )
  );
  sounds.push(
    loadSound(
      "https://cdn.glitch.com/fe4fbba9-79b0-44e0-be3c-b2ebb193c606%2Fcymbal.wav?v=1629215468636"
    )
  );
  sounds.push(
    loadSound(
      "https://cdn.glitch.com/fe4fbba9-79b0-44e0-be3c-b2ebb193c606%2Fdigital_2beeps.wav?v=1629215471888"
    )
  );
  sounds.push(
    loadSound(
      "https://cdn.glitch.com/fe4fbba9-79b0-44e0-be3c-b2ebb193c606%2Fdigital_alien.wav?v=1629215475210"
    )
  );
  sounds.push(
    loadSound(
      "https://cdn.glitch.com/fe4fbba9-79b0-44e0-be3c-b2ebb193c606%2Fdigital_shoot.wav?v=1629215478876"
    )
  );
  sounds.push(
    loadSound(
      "https://cdn.glitch.com/fe4fbba9-79b0-44e0-be3c-b2ebb193c606%2Fkick.wav?v=1629215503366"
    )
  );
  sounds.push(
    loadSound(
      "https://cdn.glitch.com/fe4fbba9-79b0-44e0-be3c-b2ebb193c606%2Fring.wav?v=1629215509474"
    )
  );
}

function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent("sketch-holder");
  
  var count = 0; 

  for (let i = 0; i <= 3; i += 1) {
    for (let n = 0; n <= 3; n += 1) {
      let button = new Button(i * 90 + 50, n * 90 + 50, 30, sounds[count]);
      buttons.push(button);
      count += 1;
    }
  }

  setInterval(playSounds, 1000);
}

function draw() {
  background(176, 224, 230);
  for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].display();
  }
}

function mouseClicked() {
  for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].click(mouseX, mouseY);
  }
}

function playSounds() {
  for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].play();
  }
}
