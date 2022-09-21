class ContaBancaria {
    public nomeDoCliente: string;
    public senha: number;
    public dinheiro: number;
 
    constructor(nomeDoCliente: string, senha: number, dinheiro: number){
        this.nomeDoCliente = nomeDoCliente;
        this.senha = senha;
        this.dinheiro = dinheiro
    }
}
    const contabancaria = new ContaBancaria ('Igor De Lima', 123456, 1000);

    console.log(`Nome do cliente: ${contabancaria.nomeDoCliente}`);
    console.log(`A senha do cliente: ${contabancaria.senha}`);
    console.log(`O cliente possui na conta: R$ ${contabancaria.dinheiro}`);
