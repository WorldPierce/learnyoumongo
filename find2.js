var url = "mongodb://"+process.env.IP+":27017/learnyoumongo";
var age = process.argv[2];
var mongo = require('mongodb').MongoClient
    mongo.connect(url, function(err, db) {
      // db gives access to the database
      if(err){return console.log(err);}
      var parrots = db.collection('parrots');
      parrots.find({
        age: {
          $gt: +age
        }},
         { 
           _id: 0 
         }
      ).toArray(function(err, documents){
        if(err){return console.log(err);}
        
        console.log(documents);
      })
      db.close();
    })
    
    
    //     var mongo = require('mongodb').MongoClient
    // var age = process.argv[2]
    
    // var url = 'mongodb://localhost:27017/learnyoumongo'
    
    // mongo.connect(url, function(err, db) {
    //   if (err) throw err
    //   var parrots = db.collection('parrots')
    //   parrots.find({
    //     age: {
    //       $gt: +age
    //     }
    //   }, {
    //     name: 1
    //   , age: 1
    //   , _id: 0
    //   }).toArray(function(err, docs) {
    //     if (err) throw err
    //     console.log(docs)
    //     db.close()
    //   })
    // })