import Classe from '#models/classe'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return Classe.createMany([
      {nome: "teste1", descricao: "desc1"},
      {nome: "teste2", descricao: "desc2"},
      {nome: "teste3", descricao: "desc3"},
      {nome: "teste4", descricao: "desc4"},
      {nome: "teste5", descricao: "desc5"},
    ])
  }
}