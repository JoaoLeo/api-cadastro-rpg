import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'personagems'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome', 100)
      table.integer('classe_id')
      table.integer('jogador_id')
      table.string('historia', 500)

      table
      .foreign('classe_id')
      .references('id')
      .inTable('classes')

      table
      .foreign('jogador_id')
      .references('id')
      .inTable('jogadors')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}