import Jogador from '#models/jogador'
import type { HttpContext } from '@adonisjs/core/http'

export default class JogadorController {
    public async index({}: HttpContext) {
      const jogadores = await Jogador.all()
      return jogadores
    }
  
    public async show({ params }: HttpContext) {
      const id = params.id
      const jogador = await Jogador.findOrFail(id)
      return jogador
    }
  
    public async store({ request }: HttpContext) {
      const data = request.only(['nome', 'idade', 'email', 'cpf', 'telefone'])
      const jogador = await Jogador.create(data)
      return jogador
    }
  
    public async update({ params, request }: HttpContext) {
      const id = params.id
      const data = request.only(['nome', 'idade', 'email', 'cpf', 'telefone'])
      const jogador = await Jogador.findOrFail(id)
      jogador.merge(data)
      await jogador.save()
      return jogador
    }
  
    public async destroy({ params }: HttpContext) {
      const id = params.id
      const jogador = await Jogador.findOrFail(id)
      await jogador.delete()
      return { message: 'Jogador excluído com sucesso' }
    }
  }