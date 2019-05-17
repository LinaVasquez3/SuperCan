class Tablero {
    constructor(app, x, y) {
        this.app = app;
        this.x = x;
        this.y = y;
        this.tamX = 195;
        this.tamY = 120;

    }

    pintar() {
        //this.app.fill(255, 0, 0)
            this.app.noFill()
           this.app.noStroke();
            //this.app.stroke(0)
        this.app.rect(this.x, this.y, this.tamX, this.tamY);
    }


    validar(otroX, otroY) {
        if (otroX > this.x && otroX < this.x + this.tamX &&
            otroY > this.y && otroY < this.y + this.tamY) {
            return true;
        } else {
            return false;
        }
    }
}