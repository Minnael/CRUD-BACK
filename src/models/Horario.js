import mongoose from "mongoose"

const numeros = new Set();

function numeroAleatorio() {
    let numero;
    do {
        numero = Math.floor(Math.random() * 1000) + 1;
    } while (numeros.has(numero));

    numeros.add(numero);
    return numero;
}

const horariosEsquema = new mongoose.Schema({
   _id: {
      type: Number,
      default: () => numeroAleatorio()
   },
   horario: {
      type: String,
      required: true
   },
})

export default mongoose.model('Horario', horariosEsquema)