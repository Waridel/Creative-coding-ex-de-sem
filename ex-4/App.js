class App {
  constructor() {
    this.pixelRatio = window.devicePixelRatio || 1;
    this.canvas = document.createElement("canvas");
    this.canvas.width = window.innerWidth * this.pixelRatio;
    this.canvas.height = window.innerHeight * this.pixelRatio;
    this.canvas.style.width = window.innerWidth;
    this.canvas.style.height = window.innerHeight;
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");
    this.setup();
  }

  setup() {
    this.mouse = { x: 0, y: 0 };
    const amount = 2000;
    let radius = 10;
    const center = {
      x: (window.innerWidth / 2) * this.pixelRatio,
      y: (window.innerHeight / 2) * this.pixelRatio,
    };
    
    this.bouche = new Mouth(
      (window.innerWidth / 2) * this.pixelRatio,
      (window.innerHeight / 2) * this.pixelRatio,
      0,
      this.ctx
    );
    this.eyes = new Eye(
      (window.innerWidth / 2) * this.pixelRatio,
      (window.innerHeight / 2) * this.pixelRatio,
      0,
      this.ctx
    );

    //BODY
    this.body = new Body(
      (window.innerWidth / 2) * this.pixelRatio,
      (window.innerHeight / 2) * this.pixelRatio,
      0,
      this.ctx
    );

    

    // document.addEventListener("click", this.click.bind(this));
    document.addEventListener("click", this.click.bind(this));

    this.draw();
  }

  draw() {
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
   
    this.body.draw();
    this.eyes.draw();
    this.bouche.draw();
    requestAnimationFrame(this.draw.bind(this));
  }

  click(e) {
    this.bouche.resetAndGo();
    this.eyes.resetAndGo();
    this.body.resetAndGo();
    
  }
}

window.onload = function () {
  new App();
};
