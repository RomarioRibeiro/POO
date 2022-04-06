export class Personagem{
    nome:  string = '';
    energia  = 10;
    ataque = 90;
    vida = 80;
    defesa = 20;
constructor(){
    this.nome = 'Goku 1';
    this.energia = 50;
    this.ataque = 100;
}

}

let goku: Personagem;
goku = new Personagem();
goku.energia = 100;
console.log('personagem:>>' , goku);







