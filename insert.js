var url = "mongodb://"+process.env.IP+":27017/learnyoumongo";
//var age = process.argv[2];
var mongo = require('mongodb').MongoClient;
    mongo.connect(url, function(err, db) {
      // db gives access to the database
      if(err){return console.log(err);}
      
      var collection = db.collection('docs');
      var obj = {firstName: process.argv[2], lastName: process.argv[3]};
      
      collection.insert(obj);
      console.log(JSON.stringify(obj));
       
      db.close();
    })