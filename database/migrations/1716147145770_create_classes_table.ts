import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'classes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome', 100)
      table.string('descricao', 500)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}