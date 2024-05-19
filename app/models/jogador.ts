import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Jogador extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: String

  @column()
  declare idade: Number

  @column()
  declare email: String

  @column()
  declare cpf: String

  @column()
  declare telefone: String
}