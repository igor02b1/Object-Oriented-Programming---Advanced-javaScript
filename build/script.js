var Patinete = /** @class */ (function () {
    function Patinete(modelo, TemRoda, Motorizada, Tamanho) {
        this.modelo = modelo;
        this.TemRoda = TemRoda;
        this.Motorizada = Motorizada;
        this.Tamanho = Tamanho;
    }
    return Patinete;
}());
var patins = new Patinete('Turbo', 'sim', 'sim', 1.70);
console.log("O modelo do patinete: ".concat(patins.modelo));
console.log("O patinete possui Roda: ".concat(patins.TemRoda));
console.log("O patinete \u00E9 motorizado: ".concat(patins.Motorizada));
console.log("O tamanho do patinete \u00E9 de: ".concat(patins.Tamanho));
