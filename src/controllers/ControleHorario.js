import Horario from "../models/Horario.js"

async function mostrarHorarios(resquest, response){
   const horario = await Horario.find()
   return response.json(horario)
}

async function criarHorario(request, response){
   const horario = request.body
   const novoHorario = await Horario.create(horario)
   return response.json(novoHorario)
}

export {mostrarHorarios, criarHorario} 