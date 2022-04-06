import {Personagem} from './personagem3'
import  prompt  from "prompt-sync";


let person: Personagem = new Personagem('Goku', 10, 20, 30, 40);
let teclado = prompt();
let option: number = 0;
console.log(person);

console.log('Personagem:  ${person.nome}');
console.log('Personagem:  ${person.energia}');
console.log('Personagem:  ${person.ataque}');
console.log('Personagem:  ${person.defesa}');
console.log('Personagem:  ${person.vida}');

while (option !== 9) {
    console.log('===========Personagem============');
    console.log('1. Treinar Ataque     🗡️         ');
    console.log('2. Treinar Defesa     🛡️         ');
    console.log('3. Descansar          🧙         ');
    console.log('4. Entrar em Batalha  🔫         ');
    console.log('9. Sair               👉         ');
    console.log('=================================+');

    option = +teclado('Ecolha uma ação: ');

    switch (option) {
        case 1:
            person.treinarAtaque();
            console.log(person.status());
            break;
        case 2:
            person.treinarDefesa();
            console.log(person.status());
            break;
        case 3:
            let horas: number = +teclado('Digite o número de horas: ');
            person.dencansar(horas);
            console.log(person.status());
            break;
        case 4:
            let rest: number = person.batalhar();
            console.log(`Esta batalha custou ${rest.toFixed()} de energia`);
            console.log(person.status());
            break;
        default:
            
            break;
    }
}


