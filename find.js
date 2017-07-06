var url = "mongodb://"+process.env.IP+":27017/learnyoumongo";
var age = process.argv[2];
var mongo = require('mongodb').MongoClient
    mongo.connect(url, function(err, db) {
      // db gives access to the database
      if(err){return console.log(err);}
      db.collection('parrots').find({
        age: {
          $gt: +age
        }
      }).toArray(function(err, documents){
        if(err){return console.log(err);}
        console.log(documents);
      })
      db.close();
    })