/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("z45p7pzbr1xt3v7")

  collection.listRule = "is_public = true"
  collection.viewRule = "is_public = true"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("z45p7pzbr1xt3v7")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
})
