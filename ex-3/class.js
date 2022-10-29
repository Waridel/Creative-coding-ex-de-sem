class Forme{
constructor(x,y,size,color,outils){
this.x =x;
this.y = y;
this.size = size;
this.rotation = false;
this.angle = Math.round(Math.random()) *(Math.PI /2);
this.outils = outils;
this.bgColor = color;
this.lineColor = this.bgColor == "red" ? "blue" : "blue";
this.radius = 75;


}
updateAngle(){
    this.angle += Math.PI;
}

draw(){

    this.outils.save();
    this.outils.translate(this.x,this.y)
    this.outils.rotate(this.angle);
    this.outils.fillStyle= this.bgColor;
    this.outils.beginPath();
    this.outils.arc(0 - this.size /2,0 -this.size /2,this.size,this.size,Math.PI/2);
    this.outils.fill();
    this.outils.closePath();
    this.outils.strokeStyle= this.lineColor;
    this.outils.lineWidth =20;
    this.outils.beginPath();
  /* this.outils.rect(
        0 -this.size /2,
        0-this.size /2,
        this.size/2,
        0,
        Math.PI*2,
        false
    );*/
    this.outils.fill();
    this.outils.stroke();
    this.outils.closePath();


    this.outils.beginPath();
   /*this.outils.rect(
        this.size,
        this.size,
        this.size/3 ,
        Math.PI,
        -Math.PI,
        false
      );*/
      this.outils.stroke();
      this.outils.closePath();
      this.outils.restore();
}

}