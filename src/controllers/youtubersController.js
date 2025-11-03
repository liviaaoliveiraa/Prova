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
} ;

export const listarUm = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const youtuber = await youtubersModel.encontreUm(id);

        if (!youtuber) {
            return res.status(404).json({
                erro:'youtuber Não encontrado',
                mensagem:'Verifique o id do youtuber',
                id: id
            })
        }

        res.status(200).json({
            message:'youtuber encontrado',
            youtuber
        })

    }catch (error) {
        res.status(500).json({
            erro:"Erro interno no servidor",
            detalhes: error.message,
            status:500
        })
    }
} ;

export const criar = async (req, res) => {
    try {
        const { nome, canal, categoria, pais } = req.body;

        const data = req.body;

        const camposObrigatorios = [ 'nome', 'canal', 'pais' ];

const faltando = camposObrigatorios.filter(campo => !data[campo]);

if (faltando.length > 0) {
  return res.status(400).json({
    erro: `Os seguintes campos são obrigatórios: ${faltando.join(', ')}.`
  });
}

const novoYoutuber = await youtubersModel.criar(req.body)

res.status(201).json({
    mensagem:'Youtuber criado com sucesso',
    youtuber: novoYoutuber
})

    }catch (error) {
        res.status(500).json({
            erro: 'Erro ao criar youtuber',
            detalhes:error.message
        })
    }
} ;

export const deletar = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const youtuberExiste = await comidasModels.encontreUm(id);

        if (!comidaExiste) {
            return res.status(404).json({
                erro: 'Comida não econtrado com esse id',
                id: id
            })
        }

        await comidasModels.deletar(id);

        res.status(200).json({
            mensagem: ' Comida apagada com sucesso!',
            comidaRemovida: comidaExiste
        })

    }catch (error) {
        res.status(500).json({
            erro: ' Erro ao apagar a comida!',
            detalhes: error.message
        })
    }
}

export const atualizar = async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const dados = req.body;
  
      const comidaExiste = await comidasModels.encontreUm(id);
  
      if (!comidaExiste) {
        return res.status(404).json({
          erro: 'Comida não existe',
          id: id
        });
      }
  
      const comidaAtualizada = await comidasModels.atualizar(id, dados);
  
      res.status(200).json({
        mensagem: 'Comida atualizada com sucesso!',
        comida: comidaAtualizada
      });
  
    } catch (error) {
      res.status(500).json({
        erro: 'Erro ao atualizar a comida!',
        detalhes: error.message
      });
    }
  };
  

