/**
 * $or
 * $and
 * $not
 * $in
 * $exists
 * $regex
 * $lt
 * $gt
 * Array Query operators -> $all, $size, $elemMatch
 */


//-------------------------------------------
// db.getCollection("persons")
//     .find({"gender":"male"})
//     .count(); //507


//-----------------operators-----------------------------
// {"favoritesFruit":{"$ne":"apple"}}
// {"age":{"$gt":25}}
// {"eyeColor":{"$in":["green","bluee"]}}


//--------------------------------------------------------
// db.getCollection('persons')
//     .find({"age":{"$gte":25})
//     .count(); //750



// db.getCollection('persons')
//     .find({"age":{"$gte":25,"$lte":30}}) //250


// db.getCollection('persons')
//     .find({"registered":{"$gt":ISODate("2023-01-12")}})


//--------------------------$in $nin------------------------

// {"eyeColor":{"$in":["green","blue"]}} -> green ve blue olanları lisleler
// {"favoriteFruit":{"$nin":["banana","apple"]}}->banana ve apple hariçi listeler

// db.getCollection("persons")
//     .find({"age":{"$in:[21,22]"}})
//     .count()

// db.getCollection("persons")
//     .find({"age":{"$nin:[21,22]"}})
//     .count()



//----------------and-----------

// {"$and":[{"gender":"male"},{"age":25}]}
// {"$and":[{"gender":{"$ne":25}},{"age":{"$gte":20}}]}


// db.getCollection("persons")
//     .find({"$and":[{"gender":"female"},{favoriteFruit:"banana"}]})


// db.getCollection("persons")
// .find({age:{$ne:25},age:{$gte:25}})
// .sort({age:1})
// .count()

//---------------------or-------------------------
// db.getCollection("persons")
//     .find({$or:[{eyeColor:"green"},{eyeColor:"blue"}]})

// db.getCollection("persons")
//     .find({eyeColor:{$in:["green","blue"]}})

//---------------------query embedded dcoument-----------------

// db.getCollection("persons")
//     .find({"company.location.country":"USA"})

// db.getCollection("persons")
//     .find({company.location.country:"USA"}) --> tırnakların olmamasından dolayı çalışmayacaktır 

//----------------objedeki dizi içinden index vererek eleman alabiliriz

// db.getCollection("persons")
//     .find({"tags.0":"ad"}) //->person kolaksiyonunda tags arayının değeri ad olan objeleri listele

//--------------------------all size -------------------

// db.getCollection("persons")
//     .find({$tags:{$all:["id","ad"]}}) //-> içerisinde id ve ad olanları listele


// db.getCollection("persons")
//     .find({$tags:{$size:4}) //-> eleaman sayısı 4 olanları listele


//--------------------nested document----------------

// {"friends.name":"Lora"}

// {friends:{"name":"Lora","age":23}}

// db.getCollection('persons')
//     .find({"friends.name":{$gt:20,$lt:25}})


// db.getCollection('persons')
//     .find({friends:{"name":{$gt:20,$lt:25}}})


//------------elemMatch---------------------arrayField

// diziler ve içerisinde obje barındıracak 

// db.etCollection('persons')
//     .find({friends:{elemMatch:{"name":"Lora","age":23}}})



//-------------------exist  type-------------------------------

// {tags:{$exists:true}}
// {tags:{$exists:false}}


// {post:{$type:"int"}}
// {name:{$type:2}}
// {quantity:{$type:["int","double"]}}
// {index:{$type:"int", $eq:5}}


// db.getCollection("persons")
// .find({surname:{$exists:true}})
// .count() //0
//sorgulanan koleksiyonda surname field yok
// db.getCollection("persons")
// .find({surname:{$exists:false}})
// .count() //1000


// db.getCollection('persons')
// .find({index:{$type:"double"}})


//---------------------filter-------------------

// db.getCollection('persons')
// .find({},{name:1,age:1,ayColor:1})

// db.getCollection('persons')
// .find({name:"Muhammed Ali"},{"_id":0,name:1,age:1})

// db.getCollection('persons')
//     .find({},{password:0,email:0})


//----------------------regex-------------------

// {<fieldNAme>:{$regex:/pattern/<options>}}
// {<fieldNAme>:{$regex:/pattern/,$options:"options":}}

// {city:{"$regex":/ton/i}}
// {tags:{$regex:/âd$/,options:"i"}}
// {state:{"$regex":"ca"}}

// db.getCollection('persons')
//     .find({name:{regex:/rel/, $options:"i"}})

// db.getCollection('persons')
//     .find({name:{regex:/^Aur/})
// db.getCollection('persons')
//     .find({name:{regex:/Aur/})