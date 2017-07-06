var url = "mongodb://"+process.env.IP+":27017/learnyoumongo";
var size = process.argv[2];
var mongo = require('mongodb').MongoClient
    mongo.connect(url, function(err, db) {
      // db gives access to the database
      if(err){return console.log(err);}
      var collection = db.collection('prices');

      collection.aggregate([
        {$match:{size: size}}
        ,{$group: {
          _id: 'total'
          , average: {
        $avg: '$price'
      }
        }
          
        }]).toArray(function(err, results){
          console.log(Number(results[0].average).toFixed(2));
        })
      
      db.close();
    })
    
    
    //     var mongo = require('mongodb').MongoClient
    // var size = process.argv[2]
    
    // var url = 'mongodb://localhost:27017/learnyoumongo'
    
    // mongo.connect(url, function(err, db) {
    //   if (err) throw err
    //   var prices = db.collection('prices')
    //   prices.aggregate([
    //     { $match: {
    //       size: size
    //     }}
    //   , { $group: {
    //       _id: 'average'
    //     , average: {
    //         $avg: '$price'
    //       }
    //     }}
    //   ]).toArray(function(err, results) {
    //     if (err) throw err
    //     if (!results.length) {
    //       throw new Error('No results found')
    //     }
    //     var o = results[0]
    //     console.log(Number(o.average).toFixed(2))
    //     db.close()
    //   })
    // })