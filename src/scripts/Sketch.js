new p5 (function(app){
    let logica;
    app.setup = function(){
        app.createCanvas(1530,749);
        logica = new Logica (app);
    }

    app.draw = function(){
        logica.pintar();
    }


    app.mousePressed = function(){
        logica.click();
    }

    app.keyTyped = function(){
        logica.texto();  
    }
 
    app.keyPressed= function(){
        logica.eliminar();
    }


});
