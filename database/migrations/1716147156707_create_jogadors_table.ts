import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'jogadors'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome', 100)
      table.integer('idade')
      table.string('email')
      table.string('cpf')
      table.string('telefone')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}