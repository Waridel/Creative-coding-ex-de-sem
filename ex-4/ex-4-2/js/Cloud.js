class Cloud {
    constructor(x, y, radius, ctx) {
      this.position = { x: x, y: y };
      // this.target = {
      //   x: x,
      //   y: y,
      // };
      // this.origin = {
      //   x: this.target.x,
      //   y: this.target.y,
      // };
      
      this.ctx = ctx;
      /*
          vitesse de d'incrémentation de t
        */
      this.speed = 0.01;
      /*
          t est un compteur qui va de 0 à 1
          qui definit la portion du chemin parcouru
        */
      this.t = 0;
      this.color = "black";
    }
  
    draw() {
      //check si on est arrivé à destination
    
  
      this.ctx.fillStyle = this.color;
      this.ctx.save();
      this.ctx.translate(this.position.x, this.position.y);
      this.ctx.beginPath();
      this.ctx.rect(0, 0,140,20+100);
      this.ctx.fill();
      this.ctx.closePath();
      this.ctx.restore();

      this.ctx.save();
      this.ctx.translate(this.position.x, this.position.y);
      this.ctx.beginPath();
      this.ctx.rect(150, 0,100,50+100);
      this.ctx.fill();
      this.ctx.closePath();
      this.ctx.restore();

      this.ctx.save();
      this.ctx.translate(this.position.x, this.position.y);
      this.ctx.beginPath();
      this.ctx.rect(100, -30,100,10+120);
      this.ctx.fill();
      this.ctx.closePath();
      this.ctx.restore();

      
      this.ctx.save();
      this.ctx.translate(this.position.x, this.position.y);
      this.ctx.beginPath();
      this.ctx.rect(200, -60,100,10+120);
      this.ctx.fill();
      this.ctx.closePath();
      this.ctx.restore();

      this.ctx.save();
      this.ctx.translate(this.position.x, this.position.y);
      this.ctx.beginPath();
      this.ctx.rect(-50, -20,140,20+100);
      this.ctx.fill();
      this.ctx.closePath();
      this.ctx.restore();

      this.ctx.save();
      this.ctx.translate(this.position.x, this.position.y);
      this.ctx.beginPath();
      this.ctx.rect(300,20,100,10+120);
      this.ctx.fill();
      this.ctx.closePath();
      this.ctx.restore();
    }
  
    /**
     *
     *  remettre le compteur t à zero
     *  réinitialiser la position du point de départ
     *  assigner la nouvelle position de destination
     */
  
  
    /**
     * function de calcul de l'animation
     */

  
    /**
     * calcul de la distance entre deux points
     */
    distance(target, goal) {
      return Math.sqrt(
        Math.pow(target.x - goal.x, 2) + Math.pow(target.y - goal.y, 2)
      );
    }
  }
  