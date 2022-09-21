class Patinete {
    public modelo: string;
    public TemRoda: string;
    public Motorizada: string;
    public Tamanho: number;
 
    constructor(modelo: string, TemRoda: string,Motorizada: string,Tamanho: number){
        this.modelo = modelo;
        this.TemRoda = TemRoda;
        this.Motorizada = Motorizada;
        this.Tamanho = Tamanho
    }
}
    const patins = new Patinete('Turbo', 'sim','sim',1.70);
 
    console.log(`O modelo do patinete: ${patins.modelo}`);
    console.log(`O patinete possui Roda: ${patins.TemRoda}`);
    console.log(`O patinete é motorizado: ${patins.Motorizada}`);
    console.log(`O tamanho do patinete é de: ${patins.Tamanho}`);