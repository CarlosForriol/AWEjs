class Figura{
    color = "#000000"
    constructor(x, y,color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }

      esBlanca(){
          return this.color ==="#FFFFFF"; 
      }
      pintar(){
          console.log("Nos movemos en la posicion (["+this.x+"], ["+this.y+"])")
          console.log("Cogemos la pintura de color ["+this.color+"]")
      }
}
class Elipse extends Figura{
    constructor(x, y,rh, rv) {
        super(x,y)
        this.rh = rh;
        this.rv = rv;
    }
    pintar() {
        super.pintar();
        console.log("Pintamos elipse de radios [" + this.rh + "] y [" + this.rv+"]");
    }
}
class Circulo extends Elipse {
    constructor(x, y, r) {
        super(x, y, r, r);
    }
}
let figura = new Figura(2, 3,"#FFFFFF");
let elipse = new Elipse(4, 5, 6, 7);
let circulo = new Circulo(1, 2, 3);
figura.pintar();
console.log(figura.esBlanca());

elipse.pintar();
console.log(elipse.esBlanca());

circulo.pintar();
console.log(circulo.esBlanca());