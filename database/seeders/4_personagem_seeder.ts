import Personagem from '#models/personagem'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await Personagem.createMany([
      {nome: "teste1", classeId: 1, jogadorId: 1, historia: "teste teste teste teste"},
      {nome: "teste2", classeId: 2, jogadorId: 2, historia: "teste teste teste teste"},
      {nome: "teste3", classeId: 3, jogadorId: 3, historia: "teste teste teste teste"},
      {nome: "teste4", classeId: 4, jogadorId: 4, historia: "teste teste teste teste"},
      {nome: "teste5", classeId: 5, jogadorId: 5, historia: "teste teste teste teste"},
    ])
  }
}