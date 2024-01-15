/**
 * remove()
 * deleteOne()
 * deleteMany()
 * drop()
 * dropDatabase()
 * $ne
 */

//-------------remove---------------
// db.tempCollection.remove(query)
// db.tempCollection.remove({},true) // tempCollection daki tüm verileri siler

// db.tempCollection.remove({"_id": ObjectId("564adsfv65a1fdv")},true) // belirtilen id değerine sahip documenti siler


//--------------------deleteOne-------------------
db.tempCollection.deleteOne(
    {"_id":ObjectId("456sdsdf45s65df4")},
    true
)

//ilgili id ye sahip ilk bulduğu documenı siler

//-------------------deleteMany-----------------------------

db.tempCollection.deleteMany(
    {
        "_id":{$ne:objectId("6546asdasd")}
    }
)

//verilen ıd ye eşit olmayan tüm documentleri sil demiş olduk


//-----------------------drop------------------7
// db.tempCollection.drop() 


//-------------dropDatabase--------
// db.dropDatabase()

