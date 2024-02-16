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

const usuarioEsquema = new mongoose.Schema({
   _id: {
      type: Number,
      default: () => numeroAleatorio()
   },
   nome: {
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true
   },
   fone: {
      type: Number,
      required: true
   },
   data_nascimento: {
      type: Date,
      required: true
   },
})

export default mongoose.model('Usuario', usuarioEsquema)
