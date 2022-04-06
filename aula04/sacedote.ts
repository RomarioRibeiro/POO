import { Personagem } from './personagem4';
import { Util } from "./utils";


export class Sacedote extends Personagem{
   
    private _intelecto: number;
    private _velocidade: number;

    constructor (nome: string){
       super(nome);
        this. _intelecto = +Util.randomizar(100, 1_00).toFixed(1);
        this._velocidade = +Util.randomizar(10, 2_00).toFixed(1);
    }
}