var url = "mongodb://"+process.env.IP+":27017/learnyoumongo";
console.log(process.argv[2]);
//var age = process.argv[2];
var mongo = require('mongodb').MongoClient;
    mongo.connect(url, function(err, db) {
      // db gives access to the database
      if(err){return console.log(err);}
      
      var collection = db.collection('users');
      //var obj = {firstName: process.argv[2], lastName: process.argv[3]};
      console.log(process.argv[2]);
      //collection.insert(obj);
      //console.log(JSON.stringify(obj));
      collection.update({
        username: "tinatime"
      }, {
        $set: {
          age: 40
        }
      }, function(err){
        if(err) throw err;
      })
       
      db.close();
    })
    
    
    
    //     var mongo = require('mongodb').MongoClient
    
    // var url = 'mongodb://localhost:27017/' + process.argv[2]
    // mongo.connect(url, function(err, db) {
    //   if (err) throw err
    //   var collection = db.collection('users')
    //   collection.update({
    //     username: 'tinatime'
    //   }, {
    //     $set: {
    //       age: 40
    //     }
    //   }, function(err) {
    //     if (err) throw err
    //     db.close()
    //   })
    // })
