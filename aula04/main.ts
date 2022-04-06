import { Guerreiro } from "./guerreiro";
import { Mago } from "./mago";
import { Personagem } from "./personagem4";
import { Sacedote } from "./sacedote";



let mago: Personagem = new Mago('Gandolf');
let guerreiro: Personagem = new Guerreiro('Aragorn Guerreiro');
let sacedote: Personagem = new Sacedote('Bilbo Sacedote');


//console.log("Mago: ", mago);
//console.log("Guerreiro: ", guerreiro);
//console.log("Sacedote: ", sacedote);//!

console.log(`Mago:  ${{mago}}`)
