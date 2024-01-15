/**
 * createIndex()
 */


// db.collection.createIndex({<KeyName>:[-1 | 1 ]})


// db.persons.createIndex({age:1})
// db.persons.createIndex({name:1})

//-----index options 
//{background: true}
//{unique:true}
//{name:"<indexName>"}


//------------------unique------------------------
// db.users.createIndex({ email: 1 }, { unique: true });

// Bu komut, "users" koleksiyonundaki "email" alanı için bir yükselen 
// (ascending) indeks oluşturur ve unique: true seçeneği ile bu indeksi benzersiz kılar. Bu sayede, 
// aynı e-posta adresiyle başka bir kullanıcı eklemeye çalıştığınızda MongoDB bir hata fırlatacaktır.


//---------------background------------------
// background opsiyonu, bir indeks oluşturulurken bu işlemin 
// veritabanının normal çalışmasını etkilememesi için kullanılır.

// db.myCollection.createIndex({ myField: 1 }, { background: true });

// Bu komut, "myCollection" koleksiyonunda "myField" alanına 
// yükselen bir indeks oluşturur ve bu indeksi arka 
// planda oluşturur. Bu sayede, indeks oluşturma işlemi devam
//  ederken yazma işlemleri normal bir şekilde devam edebilir.

//-------------------indexname------------------

// db.users.createIndex({ age: 1 }, { name: customAgeIndex }); 

//indexin otomatik oluşturulan name değerini kendimiz belirlemiş olduk




//-----------------------explain------------------------
// db.myCollection.find({ myField: "someValue" }).explain("executionStats");

// Bu sorgu, "myCollection" koleksiyonundan "myField" alanı "someValue" 
// olan belgeleri bulmaya çalışır ve bu sorgunun performans 
// istatistiklerini içeren bir belge döndürür. 
// "executionStats" parametresi, sadece sorgu yürütme 
// istatistiklerini almak için kullanılır.


//----------------------deleteIndex-----------------
// db.Collection.getIndexes()

// db.getCollection("persons")
// .dropIndex({index:1})



// db.getCollection("persons")
// .dropIndexes()

