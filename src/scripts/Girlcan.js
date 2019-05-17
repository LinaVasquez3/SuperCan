class Girlcan extends Can {

    constructor(app, x, y) {

        super(app, x, y);
        this.poder = [];
        //IMAGEN
        this.Girlcan = this.app.loadImage("/src/img/girlcan.png");
        this.podercito();

    }
    //LLAMA AL PODER CARNE
    podercito() {
        this.poder.push(new Carne(this.app, this.x + (this.tamX), this.y + (this.tamY / 2)));
    }

    pintar() {
        this.app.image(this.Girlcan, this.x, this.y, this.tamX, this.tamY);
        for (let index = 0; index < this.poder.length; index++) {
            this.poder[index].pintar();
        }
    }



}