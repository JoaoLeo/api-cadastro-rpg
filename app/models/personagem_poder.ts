
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Personagem from './personagem.js'
import Poder from './poder.js'

export default class PersonagemPoder extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare personagemId: number

  @column()
  declare poderId: number

  @belongsTo(() => Personagem, {
    foreignKey: 'personagemId'
  })
  declare personagem: BelongsTo<typeof Personagem>

  @belongsTo(() => Poder,{
    foreignKey: 'poderId'
  })
  declare poder: BelongsTo<typeof Poder>
}