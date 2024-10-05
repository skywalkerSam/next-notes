/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8v3zi95o2i4qdu1")

  collection.indexes = []

  // remove
  collection.schema.removeField("u4fqn3q4")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8v3zi95o2i4qdu1")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_e33295R` ON `notes` (`note_id`)"
  ]

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "u4fqn3q4",
    "name": "note_id",
    "type": "number",
    "required": false,
    "presentable": true,
    "unique": false,
    "options": {
      "min": 0,
      "max": 99999999,
      "noDecimal": true
    }
  }))

  return dao.saveCollection(collection)
})
