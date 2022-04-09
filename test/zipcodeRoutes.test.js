const chai = require('chai');
var expect  = chai.expect;
const app = require('../index');
const request = require('supertest');


describe('This API retrieves geographic data based on zip code', function() {
    describe('GET /zipcodes/:id', function() {
        it('returns the city and county of the specified zip code', function(done) {
            try{
                request('http://localhost:8080/zipcodes/20613', function(error, response, body) {
                    const result = JSON.parse(response.body);
                    const city = result.city;
                    const county = result.county; 
                    expect(city).to.equal('Brandywine');
                    expect(county).to.equal('Prince George\'s County');
                    done();
                });
            }      
            catch(err){
                console.error(err);
            }
        });

        it('returns a 404 if the zip code cannot be found',  function(){ 
            try{
                request('http://localhost:8080/zipcodes/44092', function(error, response, body){});
            }
            catch(err){
                expect(err).to.equal(404);
                done();
            }
        });
    });
});