//-- include your modules
var path = require('path');
var Q = require('q');

//-- include your local modules
var ralph = require( path.join( __dirname, 'src/BasicModule.js' ));

//-- do something.
console.log( ralph.sayHello() );
console.log( 'ralph firstName:' + ralph.firstName );

//-- try changing this. What happens and why?
var shouldGoDeeper=true;

ralph.async( true, 'Msg to First Async Call' ).then( function( valueFromResolve ){
	console.log( "First Async Completed! " + valueFromResolve );
}).catch( function( valueFromReject ){
	console.log( "First Async was rejected! " + valueFromReject );
});

return( true );