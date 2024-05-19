import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'personagem_poders'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('personagem_id')
      table.integer('poder_id')

      table
      .foreign('personagem_id')
      .references('id')
      .inTable('personagems')

      table
      .foreign('poder_id')
      .references('id')
      .inTable('poders')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}