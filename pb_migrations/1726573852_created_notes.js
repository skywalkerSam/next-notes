/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "8v3zi95o2i4qdu1",
    "created": "2024-09-17 11:50:52.683Z",
    "updated": "2024-09-17 11:50:52.683Z",
    "name": "notes",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
        "system": false,
        "id": "mxfq5lo1",
        "name": "note",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
      },
      {
        "system": false,
        "id": "bl5f6xhf",
        "name": "media",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [],
          "thumbs": [],
          "maxSelect": 1,
          "maxSize": 5242880,
          "protected": false
        }
      }
    ],
    "indexes": [
      "CREATE UNIQUE INDEX `idx_e33295R` ON `notes` (`note_id`)"
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("8v3zi95o2i4qdu1");

  return dao.deleteCollection(collection);
})
