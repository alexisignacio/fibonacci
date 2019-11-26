
	       			


var mocha = require('mocha')
var chai = require('chai')
const chaiHttp = require('chai-http');
const assertArrays = require('chai-arrays');
var expect = chai.expect;
const app = require('../app');
chai.use(chaiHttp);
chai.use(assertArrays);





var assert = require('assert');
describe('Serie de fibonacci', function() {
  	describe('Validar arreglo ', function() {
  		it('si ingresa 5 devuevle [0,1,1,2,3] ',function() {
	    		chai
	      			.request(app)
	      			.get('/get_fibonacci/5')
	      			.end(function(err, res){
	      				console.log(res.body)
	      				expect(res.body).to.be.equalTo([0,1,1,2,3])
	        			
				 });
			
		});
		it('si ingresa 10 devuevle ',function() {
	    		chai
	      			.request(app)
	      			.get('/get_fibonacci/10')
	      			.end(function(err, res){
	      				console.log(res.body)
	      				expect(res.body).to.be.equalTo([0,1,1,2,3,5,8,13,21,34])
	        			
				 });
			
		});

		
		
	});
  	describe('Validar resultado ', function() {

		it('si ingresa 100 el enesimo valor es 218922995834555200000',function() {
		    		chai
		      			.request(app)
		      			.get('/get_fibonacci/100')
		      			.end(function(err, res){
		      				console.log(res.body[100])
		      				expect(res.body[100]).to.equal(218922995834555200000)
		        			
					 });
				
			});

		
	});	
});

