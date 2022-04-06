import { get } from "prompt";
import  prompt  from "prompt-sync";

export  class Personagem {
    constructor(
        private _nome : string ,
       private _energia: number,
       private _ataque: number,
   private _vida : number,
   private _defesa: number,){

    }


    
    public get nome() : string {
        return this._nome;
    }
    
    
    public set nome(nome : string) {
        this. _nome= nome;
    }
    
    
    public get energia() : number {
        return this._energia;
    }
    
    
    public set energia(energia : number) {
        this._energia = energia ;
    }
    
    
    public get defesa() : number {
        return this._defesa;
    }
    
    
    public set defesa(defesa : number) {
        this._defesa = defesa;
    }
    

    
    public get ataque() : number {
        return this._ataque;
    }
    
    
    public set ataque(ataque : number) {
        this._ataque = ataque;
    }
    
    
    public get vida() : number {
        return this._vida
    }
    
    
    public set vida(vida : number) {
        this._vida = vida;
    }
    

    status(): string{
return(
    'Guerreiro \n' +
    "\nNome: " + this.nome +
    ("\nEnergia: " + this.energia.toFixed(1) )+
("\nDefesa: " + this.defesa.toFixed(1) )+
("\nAtaque: " + this.ataque.toFixed(1) )
);
    }
    
    treinarAtaque(): void{
         this.ataque += Math.random() * 7;
        this.energia -= Math.random() * 10;
        this.isDead();
        if(this.ataque >100){
            this.ataque = 100;  
    }
        }
    
    treinarDefesa(): void{
        this.defesa += this.randomizar(5);
        this.energia -= this.randomizar(10);
        this.isDead();
        if(this.defesa >100 ){
    this.defesa = 100;
    this.validador();
    
        }
        return this.isDead();
    }
    
    dencansar(horas: number): void{
        this.energia += this.randomizar(7);
        if(this.energia > 100){
        this.energia = 100;
       this.validador();
        }
    
    }
    batalhar(): number{ 
        let percaBatalha: number = this.randomizar(10);
        this.energia -= percaBatalha;
        this.isDead();
        return percaBatalha
    
        }

        isDead(){
            if(this.energia < 0){
                console.log('Você morreu... 💀');
            }
            else {}
        }

        validador(){
            console.log('Você passo do limite ')
        }

        private  randomizar (fator:number): number {
            return (Math.random () * fator);
        }
}





