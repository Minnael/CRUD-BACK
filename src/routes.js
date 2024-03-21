import {Router} from "express"
import { mostrarHorarios, criarHorario} from "./controllers/ControleHorario.js"

const routes = Router()

routes.get('/', mostrarHorarios)
routes.post('/', criarHorario)

export default routes