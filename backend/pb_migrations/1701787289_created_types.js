/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "q0f7y33m89fjdz5",
    "created": "2023-12-05 14:41:29.021Z",
    "updated": "2023-12-05 14:41:29.021Z",
    "name": "types",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "kmelqmdi",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("q0f7y33m89fjdz5");

  return dao.deleteCollection(collection);
})
