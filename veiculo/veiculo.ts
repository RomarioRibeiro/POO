export class Veiculo{

    protected _modelo: string;
    protected _tipo: string;
    protected _marca: string;

    constructor(modelo: string, tipo:string, marca:string){
        this._marca = marca;
        this._modelo = modelo;
        this._tipo = tipo;

    }
    status(): string{
        return(
            'Veiculo \n' +
            "\nMarca: " + this._marca +
            ("\nModelo : " + this._modelo )+
        ("\nTipo : " + this._tipo )
        );
            }

}