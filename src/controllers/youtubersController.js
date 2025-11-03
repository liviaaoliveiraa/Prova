import * as youtubersModel from './../models/youtubersModel.js'

export const listarTodos = async (req, res) => {
try{
    const youtubers = await youtubersModel.encontreTodos();

    if(!youtubers || youtubers.lenght === 0) {
        res.status(404).json({
            total:0,
            mensagem:"Não há youtubers na lista! :("
        })
    }

    res.status(200).json({
        total:youtubers.length,
        mensagem:"Lista de youtubers!:)",
        youtubers
    })
}catch (error) {
    res.status(500).json({
        erro:"Erro interno no Servido :O",
        detalhes: error.message,
        status:500
    })
}
}