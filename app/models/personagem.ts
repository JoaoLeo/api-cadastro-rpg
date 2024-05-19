import { BaseModel, belongsTo, column, manyToMany } from '@adonisjs/lucid/orm'
import Classe from './classe.js'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'
import Jogador from './jogador.js'
import Poder from './poder.js'

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

  @manyToMany(() => Poder, {
    pivotTable: 'personagem_poders',
    pivotForeignKey: 'personagem_id',
    pivotRelatedForeignKey: 'poder_id',
  })
  declare poderes: ManyToMany<typeof Poder>
}