class Boycan extends Can {

    constructor(app, x, y) {

        super(app, x, y);
        this.poder = [];
        //IMAGEN
        this.boycan = this.app.loadImage("/src/img/boycan.png");
        this.podercito();

    }

    podercito() {
        //LLAMA AL PODER HUESO
        this.poder.push(new Hueso(this.app, this.x + (this.tamX), this.y + (this.tamY / 2)));
    }

    pintar() {
        this.app.image(this.boycan, this.x, this.y, this.tamX, this.tamY);
        for (let index = 0; index < this.poder.length; index++) {
            this.poder[index].pintar();
        }
    }



}