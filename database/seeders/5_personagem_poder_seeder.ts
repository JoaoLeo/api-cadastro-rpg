import PersonagemPoder from '#models/personagem_poder'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await PersonagemPoder.createMany([
      {personagemId: 1, poderId: 1},
      {personagemId: 1, poderId: 2},
      {personagemId: 2, poderId: 1},
      {personagemId: 3, poderId: 3},
      {personagemId: 4, poderId: 4},
      {personagemId: 5, poderId: 2},
    ])
  }
}