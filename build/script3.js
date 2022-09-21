var Paciente = /** @class */ (function () {
    function Paciente(nome, Doenca, estado, idade) {
        this.nome = nome;
        this.Doenca = Doenca;
        this.estado = estado;
        this.idade = idade;
    }
    return Paciente;
}());
var paciente = new Paciente('José', 'Cancer', 'Grave', 26);
console.log("Nome do paciente: ".concat(paciente.nome));
console.log("Doen\u00E7a: ".concat(paciente.Doenca));
console.log("Estado do paciente: ".concat(paciente.estado));
console.log("Idade do paciente: ".concat(paciente.idade));
