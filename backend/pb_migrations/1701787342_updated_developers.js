/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o1wxdrk56g7h17h")

  collection.name = "authors"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o1wxdrk56g7h17h")

  collection.name = "developers"

  return dao.saveCollection(collection)
})
