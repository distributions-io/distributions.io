'use strict';

var dist = require( './../lib' ),
	out;

// Generate 30 standard normal random variates:
out = dist.norm.random( 30 );
console.log( out );

// Evaluate the PDF of a exponential distribution with lambda=2 at 0
out = dist.exp.pdf( 0, {lambda: 2} );
console.log( out );

// Retrieve the excess kurtosis of a Poisson random variable with lambda = 3
out = dist.poisson.ekurtosis( 3 );
console.log( out );

// Evaluate the CDF of a standard normal for an array of values:
out = dist.norm.cdf( [-3,-2,-1,0,1,2,3] );
console.log( out );
