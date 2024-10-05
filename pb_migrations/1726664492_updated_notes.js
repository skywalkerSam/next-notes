/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8v3zi95o2i4qdu1")

  // remove
  collection.schema.removeField("nl9x4n8g")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8v3zi95o2i4qdu1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nl9x4n8g",
    "name": "timestamp",
    "type": "date",
    "required": false,
    "presentable": true,
    "unique": false,
    "options": {
      "min": "2024-07-21 12:00:00.000Z",
      "max": "2077-07-21 12:00:00.000Z"
    }
  }))

  return dao.saveCollection(collection)
})
