/*global module*/

var Q = require('q');

//--private properties

var firstName="Ralph";
var lastName="Wiggums";
var sayHello=function(){
	return( "Hi! My name's "+ firstName );
};

function async( goDeeper, msg ){
	//-- this makes a promise.
	var deferred = Q.defer();
	
	if( goDeeper === true ){
		console.log( 'Going Deeper!' );
		
		//-- an async method can depend on other async methods
		//-- and only continue when all async methods are complete.
		innerAsync( 'Going Deeper! ' + msg )
			.then( function( valueFromResolve ){
				deferred.resolve( 'Resolved! ' + msg );
			})
			.catch( function( valueFromReject ){
				deferred.reject( 'Rejected! ' + msg );	
			});
		
	} else {
		deferred.reject( 'Not going deeper! : ' + msg  );
	}
	
	return( deferred.promise );
}

function innerAsync( msg ){
	var deferred = Q.defer();
	
	deferred.resolve( 'InnerSync Resolve! '  + msg );
	
	return( deferred.promise );
}

//-- exposed properties / methods
module.exports = {
	sayHello: sayHello,
	async: async
};