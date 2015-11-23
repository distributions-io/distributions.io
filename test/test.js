/* globals describe, it, require */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	dist = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// FUNCTIONS //

/**
* FUNCTION: testProperty( distName, fcnName )
*	Tests that the distribution in question has a property and that the property value is a function.
*
* @param {String} distName - distribution name
* @param {String} fcnName - property name
*/
function testProperty( distName, fcnName ) {
	it( '`' + distName + '` property should have a `'+ fcnName + '` property that is a function', function test() {
		expect( dist[distName] ).to.have.property( fcnName ).that.is.a( 'function' );
	});
} // end FUNCTION testProperty()


// TESTS //

describe( 'distributions.io', function tests() {

	var properties = [
		// DISCRETE DISTRIBUTIONS //
		[ 'binom', [ 'pmf', 'cdf', 'quantile', 'mgf', 'random', 'mean', 'median', 'variance', 'skewness', 'ekurtosis', 'entropy' ] ],
		[ 'geom', [ 'pmf', 'cdf', 'quantile', 'mgf', 'random', 'mean', 'median', 'variance', 'skewness', 'ekurtosis', 'entropy' ] ],
		[ 'hypergeom', [ 'pmf', 'cdf', 'quantile', 'mgf', 'random', 'mean', 'median', 'variance', 'skewness', 'ekurtosis', 'entropy' ] ],
		[ 'nbinom', [ 'pmf', 'cdf', 'quantile', 'mgf', 'random', 'mean', 'median', 'variance', 'skewness', 'ekurtosis', 'entropy' ] ],
		[ 'poisson', [ 'pmf', 'cdf', 'quantile', 'mgf', 'random', 'mean', 'median', 'variance', 'skewness', 'ekurtosis', 'entropy' ] ],
		// CONTINUOUS DISTRIBUTIONS //
		[ 'beta', [ 'pdf', 'cdf', 'quantile', 'mgf', 'random', 'mean', 'median', 'variance', 'skewness', 'ekurtosis', 'entropy' ] ],
		[ 'cauchy', [ 'pdf', 'cdf', 'quantile', 'random', 'median', 'entropy' ] ],
		[ 'chisq', [ 'pdf', 'cdf', 'quantile', 'mgf', 'random', 'mean', 'median', 'variance', 'skewness', 'ekurtosis', 'entropy' ] ],
		[ 'erlang', [ 'pdf', 'cdf', 'quantile', 'mgf', 'random', 'mean', 'median', 'variance', 'skewness', 'ekurtosis', 'entropy' ] ],
		[ 'exp', [ 'pdf', 'cdf', 'quantile', 'mgf', 'random', 'mean', 'median', 'variance', 'skewness', 'ekurtosis', 'entropy' ] ],
		[ 'f', [ 'pdf', 'cdf', 'quantile', 'random', 'mean', 'median', 'variance', 'skewness', 'ekurtosis', 'entropy' ] ],
		[ 'gamma', [ 'pdf', 'cdf', 'quantile', 'mgf', 'random', 'mean', 'median', 'variance', 'skewness', 'ekurtosis', 'entropy' ] ],
		[ 'gumbel', [ 'pdf', 'cdf', 'quantile', 'mgf', 'random', 'mean', 'median', 'variance', 'skewness', 'ekurtosis', 'entropy' ] ],
		[ 'invgamma', [ 'pdf', 'cdf', 'quantile', 'mgf', 'random', 'mean', 'median', 'variance', 'skewness', 'ekurtosis', 'entropy' ] ],
		[ 'laplace', [ 'pdf', 'cdf', 'quantile', 'mgf', 'random', 'mean', 'median', 'variance', 'skewness', 'ekurtosis', 'entropy' ] ],
		[ 'logistic', [ 'pdf', 'cdf', 'quantile', 'mgf', 'random', 'mean', 'median', 'variance', 'skewness', 'ekurtosis', 'entropy' ] ],
		[ 'lnorm', [ 'pdf', 'cdf', 'quantile', 'mgf', 'random', 'mean', 'median', 'variance', 'skewness', 'ekurtosis', 'entropy' ] ],
		[ 'rayleigh', [ 'pdf', 'cdf', 'quantile', 'mgf', 'random', 'mean', 'median', 'variance', 'skewness', 'ekurtosis', 'entropy' ] ],
		[ 't', [ 'pdf', 'cdf', 'quantile', 'random', 'mean', 'median', 'variance', 'skewness', 'ekurtosis', 'entropy' ] ],
		[ 'unif', [ 'pdf', 'cdf', 'quantile', 'mgf', 'random', 'mean', 'median', 'variance', 'skewness', 'ekurtosis', 'entropy' ] ],
		[ 'norm', [ 'pdf', 'cdf', 'quantile', 'mgf', 'random', 'mean', 'median', 'variance', 'skewness', 'ekurtosis', 'entropy' ] ],
		[ 'pareto', [ 'pdf', 'cdf', 'quantile', 'mgf', 'random', 'mean', 'median', 'variance', 'skewness', 'ekurtosis', 'entropy' ] ],
		[ 'triangular', [ 'pdf', 'cdf', 'quantile', 'mgf', 'random', 'mean', 'median', 'variance', 'skewness', 'ekurtosis', 'entropy' ] ],
		[ 'weibull', [ 'pdf', 'cdf', 'quantile', 'mgf', 'random', 'mean', 'median', 'variance', 'skewness', 'ekurtosis', 'entropy' ] ],
	];

	it( 'should export an object', function test() {
		expect( dist ).to.be.an( 'object' );
	});

	// Run the property tests...
	for ( var i = 0; i < properties.length; i++ ) {
		for ( var j = 0; j < properties[ i ][ 1 ].length; j++ ) {
			testProperty( properties[ i ][ 0 ], properties[ i ][ 1 ][ j ] );
		}
	}

});
