/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("z45p7pzbr1xt3v7")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3f2lhqn8",
    "name": "thumbnail",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/png",
        "image/vnd.mozilla.apng",
        "image/jpeg",
        "image/gif",
        "image/webp"
      ],
      "thumbs": [
        "480x720"
      ],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("z45p7pzbr1xt3v7")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3f2lhqn8",
    "name": "thumbnail",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
})
