const express = require('express');
const redis = require('redis');

const app = express();
const port = 8080
app.use(express.urlencoded());
app.use(express.json());

let client = redis.createClient();

client.on('connect', function() {
    console.log('redis running');
});
app.get('/zipcodes/:id', (request, response) =>{
   client.hGet(request.params.id, function(err, obj){
       if(!obj){
            response.status(404).send( `Zipcode ${request.params.id} could not be found`);
       }
       else{
           let locationInformation = {
               zipcode: obj[0],
               city: obj[1],
               county: obj[2],
           }
           response.status(200).send(JSON.stringify(locationInformation));
       }
    });
});
app.listen(port, ()=> console.log('running'));