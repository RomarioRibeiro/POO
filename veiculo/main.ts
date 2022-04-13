import { Chevolet } from "./chevolet";
import { Veiculo } from "./veiculo";




let chevolet: Veiculo = new Chevolet(1000, "manual", "src", "celta", "chevolet");


console.log('Veiculo', chevolet.status());
