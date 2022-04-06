import { Personagem } from './personagem4';
import { Util } from "./utils";


export class Guerreiro extends Personagem {
   
    private _forca: number;
    private _agilidade: number;

    constructor (nome: string){
        super(nome);
        this. _forca = +Util.randomizar(100, 1_00).toFixed(1);
        this._agilidade = +Util.randomizar(10, 2_00).toFixed(1);
    }
}