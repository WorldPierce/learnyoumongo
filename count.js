var url = "mongodb://"+process.env.IP+":27017/learnyoumongo";
var age = process.argv[2];
var mongo = require('mongodb').MongoClient
    mongo.connect(url, function(err, db) {
      // db gives access to the database
      if(err){return console.log(err);}
      var parrots = db.collection('parrots');

      var count = parrots.count({age:{$gt:+age}},function(err,count){
        if(err) throw err;
        console.log(count);
      });
      
      db.close();
    })
    
    
    
    //     var mongo = require('mongodb').MongoClient
    // var age = process.argv[2]
    
    // var url = 'mongodb://localhost:27017/learnyoumongo'
    
    // mongo.connect(url, function(err, db) {
    //   if (err) throw err
    //   var parrots = db.collection('parrots')
    //   parrots.count({
    //     age: {
    //       $gt: +age
    //     }
    //   }, function(err, count) {
    //     if (err) throw err
    //     console.log(count)
    //     db.close()
    //   })
    // })