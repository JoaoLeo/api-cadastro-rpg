import Poder from '#models/poder'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await Poder.createMany([
      {nome: "teste1", descricao: "desc1"},
      {nome: "teste2", descricao: "desc2"},
      {nome: "teste3", descricao: "desc3"},
      {nome: "teste3", descricao: "desc4"},
    ])
  }
}