import express from "express"
import conectarBancoDados from "./database/db.js"
import routes from './routes.js'
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)


conectarBancoDados()
   .then(() => {app.listen(8800, () => console.log("SERVIDOR INICIADO COM SUCESSO!"))})
   .catch((erro) => console.log(erro, "SERVIDOR NÃO INCIADO!"))

