Distributions
=========
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> Collection of probability distributions.

This modules provides functions to evaluate the [CDF](cdf), [PDF](pdf) / [PMF](pmf) and [quantile](quantile) functions for a wide range of discrete and continuous probability distributions. In addition, it implements random number generators, moment-generating functions and facilities to retrieve distribution properties such as the moments of the respective distribution.


## Installation

``` bash
$ npm install distributions.io
```

## Usage

``` javascript
var dist = require( 'distributions.io' );
```

## Common Interface


## Distributions

-	Discrete Distributions
	-	.binom (Binomial)
		-	[pmf()][binomial-pmf], [cdf()][binomial-cdf], [quantile()][binomial-quantile],[mgf()][binomial-mgf]
		-	[random()][binomial-random]
		-	[mean()][binomial-mean], [median()][binomial-median], [variance()][binomial-variance], [skewness()][binomial-skewness], [ekurtosis()][binomial-ekurtosis], [entropy()][binomial-entropy]
	-	.geom (Geometric)
		-	[pmf()][geometric-pmf], [cdf()][geometric-cdf], [quantile()][geometric-quantile],[mgf()][geometric-mgf]
		-	[random()][geometric-random]
		-	[mean()][geometric-mean], [median()][geometric-median], [variance()][geometric-variance], [skewness()][geometric-skewness], [ekurtosis()][geometric-ekurtosis], [entropy()][geometric-entropy]
	-	.hypergeom (Hypergeometric)
		-	[pmf()][hypergeometric-pmf], [cdf()][hypergeometric-cdf], [quantile()][hypergeometric-quantile],[mgf()][hypergeometric-mgf]
		-	[random()][hypergeometric-random]
		-	[mean()][hypergeometric-mean], [median()][hypergeometric-median], [variance()][hypergeometric-variance], [skewness()][hypergeometric-skewness], [ekurtosis()][hypergeometric-ekurtosis], [entropy()][hypergeometric-entropy]
	-	.nbinom (Negative binomial)
		-	[pmf()][negative-binomial-pmf], [cdf()][negative-binomial-cdf], [quantile()][negative-binomial-quantile],[mgf()][negative-binomial-mgf]
		-	[random()][negative-binomial-random]
		-	[mean()][negative-binomial-mean], [median()][negative-binomial-median], [variance()][negative-binomial-variance], [skewness()][negative-binomial-skewness], [ekurtosis()][negative-binomial-ekurtosis], [entropy()][negative-binomial-entropy]
	-	.pois (Poisson)
		-	[pmf()][poisson-pmf], [cdf()][poisson-cdf], [quantile()][poisson-quantile],[mgf()][poisson-mgf]
		-	[random()][poisson-random]
		-	[mean()][poisson-mean], [median()][poisson-median], [variance()][poisson-variance], [skewness()][poisson-skewness], [ekurtosis()][poisson-ekurtosis], [entropy()][poisson-entropy]
-	Continuous Distributions
	-	.beta (Beta)
		-	[pdf()][beta-pdf], [cdf()][beta-cdf], [quantile()][beta-quantile],[mgf()][beta-mgf]
		-	[random()][beta-random]
		-	[mean()][beta-mean], [median()][beta-median], [variance()][beta-variance], [skewness()][beta-skewness], [ekurtosis()][beta-ekurtosis], [entropy()][beta-entropy]
	-	.cauchy (Cauchy)
		-	[pdf()][cauchy-pdf], [cdf()][cauchy-cdf], [quantile()][cauchy-quantile]
		-	[random()][cauchy-random]
		-	[median()][cauchy-median], [entropy()][cauchy-entropy]
	-	.chisq (Chi-Squared)
		-	[pdf()][chisquare-pdf], [cdf()][chisquare-cdf], [quantile()][chisquare-quantile],[mgf()][chisquare-mgf]
		-	[random()][chisquare-random]
		-	[mean()][chisquare-mean], [median()][chisquare-median], [variance()][chisquare-variance], [skewness()][chisquare-skewness], [ekurtosis()][chisquare-ekurtosis], [entropy()][chisquare-entropy]
	-	.erlang (Erlang)
		-	[pdf()][erlang-pdf], [cdf()][erlang-cdf], [quantile()][erlang-quantile],[mgf()][erlang-mgf]
		-	[random()][erlang-random]
		-	[mean()][erlang-mean], [median()][erlang-median], [variance()][erlang-variance], [skewness()][erlang-skewness], [ekurtosis()][erlang-ekurtosis], [entropy()][erlang-entropy]
	-	.exp (Exponential)
		-	[pdf()][exponential-pdf], [cdf()][exponential-cdf], [quantile()][exponential-quantile],[mgf()][exponential-mgf]
		-	[random()][exponential-random]
		-	[mean()][exponential-mean], [median()][exponential-median], [variance()][exponential-variance], [skewness()][exponential-skewness], [ekurtosis()][exponential-ekurtosis], [entropy()][exponential-entropy]
	-	.f (Fisher's F)
		-	[pdf()][f-pdf], [cdf()][f-cdf], [quantile()][f-quantile]
		-	[random()][f-random]
		-	[mean()][f-mean], [median()][f-median], [variance()][f-variance], [skewness()][f-skewness], [ekurtosis()][f-ekurtosis], [entropy()][f-entropy]
	-	.gamma (Gamma)
		-	[pdf()][gamma-pdf], [cdf()][gamma-cdf], [quantile()][gamma-quantile],[mgf()][gamma-mgf]
		-	[random()][gamma-random]
		-	[mean()][gamma-mean], [median()][gamma-median], [variance()][gamma-variance], [skewness()][gamma-skewness], [ekurtosis()][gamma-ekurtosis], [entropy()][gamma-entropy]
	-	.gumbel (Gumbel)
		-	[pdf()][gumbel-pdf], [cdf()][gumbel-cdf], [quantile()][gumbel-quantile],[mgf()][gumbel-mgf]
		-	[random()][gumbel-random]
		-	[mean()][gumbel-mean], [median()][gumbel-median], [variance()][gumbel-variance], [skewness()][gumbel-skewness], [ekurtosis()][gumbel-ekurtosis], [entropy()][gumbel-entropy]
	-	.invgamma (Inverse-Gamma)
		-	[pdf()][invgamma-pdf], [cdf()][invgamma-cdf], [quantile()][invgamma-quantile],[mgf()][invgamma-mgf]
		-	[random()][invgamma-random]
		-	[mean()][invgamma-mean], [median()][invgamma-median], [variance()][invgamma-variance], [skewness()][invgamma-skewness], [ekurtosis()][invgamma-ekurtosis], [entropy()][invgamma-entropy]
	-	.laplace (Laplace)
		-	[pdf()][laplace-pdf], [cdf()][laplace-cdf], [quantile()][laplace-quantile],[mgf()][laplace-mgf]
		-	[random()][laplace-random]
		-	[mean()][laplace-mean], [median()][laplace-median], [variance()][laplace-variance], [skewness()][laplace-skewness], [ekurtosis()][laplace-ekurtosis], [entropy()][laplace-entropy]
	-	.logistic (Logistic)
		-	[pdf()][logistic-pdf], [cdf()][logistic-cdf], [quantile()][logistic-quantile],[mgf()][logistic-mgf]
		-	[random()][logistic-random]
		-	[mean()][logistic-mean], [median()][logistic-median], [variance()][logistic-variance], [skewness()][logistic-skewness], [ekurtosis()][logistic-ekurtosis], [entropy()][logistic-entropy]
	-	.lnorm (Log-Normal)
		-	[pdf()][lognormal-pdf], [cdf()][lognormal-cdf], [quantile()][lognormal-quantile],[mgf()][lognormal-mgf]
		-	[random()][lognormal-random]
		-	[mean()][lognormal-mean], [median()][lognormal-median], [variance()][lognormal-variance], [skewness()][lognormal-skewness], [ekurtosis()][lognormal-ekurtosis], [entropy()][lognormal-entropy]
	-	.rayleigh (Rayleigh)
		-	[pdf()][rayleigh-pdf], [cdf()][rayleigh-cdf], [quantile()][rayleigh-quantile],[mgf()][rayleigh-mgf]
		-	[random()][rayleigh-random]
		-	[mean()][rayleigh-mean], [median()][rayleigh-median], [variance()][rayleigh-variance], [skewness()][rayleigh-skewness], [ekurtosis()][rayleigh-ekurtosis], [entropy()][rayleigh-entropy]
	-	.t (Student T)
		-	[pdf()][t-pdf], [cdf()][t-cdf], [quantile()][t-quantile]
		-	[random()][t-random]
		-	[mean()][t-mean], [median()][t-median], [variance()][t-variance], [skewness()][t-skewness], [ekurtosis()][t-ekurtosis], [entropy()][t-entropy]
	-	.unif (Continuous Uniform)
		-	[pdf()][uniform-pdf], [cdf()][uniform-cdf], [quantile()][uniform-quantile],[mgf()][uniform-mgf]
		-	[random()][uniform-random]
		-	[mean()][uniform-mean], [median()][uniform-median], [variance()][uniform-variance], [skewness()][uniform-skewness], [ekurtosis()][uniform-ekurtosis], [entropy()][uniform-entropy]
	-	.norm (Normal)
		-	[pdf()][normal-pdf], [cdf()][normal-cdf], [quantile()][normal-quantile],[mgf()][normal-mgf]
		-	[random()][normal-random]
		-	[mean()][normal-mean], [median()][normal-median], [variance()][normal-variance], [skewness()][normal-skewness], [ekurtosis()][normal-ekurtosis], [entropy()][normal-entropy]
	-	.pareto (Pareto Type I)
		-	[pdf()][pareto-type1-pdf], [cdf()][pareto-type1-cdf], [quantile()][pareto-type1-quantile],[mgf()][pareto-type1-mgf]
		-	[random()][pareto-type1-random]
		-	[mean()][pareto-type1-mean], [median()][pareto-type1-median], [variance()][pareto-type1-variance], [skewness()][pareto-type1-skewness], [ekurtosis()][pareto-type1-ekurtosis], [entropy()][pareto-type1-entropy]
	-	.triangular (Triangular)
		-	[pdf()][triangular-pdf], [cdf()][triangular-cdf], [quantile()][triangular-quantile],[mgf()][triangular-mgf]
		-	[random()][triangular-random]
		-	[mean()][triangular-mean], [median()][triangular-median], [variance()][triangular-variance], [skewness()][triangular-skewness], [ekurtosis()][triangular-ekurtosis], [entropy()][triangular-entropy]
	-	.weibull (Weibull)
		-	[pdf()][weibull-pdf], [cdf()][weibull-cdf], [quantile()][weibull-quantile],[mgf()][weibull-mgf]
		-	[random()][weibull-random]
		-	[mean()][weibull-mean], [median()][weibull-median], [variance()][weibull-variance], [skewness()][weibull-skewness], [ekurtosis()][weibull-ekurtosis], [entropy()][weibull-entropy]



---
## Examples

``` javascript
var dist = require( 'distributions.io' ),
	out;

// Generate 30 standard normal random variates:
out = dist.norm.random( 30 );

// Evaluate the PDF of a exponential distribution with lambda=2 at 0:
out = dist.exp.pdf( 0, {lambda: 2} );

// Retrieve the excess kurtosis of a Poisson random variable with lambda = 3:
out = dist.poisson.ekurtosis( 3 );

// Evaluate the CDF of a standard normal for an array of values:
out = dist.norm.cdf( [-3,-2,-1,0,1,2,3] );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## Tests

### Unit

Unit tests use the [Mocha][mocha] test framework with [Chai][chai] assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. The Distributions.io Authors.



[npm-image]: http://img.shields.io/npm/v/distributions.io.svg
[npm-url]: https://npmjs.org/package/distributions.io

[travis-image]: http://img.shields.io/travis/distributions-io/distributions.io/master.svg
[travis-url]: https://travis-ci.org/distributions-io/distributions.io

[codecov-image]: https://img.shields.io/codecov/c/github/distributions-io/distributions.io/master.svg
[codecov-url]: https://codecov.io/github/distributions-io/distributions.io?branch=master

[dependencies-image]: http://img.shields.io/david/distributions-io/distributions.io.svg
[dependencies-url]: https://david-dm.org/distributions-io/distributions.io

[dev-dependencies-image]: http://img.shields.io/david/dev/distributions-io/distributions.io.svg
[dev-dependencies-url]: https://david-dm.org/dev/distributions-io/distributions.io

[github-issues-image]: http://img.shields.io/github/issues/distributions-io/distributions.io.svg
[github-issues-url]: https://github.com/distributions-io/distributions.io/issues

[mocha]: http://mochajs.org
[chai]: http://chaijs.com
[istanbul]: https://github.com/gotwarlost/istanbul

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function
[pdf]: https://en.wikipedia.org/wiki/Probability_density_function
[pmf]: https://en.wikipedia.org/wiki/Probability_mass_function
[quantile]: https://en.wikipedia.org/wiki/Quantile_function

[binomial-pmf]: https://github.com/distributions-io/binomial-pmf
[binomial-cdf]: https://github.com/distributions-io/binomial-cdf
[binomial-quantile]: https://github.com/distributions-io/binomial-quantile
[binomial-mgf]: https://github.com/distributions-io/binomial-mgf
[binomial-random]: https://github.com/distributions-io/binomial-random
[binomial-mean]: https://github.com/distributions-io/binomial-mean
[binomial-median]: https://github.com/distributions-io/binomial-median
[binomial-variance]: https://github.com/distributions-io/binomial-variance
[binomial-skewness]: https://github.com/distributions-io/binomial-skewness
[binomial-ekurtosis]: https://github.com/distributions-io/binomial-ekurtosis
[binomial-entropy]: https://github.com/distributions-io/binomial-entropy

[geometric-pmf]: https://github.com/distributions-io/geometric-pmf
[geometric-cdf]: https://github.com/distributions-io/geometric-cdf
[geometric-quantile]: https://github.com/distributions-io/geometric-quantile
[geometric-mgf]: https://github.com/distributions-io/geometric-mgf
[geometric-random]: https://github.com/distributions-io/geometric-random
[geometric-mean]: https://github.com/distributions-io/geometric-mean
[geometric-median]: https://github.com/distributions-io/geometric-median
[geometric-variance]: https://github.com/distributions-io/geometric-variance
[geometric-skewness]: https://github.com/distributions-io/geometric-skewness
[geometric-ekurtosis]: https://github.com/distributions-io/geometric-ekurtosis
[geometric-entropy]: https://github.com/distributions-io/geometric-entropy

[hypergeometric-pmf]: https://github.com/distributions-io/hypergeometric-pmf
[hypergeometric-cdf]: https://github.com/distributions-io/hypergeometric-cdf
[hypergeometric-quantile]: https://github.com/distributions-io/hypergeometric-quantile
[hypergeometric-mgf]: https://github.com/distributions-io/hypergeometric-mgf
[hypergeometric-random]: https://github.com/distributions-io/hypergeometric-random
[hypergeometric-mean]: https://github.com/distributions-io/hypergeometric-mean
[hypergeometric-median]: https://github.com/distributions-io/hypergeometric-median
[hypergeometric-variance]: https://github.com/distributions-io/hypergeometric-variance
[hypergeometric-skewness]: https://github.com/distributions-io/hypergeometric-skewness
[hypergeometric-ekurtosis]: https://github.com/distributions-io/hypergeometric-ekurtosis
[hypergeometric-entropy]: https://github.com/distributions-io/hypergeometric-entropy

[negative-binomial-pmf]: https://github.com/distributions-io/negative-binomial-pmf
[negative-binomial-cdf]: https://github.com/distributions-io/negative-binomial-cdf
[negative-binomial-quantile]: https://github.com/distributions-io/negative-binomial-quantile
[negative-binomial-mgf]: https://github.com/distributions-io/negative-binomial-mgf
[negative-binomial-random]: https://github.com/distributions-io/negative-binomial-random
[negative-binomial-mean]: https://github.com/distributions-io/negative-binomial-mean
[negative-binomial-median]: https://github.com/distributions-io/negative-binomial-median
[negative-binomial-variance]: https://github.com/distributions-io/negative-binomial-variance
[negative-binomial-skewness]: https://github.com/distributions-io/negative-binomial-skewness
[negative-binomial-ekurtosis]: https://github.com/distributions-io/negative-binomial-ekurtosis
[negative-binomial-entropy]: https://github.com/distributions-io/negative-binomial-entropy

[poisson-pmf]: https://github.com/distributions-io/poisson-pmf
[poisson-cdf]: https://github.com/distributions-io/poisson-cdf
[poisson-quantile]: https://github.com/distributions-io/poisson-quantile
[poisson-mgf]: https://github.com/distributions-io/poisson-mgf
[poisson-random]: https://github.com/distributions-io/poisson-random
[poisson-mean]: https://github.com/distributions-io/poisson-mean
[poisson-median]: https://github.com/distributions-io/poisson-median
[poisson-variance]: https://github.com/distributions-io/poisson-variance
[poisson-skewness]: https://github.com/distributions-io/poisson-skewness
[poisson-ekurtosis]: https://github.com/distributions-io/poisson-ekurtosis
[poisson-entropy]: https://github.com/distributions-io/poisson-entropy

[beta-pdf]: https://github.com/distributions-io/beta-pdf
[beta-cdf]: https://github.com/distributions-io/beta-cdf
[beta-quantile]: https://github.com/distributions-io/beta-quantile
[beta-mgf]: https://github.com/distributions-io/beta-mgf
[beta-random]: https://github.com/distributions-io/beta-random
[beta-mean]: https://github.com/distributions-io/beta-mean
[beta-median]: https://github.com/distributions-io/beta-median
[beta-variance]: https://github.com/distributions-io/beta-variance
[beta-skewness]: https://github.com/distributions-io/beta-skewness
[beta-ekurtosis]: https://github.com/distributions-io/beta-ekurtosis
[beta-entropy]: https://github.com/distributions-io/beta-entropy

[cauchy-pdf]: https://github.com/distributions-io/cauchy-pdf
[cauchy-cdf]: https://github.com/distributions-io/cauchy-cdf
[cauchy-quantile]: https://github.com/distributions-io/cauchy-quantile
[cauchy-random]: https://github.com/distributions-io/cauchy-random
[cauchy-median]: https://github.com/distributions-io/cauchy-median
[cauchy-entropy]: https://github.com/distributions-io/cauchy-entropy

[chisquare-pdf]: https://github.com/distributions-io/chisquare-pdf
[chisquare-cdf]: https://github.com/distributions-io/chisquare-cdf
[chisquare-quantile]: https://github.com/distributions-io/chisquare-quantile
[chisquare-mgf]: https://github.com/distributions-io/chisquare-mgf
[chisquare-random]: https://github.com/distributions-io/chisquare-random
[chisquare-mean]: https://github.com/distributions-io/chisquare-mean
[chisquare-median]: https://github.com/distributions-io/chisquare-median
[chisquare-variance]: https://github.com/distributions-io/chisquare-variance
[chisquare-skewness]: https://github.com/distributions-io/chisquare-skewness
[chisquare-ekurtosis]: https://github.com/distributions-io/chisquare-ekurtosis
[chisquare-entropy]: https://github.com/distributions-io/chisquare-entropy

[erlang-pdf]: https://github.com/distributions-io/erlang-pdf
[erlang-cdf]: https://github.com/distributions-io/erlang-cdf
[erlang-quantile]: https://github.com/distributions-io/erlang-quantile
[erlang-mgf]: https://github.com/distributions-io/erlang-mgf
[erlang-random]: https://github.com/distributions-io/erlang-random
[erlang-mean]: https://github.com/distributions-io/erlang-mean
[erlang-median]: https://github.com/distributions-io/erlang-median
[erlang-variance]: https://github.com/distributions-io/erlang-variance
[erlang-skewness]: https://github.com/distributions-io/erlang-skewness
[erlang-ekurtosis]: https://github.com/distributions-io/erlang-ekurtosis
[erlang-entropy]: https://github.com/distributions-io/erlang-entropy

[exponential-pdf]: https://github.com/distributions-io/exponential-pdf
[exponential-cdf]: https://github.com/distributions-io/exponential-cdf
[exponential-quantile]: https://github.com/distributions-io/exponential-quantile
[exponential-mgf]: https://github.com/distributions-io/exponential-mgf
[exponential-random]: https://github.com/distributions-io/exponential-random
[exponential-mean]: https://github.com/distributions-io/exponential-mean
[exponential-median]: https://github.com/distributions-io/exponential-median
[exponential-variance]: https://github.com/distributions-io/exponential-variance
[exponential-skewness]: https://github.com/distributions-io/exponential-skewness
[exponential-ekurtosis]: https://github.com/distributions-io/exponential-ekurtosis
[exponential-entropy]: https://github.com/distributions-io/exponential-entropy

[f-pdf]: https://github.com/distributions-io/f-pdf
[f-cdf]: https://github.com/distributions-io/f-cdf
[f-quantile]: https://github.com/distributions-io/f-quantile
[f-random]: https://github.com/distributions-io/f-random
[f-mean]: https://github.com/distributions-io/f-mean
[f-median]: https://github.com/distributions-io/f-median
[f-variance]: https://github.com/distributions-io/f-variance
[f-skewness]: https://github.com/distributions-io/f-skewness
[f-ekurtosis]: https://github.com/distributions-io/f-ekurtosis
[f-entropy]: https://github.com/distributions-io/f-entropy

[gamma-pdf]: https://github.com/distributions-io/gamma-pdf
[gamma-cdf]: https://github.com/distributions-io/gamma-cdf
[gamma-quantile]: https://github.com/distributions-io/gamma-quantile
[gamma-mgf]: https://github.com/distributions-io/gamma-mgf
[gamma-random]: https://github.com/distributions-io/gamma-random
[gamma-mean]: https://github.com/distributions-io/gamma-mean
[gamma-median]: https://github.com/distributions-io/gamma-median
[gamma-variance]: https://github.com/distributions-io/gamma-variance
[gamma-skewness]: https://github.com/distributions-io/gamma-skewness
[gamma-ekurtosis]: https://github.com/distributions-io/gamma-ekurtosis
[gamma-entropy]: https://github.com/distributions-io/gamma-entropy

[gumbel-pdf]: https://github.com/distributions-io/gumbel-pdf
[gumbel-cdf]: https://github.com/distributions-io/gumbel-cdf
[gumbel-quantile]: https://github.com/distributions-io/gumbel-quantile
[gumbel-mgf]: https://github.com/distributions-io/gumbel-mgf
[gumbel-random]: https://github.com/distributions-io/gumbel-random
[gumbel-mean]: https://github.com/distributions-io/gumbel-mean
[gumbel-median]: https://github.com/distributions-io/gumbel-median
[gumbel-variance]: https://github.com/distributions-io/gumbel-variance
[gumbel-skewness]: https://github.com/distributions-io/gumbel-skewness
[gumbel-ekurtosis]: https://github.com/distributions-io/gumbel-ekurtosis
[gumbel-entropy]: https://github.com/distributions-io/gumbel-entropy

[invgamma-pdf]: https://github.com/distributions-io/invgamma-pdf
[invgamma-cdf]: https://github.com/distributions-io/invgamma-cdf
[invgamma-quantile]: https://github.com/distributions-io/invgamma-quantile
[invgamma-mgf]: https://github.com/distributions-io/invgamma-mgf
[invgamma-random]: https://github.com/distributions-io/invgamma-random
[invgamma-mean]: https://github.com/distributions-io/invgamma-mean
[invgamma-median]: https://github.com/distributions-io/invgamma-median
[invgamma-variance]: https://github.com/distributions-io/invgamma-variance
[invgamma-skewness]: https://github.com/distributions-io/invgamma-skewness
[invgamma-ekurtosis]: https://github.com/distributions-io/invgamma-ekurtosis
[invgamma-entropy]: https://github.com/distributions-io/invgamma-entropy

[laplace-pdf]: https://github.com/distributions-io/laplace-pdf
[laplace-cdf]: https://github.com/distributions-io/laplace-cdf
[laplace-quantile]: https://github.com/distributions-io/laplace-quantile
[laplace-mgf]: https://github.com/distributions-io/laplace-mgf
[laplace-random]: https://github.com/distributions-io/laplace-random
[laplace-mean]: https://github.com/distributions-io/laplace-mean
[laplace-median]: https://github.com/distributions-io/laplace-median
[laplace-variance]: https://github.com/distributions-io/laplace-variance
[laplace-skewness]: https://github.com/distributions-io/laplace-skewness
[laplace-ekurtosis]: https://github.com/distributions-io/laplace-ekurtosis
[laplace-entropy]: https://github.com/distributions-io/laplace-entropy

[logistic-pdf]: https://github.com/distributions-io/logistic-pdf
[logistic-cdf]: https://github.com/distributions-io/logistic-cdf
[logistic-quantile]: https://github.com/distributions-io/logistic-quantile
[logistic-mgf]: https://github.com/distributions-io/logistic-mgf
[logistic-random]: https://github.com/distributions-io/logistic-random
[logistic-mean]: https://github.com/distributions-io/logistic-mean
[logistic-median]: https://github.com/distributions-io/logistic-median
[logistic-variance]: https://github.com/distributions-io/logistic-variance
[logistic-skewness]: https://github.com/distributions-io/logistic-skewness
[logistic-ekurtosis]: https://github.com/distributions-io/logistic-ekurtosis
[logistic-entropy]: https://github.com/distributions-io/logistic-entropy

[lognormal-pdf]: https://github.com/distributions-io/lognormal-pdf
[lognormal-cdf]: https://github.com/distributions-io/lognormal-cdf
[lognormal-quantile]: https://github.com/distributions-io/lognormal-quantile
[lognormal-mgf]: https://github.com/distributions-io/lognormal-mgf
[lognormal-random]: https://github.com/distributions-io/lognormal-random
[lognormal-mean]: https://github.com/distributions-io/lognormal-mean
[lognormal-median]: https://github.com/distributions-io/lognormal-median
[lognormal-variance]: https://github.com/distributions-io/lognormal-variance
[lognormal-skewness]: https://github.com/distributions-io/lognormal-skewness
[lognormal-ekurtosis]: https://github.com/distributions-io/lognormal-ekurtosis
[lognormal-entropy]: https://github.com/distributions-io/lognormal-entropy

[rayleigh-pdf]: https://github.com/distributions-io/rayleigh-pdf
[rayleigh-cdf]: https://github.com/distributions-io/rayleigh-cdf
[rayleigh-quantile]: https://github.com/distributions-io/rayleigh-quantile
[rayleigh-mgf]: https://github.com/distributions-io/rayleigh-mgf
[rayleigh-random]: https://github.com/distributions-io/rayleigh-random
[rayleigh-mean]: https://github.com/distributions-io/rayleigh-mean
[rayleigh-median]: https://github.com/distributions-io/rayleigh-median
[rayleigh-variance]: https://github.com/distributions-io/rayleigh-variance
[rayleigh-skewness]: https://github.com/distributions-io/rayleigh-skewness
[rayleigh-ekurtosis]: https://github.com/distributions-io/rayleigh-ekurtosis
[rayleigh-entropy]: https://github.com/distributions-io/rayleigh-entropy

[t-pdf]: https://github.com/distributions-io/t-pdf
[t-cdf]: https://github.com/distributions-io/t-cdf
[t-quantile]: https://github.com/distributions-io/t-quantile
[t-random]: https://github.com/distributions-io/t-random
[t-mean]: https://github.com/distributions-io/t-mean
[t-median]: https://github.com/distributions-io/t-median
[t-variance]: https://github.com/distributions-io/t-variance
[t-skewness]: https://github.com/distributions-io/t-skewness
[t-ekurtosis]: https://github.com/distributions-io/t-ekurtosis
[t-entropy]: https://github.com/distributions-io/t-entropy

[uniform-pdf]: https://github.com/distributions-io/uniform-pdf
[uniform-cdf]: https://github.com/distributions-io/uniform-cdf
[uniform-quantile]: https://github.com/distributions-io/uniform-quantile
[uniform-mgf]: https://github.com/distributions-io/uniform-mgf
[uniform-random]: https://github.com/distributions-io/uniform-random
[uniform-mean]: https://github.com/distributions-io/uniform-mean
[uniform-median]: https://github.com/distributions-io/uniform-median
[uniform-variance]: https://github.com/distributions-io/uniform-variance
[uniform-skewness]: https://github.com/distributions-io/uniform-skewness
[uniform-ekurtosis]: https://github.com/distributions-io/uniform-ekurtosis
[uniform-entropy]: https://github.com/distributions-io/uniform-entropy

[normal-pdf]: https://github.com/distributions-io/normal-pdf
[normal-cdf]: https://github.com/distributions-io/normal-cdf
[normal-quantile]: https://github.com/distributions-io/normal-quantile
[normal-mgf]: https://github.com/distributions-io/normal-mgf
[normal-random]: https://github.com/distributions-io/normal-random
[normal-mean]: https://github.com/distributions-io/normal-mean
[normal-median]: https://github.com/distributions-io/normal-median
[normal-variance]: https://github.com/distributions-io/normal-variance
[normal-skewness]: https://github.com/distributions-io/normal-skewness
[normal-ekurtosis]: https://github.com/distributions-io/normal-ekurtosis
[normal-entropy]: https://github.com/distributions-io/normal-entropy

[pareto-type1-pdf]: https://github.com/distributions-io/pareto-type1-pdf
[pareto-type1-cdf]: https://github.com/distributions-io/pareto-type1-cdf
[pareto-type1-quantile]: https://github.com/distributions-io/pareto-type1-quantile
[pareto-type1-mgf]: https://github.com/distributions-io/pareto-type1-mgf
[pareto-type1-random]: https://github.com/distributions-io/pareto-type1-random
[pareto-type1-mean]: https://github.com/distributions-io/pareto-type1-mean
[pareto-type1-median]: https://github.com/distributions-io/pareto-type1-median
[pareto-type1-variance]: https://github.com/distributions-io/pareto-type1-variance
[pareto-type1-skewness]: https://github.com/distributions-io/pareto-type1-skewness
[pareto-type1-ekurtosis]: https://github.com/distributions-io/pareto-type1-ekurtosis
[pareto-type1-entropy]: https://github.com/distributions-io/pareto-type1-entropy

[triangular-pdf]: https://github.com/distributions-io/triangular-pdf
[triangular-cdf]: https://github.com/distributions-io/triangular-cdf
[triangular-quantile]: https://github.com/distributions-io/triangular-quantile
[triangular-mgf]: https://github.com/distributions-io/triangular-mgf
[triangular-random]: https://github.com/distributions-io/triangular-random
[triangular-mean]: https://github.com/distributions-io/triangular-mean
[triangular-median]: https://github.com/distributions-io/triangular-median
[triangular-variance]: https://github.com/distributions-io/triangular-variance
[triangular-skewness]: https://github.com/distributions-io/triangular-skewness
[triangular-ekurtosis]: https://github.com/distributions-io/triangular-ekurtosis
[triangular-entropy]: https://github.com/distributions-io/triangular-entropy

[weibull-pdf]: https://github.com/distributions-io/weibull-pdf
[weibull-cdf]: https://github.com/distributions-io/weibull-cdf
[weibull-quantile]: https://github.com/distributions-io/weibull-quantile
[weibull-mgf]: https://github.com/distributions-io/weibull-mgf
[weibull-random]: https://github.com/distributions-io/weibull-random
[weibull-mean]: https://github.com/distributions-io/weibull-mean
[weibull-median]: https://github.com/distributions-io/weibull-median
[weibull-variance]: https://github.com/distributions-io/weibull-variance
[weibull-skewness]: https://github.com/distributions-io/weibull-skewness
[weibull-ekurtosis]: https://github.com/distributions-io/weibull-ekurtosis
[weibull-entropy]: https://github.com/distributions-io/weibull-entropy
