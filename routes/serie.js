
 'use strict';

exports.fibonacci_series = function(info,callback){	
	let a=0,b=1,c,s=1;
	var array =[0,1]
		
		for(var i = 3; i<=info;i++){
		    c=a+b;
		    array.push(c);
		    s = s +c;
		    a =b;
		    b=c;
		 }
	
		 callback(array)

};

