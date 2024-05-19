import Classe from '#models/classe'
import type { HttpContext } from '@adonisjs/core/http'

export default class ClasseController {
    public async index({}: HttpContext) {
      const classes = await Classe.all()
      return classes
    }
  
    public async show({ params }: HttpContext) {
      const id = params.id
      const classe = await Classe.findOrFail(id)
      return classe
    }
  
    public async store({ request }: HttpContext) {
      const data = request.only(['nome', 'descricao'])
      const classe = await Classe.create(data)
      return classe
    }
  
    public async update({ params, request }: HttpContext) {
      const id = params.id
      const data = request.only(['nome', 'descricao'])
      const classe = await Classe.findOrFail(id)
      classe.merge(data)
      await classe.save()
  
      return classe
    }
  
    public async destroy({ params }: HttpContext) {
      const id = params.id
      const classe = await Classe.findOrFail(id)
      await classe.delete()
  
      return { message: 'Classe excluída com sucesso' }
    }
  }