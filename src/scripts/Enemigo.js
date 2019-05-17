class Enemigo {

    constructor(app, x, y, tipo) {
        this.app = app;
        this.x = x;
        this.y = y;
        this.vel = 4;
        this.tipo = tipo;
        this.vida = 3;
    }

    mover(dir, vel) {
        if (vel == null){
            this.x += -4 * dir;
        }else{
            this.x += vel * dir;
        }
    }

    pintar() {
        this.espacio = 0;
        for (let index = 0; index < this.vida; index++) {
            this.app.fill(10, 25, 115);
            this.app.ellipse(this.x + this.espacio, this.y - 10, 20, 20);
            this.espacio += 40;
        }

    }



}