import { Veiculo } from "./veiculo";


export class Chevolet extends Veiculo{
    private _potecia: number;
    private _cambio: string;


    constructor(potencia: number, cambio: string, modelo: string, tipo:string, marca:string){
        super(modelo , tipo, marca)

        this._potecia = potencia;
        this._cambio = cambio;
    }

    status(): string{
        return(
            'Veiculo \n' +
            "\nMarca: " + this._marca +
            ("\nModelo : " + this._modelo )+
        ("\nTipo : " + this._tipo )+
        ("\nPotencia : " + this._potecia.toFixed(1))+
        ("\nCambio : " + this._cambio )
        );
            }
}