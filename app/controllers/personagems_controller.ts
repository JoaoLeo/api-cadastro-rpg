import Personagem from '#models/personagem'
import type { HttpContext } from '@adonisjs/core/http'
export default class PersonagemController {
    public async index({}: HttpContext) {
      const personagens = await Personagem.all()
      return personagens
    }
  
    public async show({ params }: HttpContext) {
      const id = params.id
      const personagem = await Personagem.query().preload('classe').preload('jogador').where('id', id).firstOrFail()
      return personagem
    }
  
    public async store({ request }: HttpContext) {
      const data = request.only(['nome', 'classeId', 'jogadorId', 'historia'])
      const personagem = await Personagem.create(data)
      return personagem
    }
  
    public async update({ params, request }: HttpContext) {
      const id = params.id
      const data = request.only(['nome', 'classeId', 'jogadorId', 'historia'])
      const personagem = await Personagem.findOrFail(id)
      personagem.merge(data)
      await personagem.save()
      return personagem
    }
  
    public async destroy({ params }: HttpContext) {
      const id = params.id
      const personagem = await Personagem.findOrFail(id)
      await personagem.delete()
      return { message: 'Personagem excluído com sucesso' }
    }
  }