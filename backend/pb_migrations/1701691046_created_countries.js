/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "5nahrmotahpran1",
    "created": "2023-12-04 11:57:26.035Z",
    "updated": "2023-12-04 11:57:26.035Z",
    "name": "countries",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vv8lv8io",
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
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("5nahrmotahpran1");

  return dao.deleteCollection(collection);
})
