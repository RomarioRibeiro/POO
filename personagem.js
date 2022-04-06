"use strict";
class Personagem {
    constructor() {
        this.nome = '';
        this.energia = 10;
        this.ataque = 90;
        this.vida = 80;
        this.defesa = 20;
        this.nome = 'Goku 1';
        this.energia = 50;
        this.ataque = 100;
    }
}
let goku;
goku = new Personagem();
goku.energia = 100;
console.log('personagem:>>', goku);
