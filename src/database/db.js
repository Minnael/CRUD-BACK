import mongoose from "mongoose";

async function conectarBancoDados(){
   await mongoose.connect(
      "mongodb+srv://root:1324@cluster1.jxnsexl.mongodb.net/?retryWrites=true&w=majority"
   )
}

export default conectarBancoDados