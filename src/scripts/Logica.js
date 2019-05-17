class Logica {

    constructor(app) {
        this.app = app;
        this.pantalla = 0;


        //PANTALLAS PRINCIPALES
        this.inicio = this.app.loadImage("./src/img/inicio.png");
        this.instrucciones = this.app.loadImage("./src/img/instrucciones.png");
        this.nombre = this.app.loadImage("./src/img/nombre.png");
        this.tablero = this.app.loadImage("./src/img/tablero.png");
        this.final = this.app.loadImage("./src/img/final.png");

        //this.i= 0;

        //BOTON PARA SABER SI HACE CLICK O NO EN LOS BOTONES DE BOYCAN Y GIRLCAN
        this.botA = false;
        this.botB = false;

        //TABLERO
        //ARREGLO PARA TABLERO
        this.tableros = [];
        //RECORRER ARREGLO
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 5; j++) {
                this.tableros.push(new Tablero(this.app, ((i * 255) + 35), 200 + (j * 140)));
            }
        }

        //VIDAS
        this.vidaA = this.app.loadImage("./src/img/vidaA.png");
        this.vidaB = this.app.loadImage("./src/img/vidaB.png");
        this.vidaC = this.app.loadImage("./src/img/vidaC.png");

        //ENEMIGOS
        this.enemigo1 = this.app.loadImage("./src/img/moonster.png");
        this.enemigo2 = this.app.loadImage("./src/img/nier.png");
        this.enemigo3 = this.app.loadImage("./src/img/ratatoui.png");

        //ARREGLO PARA QUE APAREZCAN ENEMIGOS
        this.enemigosA1 = [];

        //TIEMPO
        this.tipoPuntaje = this.app.loadFont("./src/scripts/Typo_Round_Regular_Demo.otf");
        this.puntaje = 0;
        this.frameC = 0;
        this.app.frameRate(45);

        //USER PARA COLOCAR EL NOMBRE
        this.textBox = " ";
        this.letra = this.textBox;
        this.px = 647;
        this.py = 574;
        this.contador = 0;

        //PODERES ALIADOS 
       // this.poderHueso;
       // this.poderCarne;

        //PODER
       // this.poder = [];


    }

    pintar() {


        //TIEMPO
        //contador de frames, puntaje corre dependiendo del tiempo que dure vivo.
        if (this.app.frameCount % 98 == 0) {
            this.frameC++;
        }

        if (this.frameC > 8) {
            this.frameC = 0;
        }


        switch (this.pantalla) {
            //INICIO
            case 0:
                this.app.image(this.inicio, 0, 50, 1530, 730);
                this.pantalla = 0;
                break;

            //INSTRUCCIONES
            case 1:
                this.app.image(this.instrucciones, 0, 0, 1530, 751);
                this.pantalla = 1;
                break;

            //NOMBRE
            case 2:
                this.app.image(this.nombre, 0, 0, 1520, 751);
                this.app.textFont(this.tipoPuntaje);
                this.app.textSize(50);
                this.app.text(this.textBox, this.px, this.py);
                this.pantalla = 2;
                break;

            //TABLERO
            case 3:
                this.app.image(this.tablero, 0, 50, 1530, 700);
                this.app.image(this.vidaA, 24, 79, 60, 56);
                this.app.image(this.vidaB, 100, 128, 60, 56);
                this.app.image(this.vidaC, 188, 79, 60, 56);

                //CONTADOR DE PUNTAJE Y DE PANTALLA
                this.puntaje += (1 / 45.0);
                //PINTAR PUNTAJE
                this.app.fill(155, 155, 155);
                this.app.noStroke();
                this.app.textFont(this.tipoPuntaje, 35);
                this.app.text(parseInt(this.puntaje), 1072, 165);


                //CANES TABLERO PINTAR
                for (let i = 0; i < this.tableros.length; i++) {
                    this.tableros[i].pintar();
                }

                //APAREZCAN ENEMIGOS
                if (this.app.frameCount % 98 == 0) {
                    let randomEnemigo = this.app.random([1, 2, 3]);
                    let y = this.app.random([185, 326, 461, 600])
                        //1
                    if (randomEnemigo == 1) {
                        this.enemigosA1.push(new Enemigo(this.app, 1535, y, this.enemigo1));
                    }

                    if (randomEnemigo == 2) {
                        this.enemigosA1.push(new Enemigo(this.app, 1535, y, this.enemigo2));
                    }

                    if (randomEnemigo == 3) {
                        this.enemigosA1.push(new Enemigo(this.app, 1535, y, this.enemigo3));
                    }
                }
                for (this.i = 0; this.i < this.enemigosA1.length; this.i++) {
                    this.enemigosA1[this.i].mover(1);
                    this.dibujarEnemigo(this.enemigosA1[this.i]);
                    this.enemigosA1[this.i].pintar();
                }

             
                this.pantalla = 3;
                break;

            //FINAL
            case 4:
                this.app.image(this.final, -210, 0, 1200, 700);
                this.pantalla = 4;
                break;

        }
        this.app.fill(0);
        this.app.text("x:" + this.app.mouseX + "y:" + this.app.mouseY, 300, 300);
    }

    click() {
        switch (this.pantalla) {

            //PANTALLA DE INICIO A NOMBRE
            case 0:
                if (this.app.mouseX > 680 && this.app.mouseX < 882 && this.app.mouseY > 369 && this.app.mouseY < 451) {
                    this.pantalla = 2;
                    break;
                }

            //PANTALLA DE INICIO A INSTRUCCIONES
            case 1:
                if (this.app.mouseX > 691 && this.app.mouseX < 880 && this.app.mouseY > 708 && this.app.mouseY < 745) {
                    this.pantalla = 1;
                    break;
                }

            //PANTALLA DE INSTRUCCIONES A TABLERO
            case 2:
                if (this.app.mouseX > 1374 && this.app.mouseX < 1439 && this.app.mouseY > 506 && this.app.mouseY < 552) {
                    this.pantalla = 3;
                    break;
                }

            //PANTALLA DE NOMBRE A TABLERO
            case 3:
                if (this.app.mouseX > 904 && this.app.mouseX < 956 && this.app.mouseY > 578 && this.app.mouseY < 613) {
                    this.pantalla = 3;

                    break;
                }

            //CASO PARA EL TABLERO. Area sensible del boton donde estan los canes, PARA LOS CLICKS
            case 4:
                //Boton de Boycan
                if (this.app.mouseX > 300 && this.app.mouseX < 477 && this.app.mouseY > 73 && this.app.mouseY < 185) {
                    console.log("yei");
                    this.botA = true;
                    this.botB = false;
                }
                //Boton de Girlcan
                if (this.app.mouseX > 555 && this.app.mouseX < 737 && this.app.mouseY > 73 && this.app.mouseY < 185) {
                    console.log("yetttt");
                    this.botA = false;
                    this.botB = true;
                }
                //RECORRER EL ARREGLO, PARA QUE SUELTE EN LA CUADRICULA DE TABLERO
                for (let i = 0; i < this.tableros.length; i++) {
                    
                    if (this.tableros[i] instanceof Tablero && this.tableros[i].validar(this.app.mouseX, this.app.mouseY)) {

                        if (this.botA == true) {
                          //  console.log("gggggg");
                            this.tableros[i] = new Boycan(this.app, this.tableros[i].x, this.tableros[i].y);
                            return;
                        }

                        if (this.botB == true) {
                            this.tableros[i] = new Girlcan(this.app, this.tableros[i].x, this.tableros[i].y);
                            return;
                        }
                        //return;
                    }
                }
                break;
        }
    }
    //PARA QUE PINTEN LOS ENEMIGOS
    dibujarEnemigo(e) {
        this.app.image(e.tipo, e.x, e.y);
    }
    //PARA QUE PINTE EL TEXTO
    texto() {
        this.textBox += this.app.key;
        console.log(this.app.key);
    }
    //SI SE TIENE QUE ELIMINAR EN LA PARTE DEL USER
    eliminar() {
        if (this.app.keyCode == this.app.BACKSPACE) {
            this.contador -= 1;
            this.textBox = this.textBox.slice(0, -1);
        }

        this.contador += 1;

        if (this.app.keyCode == this.app.ENTER) {
            this.textBox = this.textBox + "\n";
            this.contador = 0;

        }
        if (this.contador == 25 &&
            this.app.keyCode != this.app.BACKSPACE &&
            this.app.keyCode != this.app.ENTER) {
            this.textBox = this.textBox + "\n";
            this.contador = 0;
        }

    }
}