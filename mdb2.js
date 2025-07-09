var MongoClient=require('mongodb').MongoClient;
var url="mongodb://127.0.0.1:27017/university";
MongoClient.connect(url)
.then((db)=>{
    console.log("Database is created");
    db.close();
})
.catch((err)=>{
    console.log("An Error Ocurred:", err);
})