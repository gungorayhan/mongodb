/**
 * insert()
 * insertOne()
 * insertMany()
 */

//------------insert--------------

db.collection.insert()

db.getCollection("first").insert({}) //bir adet boş document eklemiş oluruz
db.getCollection("first").insert([{},{},{}]) //3 adet boş document eklemiş oluruz


//-------------insertOne------------
// db.collection("first").insertOne({})
db.collection("first").insertOne({
    "string":"HelloWorld",
    "boolean":true,
    "number":10,
    "numberInt":NumberInt(100),
    "numberLong":NumberLong(24232156165),
    "date":new Date(),
    "object":{
        "a":10,
        "b":true
    },
    "array":[1, 2, 3]
})


//-------------insertMany------------
db.collection("first").insertMany([
    {},
    {},
    {}
])