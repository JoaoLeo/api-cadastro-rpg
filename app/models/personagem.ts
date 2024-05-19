import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Classe from './classe.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Jogador from './jogador.js'

export default class Personagem extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: String

  @column()
  declare classeId: Number

  @column()
  declare jogadorId: Number

  @column()
  declare historia: String

  @belongsTo(() => Classe, {
    foreignKey: 'classeId'
  })
  declare classe: BelongsTo<typeof Classe>


  @belongsTo(() => Jogador, {
    foreignKey: 'jogadorId'
  })
  declare jogador: BelongsTo<typeof Jogador>
}