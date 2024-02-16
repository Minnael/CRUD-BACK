import {Router} from "express"
import { buscarUsuarios, criarUsuario, deletarUsuario, editarUsuario } from "./controllers/ControleUsuario.js"

const routes = Router()

routes.get('/', buscarUsuarios)
routes.post('/', criarUsuario)
routes.delete('/:id', deletarUsuario)
routes.put('/:id', editarUsuario)

export default routes