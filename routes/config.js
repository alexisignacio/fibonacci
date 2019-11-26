 'use strict';

var funciones = require('../routes/serie')


exports.get_fibonacci = function(req, res){	

  
  		let a=0,b=1,c,s=1;
	var array =[0,1]
		
		for(var i = 3; i<=req.params.enesimo;i++){
		    c=a+b;
		    array.push(c);
		    s = s +c;
		    a =b;
		    b=c;
		 }
	
		
		res.send(array);				
      

}

