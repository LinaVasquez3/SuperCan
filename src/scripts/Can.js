class Can {
    constructor(app, x, y,poder) {
        this.app = app;
        this.x = x;
        this.y = y;

        this.tamX = 117;
        this.tamY = 111;

        this.poder = poder;
        this.podercito = this.podercito.bind(this);
        setInterval(this.podercito, 3000);
    }

    pintar() {

    }

    podercito(){

    }


}
