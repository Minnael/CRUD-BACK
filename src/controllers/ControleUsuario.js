import Usuario from "../models/Usuario.js"


async function buscarUsuarios(resquest, response){
   const usuario = await Usuario.find()
   return response.json(usuario)
}

async function criarUsuario(request, response){
   const usuario = request.body
   const novoUsuario = await Usuario.create(usuario)
   return response.json(novoUsuario)
}

async function deletarUsuario(request, response){
   const id = request.params.id
   await Usuario.findByIdAndDelete({_id: id})
   return response.status(200).json({response: "Usuario Deletado!"})
}

async function editarUsuario(request, response){
   const usuario = await Usuario.findByIdAndUpdate(request.params.id, {
      nome: request.body.nome,
      email: request.body.email,
      fone: request.body.fone,
      data_nascimento: request.body.data_nascimento
   })
   return response.status(200).json({response: "Usuario Editado!"})
}


export {buscarUsuarios, criarUsuario, deletarUsuario, editarUsuario} 