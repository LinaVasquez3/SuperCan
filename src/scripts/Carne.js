class Carne {
    constructor(app, x, y) {
        this.app = app;
        this.x = x;
        this.y = y;
        this.tam = 60;

        this.vel = 5;
        this.daño = 5;
        //COLOCAR EL MOVER
        this.mover = this.mover.bind(this);
        setInterval(this.mover, 50);
        //IMAGEN
        this.carne = this.app.loadImage("/src/img/pernil.png");
    }

    pintar() {
        this.app.image(this.carne, this.x, this.y, this.tam, this.tam);
    }
    mover() {
        this.x += this.vel;
      
    }
    validar(otroX, otroY) {
        if (this.app.dist(this.x, this.y, otroX, otroY) < this.tam / 2) {
            return true;
        } else {
            return false;
        }
    }
}