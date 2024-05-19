import Jogador from '#models/jogador'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await Jogador.createMany([
      {nome: "teste1", idade: 19, email: "teste1@gmail.com",cpf: "12345678911", telefone: "61112345678"},
      {nome: "teste2", idade: 19, email: "teste2@gmail.com",cpf: "12345678911", telefone: "61112345678"},
      {nome: "teste3", idade: 19, email: "teste3@gmail.com",cpf: "12345678911", telefone: "61112345678"},
      {nome: "teste4", idade: 19, email: "teste4@gmail.com",cpf: "12345678911", telefone: "61112345678"},
      {nome: "teste5", idade: 19, email: "teste5@gmail.com",cpf: "12345678911", telefone: "61112345678"},
      {nome: "teste6", idade: 19, email: "test6e@gmail.com",cpf: "12345678911", telefone: "61112345678"},
    ])
  }
}