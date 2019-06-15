const expect = require('chai').expect;
const request = require('request');

// Individual test
it('Main page content', (done)=> {
    request('http://localhost:7000', (error, response, body) => {
        expect(body).to.equal('Hello World');
        done();
    });
});

it('Main page status', (done)=> {
    request('http://localhost:7000', (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        done();
    });
});


// Group test
describe('Status and Content', () => {
    describe('Main page', () => {
        it('Main page content', (done)=> {
            request('http://localhost:7000', (error, response, body) => {
                expect(body).to.equal('Hello World');
                done();
            });
        });
        
        it('Main page status', (done)=> {
            request('http://localhost:7000', (error, response, body) => {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
    })

    describe ('About page', () => {
        it ('Status', (done) => {
            request('http://localhost:7000/about', (error, response, body) => {
                expect(response.statusCode).to.equal(404);
                done();
            })
        });
    });
})
