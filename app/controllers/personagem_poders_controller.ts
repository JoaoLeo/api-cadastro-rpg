import PersonagemPoder from '#models/personagem_poder'
import type { HttpContext } from '@adonisjs/core/http'
export default class PersonagemPodersController {
    public async index({}: HttpContext) {
      const personagemPoderes = await PersonagemPoder.all()
      return personagemPoderes
    }
  
    public async show({ params }: HttpContext) {
      const id = params.id
      const personagemPoder = await PersonagemPoder.query().preload('personagem').preload('poder').where('id', id).firstOrFail()
      return personagemPoder
    }
  
    public async store({ request }: HttpContext) {
      const data = request.only(['personagemId', 'poderId'])
      const personagemPoder = await PersonagemPoder.create(data)
      return personagemPoder
    }
  
    public async update({ params, request }: HttpContext) {
      const id = params.id
      const data = request.only(['personagemId', 'poderId'])
      const personagemPoder = await PersonagemPoder.findOrFail(id)
      personagemPoder.merge(data)
      await personagemPoder.save()
      return personagemPoder
    }
  
    public async destroy({ params }: HttpContext) {
      const id = params.id
      const personagemPoder = await PersonagemPoder.findOrFail(id)
      await personagemPoder.delete()
      return { message: 'Relação entre personagem e poder excluída com sucesso' }
    }
  }