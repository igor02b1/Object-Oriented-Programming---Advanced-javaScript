var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(nomeDoCliente, senha, dinheiro) {
        this.nomeDoCliente = nomeDoCliente;
        this.senha = senha;
        this.dinheiro = dinheiro;
    }
    return ContaBancaria;
}());
var contabancaria = new ContaBancaria('Igor De Lima', 123456, 1000);
console.log("Nome do cliente: ".concat(contabancaria.nomeDoCliente));
console.log("A senha do cliente: ".concat(contabancaria.senha));
console.log("O cliente possui na conta: R$ ".concat(contabancaria.dinheiro));
