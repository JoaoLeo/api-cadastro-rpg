import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Poder extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: String

  @column()
  declare descricao: String
}