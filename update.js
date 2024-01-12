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

db.shoppingCart.updateMany(
    {cartId:123},
    {
        $set:{
            cart:["item1","item2"]
        },
        $currentDate:{
            updatedAt:true
        }
    },
    {}
)

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