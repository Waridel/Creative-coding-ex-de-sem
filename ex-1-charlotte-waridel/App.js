const { CubeTextureLoader } = require("three");

const pixelRatio = window.devicePixelRatio;

let monCanvas;
let mesOutils;
let positionY = 0;
let isAnimated = true;
function start() {

  monCanvas = document.getElementById("ecal");
  monCanvas.width = (window.innerWidth - 60 * pixelRatio) * pixelRatio;
  monCanvas.height = (window.innerHeight - 60 * pixelRatio) * pixelRatio;
  monCanvas.style.width = window.innerWidth - 60 * pixelRatio;
  monCanvas.style.height = window.innerHeight - 60 * pixelRatio;
  mesOutils = monCanvas.getContext("2d");

  positionY = monCanvas.height / 2;

  animate();
}
  function animate() {
    mesOutils.clearRect(0, 0, monCanvas.width, monCanvas.height);

if(isAnimated==true){
positionY +=1;
}
    positionY += 1;

  dessine();

  if (positionY > monCanvas.width) {
    positionY = 0;
  }
  requestAnimationFrame(animate);
}



function dessine() {

 

  mesOutils.fillStyle = rgb(179,54,48);
  mesOutils.beginPath();
  mesOutils.rect(
    20,
    20,
    235 * pixelRatio,
    235 * pixelRatio
  );
  
  mesOutils.stroke();
  mesOutils.fill();
  mesOutils.closePath();



  mesOutils.fillStyle = rgb(179,54,48);
  mesOutils.beginPath();
  mesOutils.rect(
    500,
    500,
    938 * pixelRatio,
    109 * pixelRatio
  );
  
  mesOutils.stroke();
  mesOutils.fill();
  mesOutils.closePath();


  mesOutils.fillStyle = rgb(184,184,182);
  mesOutils.beginPath();
  mesOutils.rect(
    20,
    500,
    235 * pixelRatio,
    109 * pixelRatio
  );
  mesOutils.stroke();
  mesOutils.fill();
  mesOutils.closePath();



  mesOutils.fillStyle = rgb(184,184,182);
  mesOutils.beginPath();
  mesOutils.rect(
    500,
    20,
    938 * pixelRatio,
    235 * pixelRatio
  );
  
  mesOutils.stroke();
  mesOutils.fill();
  mesOutils.closePath();
  
  mesOutils.fillStyle = "white";
  mesOutils.beginPath();
  mesOutils.arc(
    positionY,
   245,
   245,
    100 * pixelRatio,
    0,
    2 * Math.PI
  );
  mesOutils.stroke();
  mesOutils.fill();
  mesOutils.closePath();
}
function rgb(r, g, b){
  return "rgb("+r+","+g+","+b+")";
}

window.onload = () => {
  start();
};