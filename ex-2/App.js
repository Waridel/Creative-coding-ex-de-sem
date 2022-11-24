const pixelRatio = window.devicePixelRatio;

let monCanvas;
let mesOutils;
let angle=0;
let angleY = 0;
let rayon = 100;
let v2 = (Math.PI * 1) / 300
let v1 = 40;

let sizeR =20;
let sizeC = 15;

let rotation = 0


function start(){

    monCanvas = document.getElementById("canvas");
    monCanvas.width = (window.innerWidth - 60 * pixelRatio) * pixelRatio;
    monCanvas.height = (window.innerHeight - 60 * pixelRatio) * pixelRatio;
    monCanvas.style.width = window.innerWidth - 60 * pixelRatio;
    monCanvas.style.height = window.innerHeight - 60 * pixelRatio;
    mesOutils = monCanvas.getContext("2d");

    animate();
}

function animate(){
    mesOutils.clearRect(0, 0, monCanvas.width, monCanvas.height);
    
    dessine();

    requestAnimationFrame(animate);


}

function dessine(){

    let x = monCanvas.width / 2;
    let y = monCanvas.height / 2;
    
    let w = 0;

    for (let j = -1; j < 20; j++) {
      for (let i = -1; i < 20; i++) {

        let _posX = x + Math.cos(angle * (Math.PI /180)) * rayon;
        let _posY = y + Math.sin(angleY * (Math.PI / 180)) * rayon;

        mesOutils.fillStyle = "white";
        mesOutils.strokeStyle= "black";
        mesOutils.beginPath();
        mesOutils.arc(
            (i * _posX) / 10 + monCanvas.width / 20,
            (j * _posY) / 10 + monCanvas.height / 20,

            monCanvas.height / 10 / 2,
          
           Math.abs(sizeR * Math.sin(angleY * (Math.PI / 90))),
          monCanvas.height / 10 / 2,
          
         // 2 * Math.PI,
          
        );
        mesOutils.stroke();
        mesOutils.fillStyle = 'rgba(8, 8, 13, 0.05)'
        mesOutils.closePath();
        angleY += v2;
        angle += v1;
        

  
        //w += 360 / 100;
        
      }
    }
}

window.onload = () => {
    start();
  };