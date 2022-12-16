class Circle {
  constructor(x, y, radius, ctx) {
    this.x = x;
    this.y = y;
    this.origin = { x: x, y: y };
    this.radius = radius;
    this.ctx = ctx;
    this.color = "rgb(0,0,0)";
    this.replacement_color = "rgb(255,255,255)";
    this.color1 = " rgba(255,0,0,0.7)";
    this.color2 = "rgba(0,0,255,0.7)";
  }

  draw() {
    const luminosity_percentage = this.detectLuminance();

    // if (luminosity_percentage > 0.19) {
    this.ctx.fillStyle = "rgba(255,90,255,0.7)";
    this.ctx.save();
    this.ctx.translate(this.x, this.y);
    this.ctx.beginPath();
    //this.ctx.arc(0, 0, this.radius * luminosity_percentage, 0, 2 * Math.PI);
    this.ctx.rect(0, 0, 90, 90 * luminosity_percentage);
    this.ctx.fill();
    this.ctx.closePath();
    this.ctx.restore();
    // }
  }

  detectLuminance() {
    const rgb = this.color.replace(/[^\d,]/g, "").split(",");
    const luminance = 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
    return luminance / 500;
  }
}
