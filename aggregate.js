/** 
 * ---------------Aggregation-------------
 * $match
 * $group
 * $project
 * $sort
 * $count
 * $limit
 * $skip
 * $out
 */


// db.persons.aggregate([
//     {$match:{age:{$gt:25}}}
// ])

//-----------------------------------------
// db.persons.aggreagate([
//     {$match:{tags:{$size:3}}}
// ])

// db.persons.find({tags:{$size:3}})

//------------------------------------------

// {$group : {_id:"$age"}}

// {$group: {_id:{age:$age, gender:$gender}}}

//------------------------------------------

// db.parson.aggregate([
//     {$group : {_id:"$age"}}
// ])
// {"_id":27}
// {"_id":30}


// db.parson.aggregate([
//      {$group: {_id:{age:$age, gender:$gender}}}
// ])
// {"_id":{"age":27,"gender":"male"}}
// {"_id":{"age":30,"gender":"female"}}
// {"_id":{"age":22,"gender":"male"}}


//----------------------------------------------

// db.persons.aggregate([
// {$match:{favoriteFruit:"banana"}},
// {$group:{_id:{age:"$age", eyeColor:"$eyeColor"}}}
// ])

//----------------------------------------------

// hata verecek bir yazım şekli
// db.persons.aggregate([
// {$group:{_id:{age:"$age", eyeColor:"$eyeColor"}}},
// {$match:{favoriteFruit:"banana"}}
// ]) 


//doğrusu group içerisindeki veriye ulaşım ve kullanım. buradaki kullanım sql de having benzeri diyebiliriz
//Gorup By
//Having
// db.persons.aggregate([
// {$group:{_id:{age:"$age", eyeColor:"$eyeColor"}}},
// {$match:{"_id.age":{$gt:30}}}
// ]) 
// {_id:{"age":38,"ayeColor":"brow"}}
// {_id:{"age":33,"ayeColor":"green"}}
// {_id:{"age":35,"ayeColor":"brow"}}

//----------------------------------------------

// db.persons.aggregate([
// {$group:{_id:{age:"$age", eyeColor:"$eyeColor"}}},
// {$match:{"_id.eyeColor":"blue"}}
// ])


//---------------------Count--------------------------

// db.persons.aggregate([
//     {$counst:"allDocumentsCount"}
// ])
// {"allDocumentsCount":1000}

// db.persons.find({}).count()

//her ikiside server side çalışır

//----------------------------------------

// db.persons.aggregate([
//     {$group:{id:"$company.location.country"}},
//     {$count:"countriesCount"}
// ])
// {"countriesCount":4}

//-----------------------------------------
// db.persons.aggregate([
//     {$group:{_id:{eyeColor:"$eyeColor",gender:"$gender"}}},
//     {$count:"eyeColorAndGender"}
// ])
// {"eyeColorAndGender":6}

//------------------match-group-count----------------------------

// db.persons.aggregate([
//     //stage1
//     {$match : {age:{$gt:25}}},
//     //stage2
//     {$group :{_id:{eyeColor:"$eyeColor", age:"$age"}} },
//     //stage3
//     {$count:"eyeColorAndAge"}
// ])

//--------------------sort----------------------
// {$sort : {score:-1}}
// {$sort: {$age:1,country:1}}

// db.persons.aggregate([
//     {$sort:{name:1}}
// ])


// db.persons.aggregate([
//     {$match:{age:{$gte:25}}},
//     {$group:{_id:{eyeColor:"$eyeClor",age:"$age"}}},
//     {$sort:{name:1,gender:-1,eyeColor:1}}
// ])


// db.persons.aggregate([
//     {$group:{_id:"$favoritesFruit"}},
//     {$sort:{_id:1}}
// ])
// {"_id":"apple"}
// {"_id":"banana"}
// {"_id":"strawberry"}

//-----------------project-------------------
// {$project:{name:1,"company.title":1}}
// {$project:{_id:0,name:1,age:1}}
// {$project:{eyeColor:0,age0}}
// {$project:{name:1,newAge:"$age"}}


// db.persons.aggregate([
//     {$project:{isActive:1,name:1,gender:1}} // eğer {isActive:0,name:0,gender:0} olsaydı buradaki değerler hariç tüm değerler görüntülenecekti
// ])
// {
//     _id:1,
//     "name":"Ayhan",
//     "isActive":false,
//     "gender":"male"
// }

//--------------------------
// db.persons.aggregate([
//     {$project:{
//         _id:0,
//         name:1,
//         info:{
//             eyes:"$eyeColor",
//             fruit:"$favoriteFruit",
//             country:"$company.location.country"
//         }
//     }}
// ])

// {
//     "name":"Aurelia Gonzales",
//     "info":{
//         "eyes":"green",
//         "fruit":"banana",
//         "country":"USA"
//     }
// }



//------------------------limit--------------- 
// {$limit:100}

db.persons.aggregate([
    {$limit:1000},
    {$match:{age:{$gte:27}}},
    {$group:{_id:"$company.location.country"}}
])
// {_id:"Turkey"},
// {_id:"Germany"},
// {_id:"Bulgaria"}

//---------------

// db.persons.aggregate([
//     {limit:1000},
//     {$match:{eyeColor:{$ne:"blue"}}},
//     {$group:{_id:{eyeColor:"$eyeColor",favoriteFruit:"$favoriteFruit"}}},
//     {$sort:{"_id.eyeColor":1,"_id.favoriteFruit":1}}
// ])


//---------------group array-------------unwind

// db.persons.aggregate([
//     {$group:{_id:"tags"}}
// ])

// {
//     "_id":[
//         "dolar",
//         "nisi",
//         "anim"
//     ]
// }

// db.persons.aggregate([
//     {$unwind:"tags"}, //tags type ı bir dizidir. burada yapmış olduğu her bir dizi değeriyle yeni bir document oluşturmak ve listelemek
//     {$project:{name:1,tags:1}}
// ])

// {
//     "_id":"1"
//     "name":"a",
//     "tags":"dolar"
// }
// {
//     "_id":"1"
//     "name":"a",
//     "tags":"nisi"
// }
// {
//     "_id":"1"
//     "name":"a",
//     "tags":"anim"
// }


//-------yukarıda listelneen verilerin arkasından group kullanırsak

// db.persons.aggregate([
//     {$unwind:"tags"},
//     {$group:{_id:"tags"}}
// ])


//-------------------------------------------
// {$sum:"$quantity"}
// {$avg:"$age"}
// {$max:""}


// db.persons.aggregate([
//     {$unwind:"$tags"},
//     {
//         $group:{
//             _id:"$tags",
//             count:{$sum:NumberInt(1)}
//         }
//     }
// ])
// {   "_id":"nulla", "count":65 }
// {   "_id":"sit", "count":57 }
// {   "_id":"reprehendeit", "count":52 }
// {   "_id":"anim", "count":62 }


// db.persons.aggregate([
//     {
//         $group:{
//             _id:"$eyeColor",
//             avgAge:{$avg:$age}
//         }
//     }
// ])
// {   "_id":"brow", "count":65.856 }
// {   "_id":"blue", "count":57.566 }
// {   "_id":"green", "count":52.564 }

//------------------type------------------------

// db.persons.aggregate([
//     {
//         $project:{
//             name:1,
//             eyeColorType:{$type:"$eyeColor"},
//             ageType:{$type:"$age"}
//         }
//     }
// ])
// {
//    "_id":ObjectId("sdffwrfb6+51"),
//    "name":"Auroline Gonzales",
//    "eyeColorType":"string",
//    "ageType":"int"
// }



//--------------out----------------------------
// {$out:"newCollection"}

// db.persons.aggregate([
//     {$group:{_id:{age:"$age", eyeColor:"$eyeColor"}}},
//     {$out:"aggregationResults"}
// ])


// show collections

// persons
// aggregationResults


//---------------Allow disk use------------------
// {allowDiskUse:true}

// db.persons.aggregation([],{allowDiskUse:true})