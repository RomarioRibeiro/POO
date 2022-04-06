import { Personagem} from './personagem4';
import { Util } from "./utils";


export class Mago extends Personagem{
    //private _nome: string;
   
    private _fe: number;
    private _vitalidade: number;

    constructor (nome: string){
        super(nome);
        this. _fe = +Util.randomizar(100, 1_00).toFixed(1);
        this._vitalidade = +Util.randomizar(10, 2_00).toFixed(1);
    }
}