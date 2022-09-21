class Paciente {
    public nome: string;
    public Doenca: string;
    public estado: string;
    public idade: number;

    constructor(nome: string, Doenca: string, estado: string,idade: number ){
        this.nome = nome;
        this.Doenca = Doenca;
        this.estado = estado;
        this.idade = idade;
    }
}
    const paciente = new Paciente('José', 'Cancer', 'Grave', 26);

    console.log(`Nome do paciente: ${paciente.nome}`);
    console.log(`Doença: ${paciente.Doenca}`);
    console.log(`Estado do paciente: ${paciente.estado}`);
    console.log(`Idade do paciente: ${paciente.idade}`);
