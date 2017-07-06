var url = "mongodb://"+process.env.IP+":27017/learnyoumongo";
console.log(process.argv[2]);
//var age = process.argv[2];
var mongo = require('mongodb').MongoClient;
    mongo.connect(url, function(err, db) {
      // db gives access to the database
      if(err){return console.log(err);}
      
      var collection = db.collection(process.argv[3]), id = process.argv[4];
      console.log(process.argv[4]);
      collection.remove({
        _id: id
      }, function(err){
        if(err) throw err;
      })
       
      db.close();
    })
    
    
    
    
    //     var mongo = require('mongodb').MongoClient
    
    // var url = 'mongodb://localhost:27017/' + process.argv[2]
    
    // mongo.connect(url, function(err, db) {
    //   if (err) throw err
    //   var collection = db.collection(process.argv[3])
    //   collection.remove({
    //     _id: process.argv[4]
    //   }, function(err) {
    //     if (err) throw err
    //     db.close()
    //   })
    // })
