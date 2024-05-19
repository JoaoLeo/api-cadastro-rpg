import Poder from '#models/poder'
import type { HttpContext } from '@adonisjs/core/http'

export default class PoderController {
    public async index({}: HttpContext) {
      const poderes = await Poder.all()
      return poderes
    }
  
    public async show({ params }: HttpContext) {
      const id = params.id
      const poder = await Poder.findOrFail(id)
      return poder
    }
  
    public async store({ request }: HttpContext) {
      const data = request.only(['nome', 'descricao'])
      const poder = await Poder.create(data)
      return poder
    }
  
    public async update({ params, request }: HttpContext) {
      const id = params.id
      const data = request.only(['nome', 'descricao'])
      const poder = await Poder.findOrFail(id)
      poder.merge(data)
      await poder.save()
      return poder
    }
  
    public async destroy({ params }: HttpContext) {
      const id = params.id
      const poder = await Poder.findOrFail(id)
      await poder.delete()
      return { message: 'Poder excluído com sucesso' }
    }
  }