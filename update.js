/**
 * update()
 * updateOne()
 * updateMany()
 * replaceOne()
 */

/**
 * $set
 * $unset
 * $rename
 * $inc
 * $mul
 * $currentDate
 * $pop
 * $addToSet
*/

// db.<collection>.method(<method>,<update>,<options>)

//-------------------set-----------------------------
// db.getCollection('shoppingCart')
// .update(
//     {index:2},
//     {
//         $set:{
//             cardId:Number(325),
//             customer:{
//                 name:"Mike Foster",
//                 emial:"foster@mail.com",
//                 age:"Number(27)"
//             },
//             cart:[]
//         }
//     }
// )

//------------------unset-----------------------beliritlen alanları kaldırır
// db.getCollection('shoppingCart')
// .update(
//     {index:2},
//     {
//         $unset:{
//             cardId:Number(325),
//             customer:{
//                 name:"Mike Foster",
//                 emial:"foster@mail.com",
//                 age:"Number(27)"
//             },
//             cart:[]
//         }
//     }
// )

// {
//     index:2
// }


//--------------------------------------
// db.shoppingCart.updateOne(
//     {
//         cartId:235
//     },
//     {
//         $set:{
//             processed:true
//         }
//     },
//     {}
// )

//-------------------------------------
// db.shoppingCart.updateMany(
//     {
//         cart:{exists:false}
//     },
//     {
//         $set:{
//             cart:[]
//         }
//     },
//     {}
// )

//---------------------------------------
// {
//     "_id":ObjectId("123456798"),
//     "index":1
//     "processed":false,
//     "cart":[]
// }

// db.shoppingCart.replaceOne(
//     { "index": 1 },
//     {
//         "_id": ObjectId("123456798"),
//         "index": 1
//     "processed": true,
//         "cart": ["item1", "item2"]
//     },
//     {}
// )


//------------------------------------------
// db.shoppingCart.update(
//     {index:1},
//     {
//         $set{
//             cartId:NumberInt(435),
//             "customer.name":"Samanta Larsen",
//             "customer.email":"slarser@tset.com"
//         },
//         $unset:{
//             newOrder:1
//         }
//     },
//     {

//     }
// )

//-------------------rename---------------------
// {$rename:{fieldName:newfieldName}}



// {
//     "_id":ObjectId("123456798"),
//     "index":1
//     "processed":false,
//     "cartId":456
// }

// db.shoppingCart.updateMany(

//     { cartId: { $exists: true } },
//     {
//         $rename: {
//             cartId: orderId
//         }
//     },
//     {}

// )

// {
//     "_id":ObjectId("123456798"),
//     "index":1
//     "processed":false,
//     "orderId":456
// }

//-------------------currentDate----------------------

// db.shoppingCart.updateMany(
//     { cartId: 123 },
//     {
//         $set: {
//             cart: ["item1", "item2"]
//         },
//         $currentDate: {
//             updatedAt: true
//         }
//     },
//     {}
// )

//-----------------array update-------------

//----push
// {$push:{arrayfieldname:elemen}}

// db.shoppingCart.update(
//     {cartId:456},
//     {
//         $push:{
//             cart:"item1"
//         }
//     }
// )


//-----------------------addToSet-------------------
// db.shoppingCart.update(
//     {cartId:456},
//     {
//         $addToset:{
//             cart:"item1" //--> cart içerisinde item1 var ise eklemeyecektir eğer item1 yok ise ekleyecektir
//         }
//     }
// )


// db.shoppingCart.update(
//     {cartId:456},
//     {
//         $addToset:{
//             cart:{$each:["item2","item3"]} //--> birden fazla ekleme yapacağımız zmaan kullanırız
//         }
//     }
// )

//----------------------pop-----------------
// db.shoppingCart.update(
//     {cartId:561,},
//     {
//         $pop: {
//             cart:1 // +1 ile diznin son öğesinin silindiğini göreceğiz eğer -1 değerini girmiş olsaydık dizinin ilk öğesinin silindiğini görecektik
//         }
//     },
//     {}
// )

//---------------------pull------------------
// db.posts.update(
//     { _id: 1 },
//     {
//       $pull: {
//         tags: "mongodb"
//       }
//     }
//);
// Bu komut, "_id" alanı 1 olan belge içindeki "tags" dizisinden "mongodb" etiketini çıkarır.

// db.students.update(
//     { _id: 1 },
//     {
//       $pull: {
//         scores: { $gte: 80 }
//       }
//     }
//   );
//Bu komut, "_id" alanı 1 olan belge içindeki "scores" dizisinden 80 veya daha büyük değerlere sahip olan skorları çıkarır.

//---------------------------pullAll------------------
// {$pull:{arrayfield:["value1","value2"]}}

// öncelikle sorgumuzu gerçekleştirmek için veri eklemesi yapacağız
// db.getCollection("shoppingCart").update(
//     {cartId:561},
//     {$push:{
//         cart:{$each:["item1","item2","item3","item4","item1"]}
//     }}
// )

// db.getCollection("shoppingCart").update(
//     {cartId:561},
//     {
//         $pullAll:{
//             cart:["item1","item2"] // belirtilen tüm değerker cart dizisinden kaldırılacaktır
//         }
//     }
// )

//--------------------positional operator
// db.getCollection("shoppingCart")
// .updateOne(
//     {
//         cartId:561,cart:"item3"
//     },
//     {
//         $unset:{
//             "cart.$": 1 // dizide ilgili elemanın silemz yerine null atar. bununla birlikte dizinin boyutuda değişmemiş olur
//         }
//     },
//     {}
// )


// db.getCollection("shoppingCart")
// .udpdateOne(
//     {cartId:561,cart:"item2"},
//     {
//         $set:{
//             "cart.$":"item2updated" // sorgu sonucunda gelen dizi değerinin 2. elemanını güncellemiş olduk
//         }
//     }
// )

//--------nested doc
// {
//     cart:[
//         {
//             title:"TV",
//             price:NumberInt(340),
//             quantity:NumberInt(2)
//         },
//         {
//             title:"Phone",
//             price:NumberInt(150),
//             quantity:NumberInt(1)
//         }
//     ]
// }


// db.shoppingCart.updatedOne(
//     {"cart.title":"Phone"},
//     {
//         $set:{
//             "cart.$.quantity":NumberInt(2)
//         }
//     }
// )

//birden fazla sorgu değeri için
// db.shoppingCart.updateOne(
//     {
//         cartId: 456,
//         cart:{$elemMatch:{title:"Phone",price:150}}
//     },
//     {
//         $set:{
//             "cart.$.quantity":NumberInt(2),
//             "cart.$.price":NumberInt(225)
//         }
//     }
// )


//----------------------inc--------------------
// {$inc:{field:amount}}

// db.shoppingCart.updateOne(
//     {
//         cartId: 456,
//         cart:{$elemMatch:{title:"Phone",price:150}}
//     },
//     {
//         $inc:{
//             "cart.$.quantity":NumberInt(2), // her defasında değeri belirlen kadar arttırır
//         }
//     }
// )

//------------------------------------------------