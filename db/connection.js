let MongoClient = require('mongodb').MongoClient
let assert = require('assert')

let connect =() =>{

MongoClient.connect(
    'mongodb://localhost:27017', 
    { useNewUrlParser: true}
)
.then((client,err) => {
    if(err) throw err
   
    
    let db = client.db('nodeScheduler')
   
    db.collection('demo').createIndex( { "name": 1 }, { unique: true } )
    db.collection('demo').insertOne({createdAt : new Date () , name : "file2"})
    db.collection('demo').find({}).toArray(function(err,result){
        console.log('Found documents =>',  result)
    });
})}

module.exports = {connect}