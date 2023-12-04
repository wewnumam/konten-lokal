/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("z45p7pzbr1xt3v7")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vxlksgmd",
    "name": "developer",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "o1wxdrk56g7h17h",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("z45p7pzbr1xt3v7")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vxlksgmd",
    "name": "developers",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "o1wxdrk56g7h17h",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
