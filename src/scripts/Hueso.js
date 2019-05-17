class Hueso {
    constructor(app, x, y) {
        this.app = app;
        this.x = x;
        this.y = y;
        this.tam = 60;

        this.vel = 5;
        this.daño = 5;
        //MOVER EL PODER
        this.mover = this.mover.bind(this);
        setInterval(this.mover, 50);
        //IMAGEN
        this.hueso = this.app.loadImage("/src/img/hueso.png");
    }

    pintar() {
        this.app.image(this.hueso, this.x, this.y, this.tam, this.tam);
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