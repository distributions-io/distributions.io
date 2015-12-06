'use strict';

// DISTRIBUTIONS //

var dist = {};

// DISCRETE DISTRIBUTIONS //

/**
* Binomial distribution.
*/

dist.binom = {};

/*
dist.binom.pmf = require( 'distributions-binomial-pmf' );
dist.binom.cdf = require( 'distributions-binomial-cdf' );
dist.binom.quantile = require( 'distributions-binomial-quantile' );
*/
dist.binom.mgf = require( 'distributions-binomial-mgf' );
/*
dist.binom.random = require( 'distributions-binomial-random' );

dist.binom.mean = require( 'distributions-binomial-mean' );
dist.binom.median = require( 'distributions-binomial-median' );
dist.binom.variance = require( 'distributions-binomial-variance' );
dist.binom.skewness = require( 'distributions-binomial-skewness' );
dist.binom.ekurtosis = require( 'distributions-binomial-ekurtosis' );
dist.binom.entropy = require( 'distributions-binomial-entropy' );
*/

/**
* Geometric distribution.
*/

dist.geom = {};


dist.geom.pmf = require( 'distributions-geometric-pmf' );
dist.geom.cdf = require( 'distributions-geometric-cdf' );
dist.geom.quantile = require( 'distributions-geometric-quantile' );
dist.geom.mgf = require( 'distributions-geometric-mgf' );

// dist.geom.random = require( 'distributions-geometric-random' );

dist.geom.mean = require( 'distributions-geometric-mean' );
dist.geom.median = require( 'distributions-geometric-median' );
dist.geom.variance = require( 'distributions-geometric-variance' );
dist.geom.skewness = require( 'distributions-geometric-skewness' );
dist.geom.ekurtosis = require( 'distributions-geometric-ekurtosis' );
dist.geom.entropy = require( 'distributions-geometric-entropy' );

/**
* Hypergeometric distribution.
*/

dist.hypergeom = {};

/*
dist.hypergeom.pmf = require( 'distributions-hypergeometric-pmf' );
dist.hypergeom.cdf = require( 'distributions-hypergeometric-cdf' );
dist.hypergeom.quantile = require( 'distributions-hypergeometric-quantile' );
dist.hypergeom.mgf = require( 'distributions-hypergeometric-mgf' );

dist.hypergeom.random = require( 'distributions-hypergeometric-random' );

dist.hypergeom.mean = require( 'distributions-hypergeometric-mean' );
dist.hypergeom.median = require( 'distributions-hypergeometric-median' );
dist.hypergeom.variance = require( 'distributions-hypergeometric-variance' );
dist.hypergeom.skewness = require( 'distributions-hypergeometric-skewness' );
dist.hypergeom.ekurtosis = require( 'distributions-hypergeometric-ekurtosis' );
dist.hypergeom.entropy = require( 'distributions-hypergeometric-entropy' );
*/

/**
* Negative binomial distribution.
*/

dist.nbinom = {};

/*
dist.nbinom.pmf = require( 'distributions-negative-binomial-pmf' );
dist.nbinom.cdf = require( 'distributions-negative-binomial-cdf' );
dist.nbinom.quantile = require( 'distributions-negative-binomial-quantile' );
dist.nbinom.mgf = require( 'distributions-negative-binomial-mgf' );

dist.nbinom.random = require( 'distributions-negative-binomial-random' );

dist.nbinom.mean = require( 'distributions-negative-binomial-mean' );
dist.nbinom.median = require( 'distributions-negative-binomial-median' );
dist.nbinom.variance = require( 'distributions-negative-binomial-variance' );
dist.nbinom.skewness = require( 'distributions-negative-binomial-skewness' );
dist.nbinom.ekurtosis = require( 'distributions-negative-binomial-ekurtosis' );
dist.nbinom.entropy = require( 'distributions-negative-binomial-entropy' );
*/

/**
* Poisson distribution.
*/

dist.poisson = {};

dist.poisson.pmf = require( 'distributions-poisson-pmf' );
dist.poisson.cdf = require( 'distributions-poisson-cdf' );
dist.poisson.quantile = require( 'distributions-poisson-quantile' );
// dist.poisson.mgf = require( 'distributions-poisson-mgf' );

// dist.poisson.random = require( 'distributions-poisson-random' );

dist.poisson.mean = require( 'distributions-poisson-mean' );
dist.poisson.median = require( 'distributions-poisson-median' );
dist.poisson.variance = require( 'distributions-poisson-variance' );
// dist.poisson.skewness = require( 'distributions-poisson-skewness' );
dist.poisson.ekurtosis = require( 'distributions-poisson-ekurtosis' );
// dist.poisson.entropy = require( 'distributions-poisson-entropy' );


// CONTINUOUS DISTRIBUTIONS //

/**
* Beta distribution.
*/

dist.beta = {};

/*
dist.beta.pdf = require( 'distributions-beta-pdf' );
dist.beta.cdf = require( 'distributions-beta-cdf' );
dist.beta.quantile = require( 'distributions-beta-quantile' );
dist.beta.mgf = require( 'distributions-beta-mgf' );

dist.beta.random = require( 'distributions-beta-random' );

dist.beta.mean = require( 'distributions-beta-mean' );
dist.beta.median = require( 'distributions-beta-median' );
dist.beta.variance = require( 'distributions-beta-variance' );
dist.beta.skewness = require( 'distributions-beta-skewness' );
dist.beta.ekurtosis = require( 'distributions-beta-ekurtosis' );
dist.beta.entropy = require( 'distributions-beta-entropy' );
*/

/**
* Cauchy distribution.
*/

dist.cauchy = {};

dist.cauchy.pdf = require( 'distributions-cauchy-pdf' );
dist.cauchy.cdf = require( 'distributions-cauchy-cdf' );
dist.cauchy.quantile = require( 'distributions-cauchy-quantile' );

/*
dist.cauchy.random = require( 'distributions-cauchy-random' );

dist.cauchy.median = require( 'distributions-cauchy-median' );
dist.cauchy.entropy = require( 'distributions-cauchy-entropy' );
*/

/**
* Chi-squared distribution.
*/

dist.chisq = {};

/*
dist.chisq.pdf = require( 'distributions-chisquare-pdf' );
dist.chisq.cdf = require( 'distributions-chisquare-cdf' );
dist.chisq.quantile = require( 'distributions-chisquare-quantile' );
dist.chisq.mgf = require( 'distributions-chisquare-mgf' );

dist.chisq.random = require( 'distributions-chisquare-random' );

dist.chisq.mean = require( 'distributions-chisquare-mean' );
dist.chisq.median = require( 'distributions-chisquare-median' );
dist.chisq.variance = require( 'distributions-chisquare-variance' );
dist.chisq.skewness = require( 'distributions-chisquare-skewness' );
dist.chisq.ekurtosis = require( 'distributions-chisquare-ekurtosis' );
dist.chisq.entropy = require( 'distributions-chisquare-entropy' );
*/

/**
* Erlang distribution.
*/

dist.erlang = {};

/*
dist.erlang.pdf = require( 'distributions-erlang-pdf' );
dist.erlang.cdf = require( 'distributions-erlang-cdf' );
dist.erlang.quantile = require( 'distributions-erlang-quantile' );
dist.erlang.mgf = require( 'distributions-erlang-mgf' );

dist.erlang.random = require( 'distributions-erlang-random' );

dist.erlang.mean = require( 'distributions-erlang-mean' );
dist.erlang.median = require( 'distributions-erlang-median' );
dist.erlang.variance = require( 'distributions-erlang-variance' );
dist.erlang.skewness = require( 'distributions-erlang-skewness' );
dist.erlang.ekurtosis = require( 'distributions-erlang-ekurtosis' );
dist.erlang.entropy = require( 'distributions-erlang-entropy' );
*/

/**
* Exponential distribution.
*/

dist.exp = {};

dist.exp.pdf = require( 'distributions-exponential-pdf' );
dist.exp.cdf = require( 'distributions-exponential-cdf' );
dist.exp.quantile = require( 'distributions-exponential-quantile' );
dist.exp.mgf = require( 'distributions-exponential-mgf' );

// dist.exp.random = require( 'distributions-exponential-random' );

dist.exp.mean = require( 'distributions-exponential-mean' );
dist.exp.median = require( 'distributions-exponential-median' );
dist.exp.variance = require( 'distributions-exponential-variance' );
dist.exp.skewness = require( 'distributions-exponential-skewness' );
dist.exp.ekurtosis = require( 'distributions-exponential-ekurtosis' );
// dist.exp.entropy = require( 'distributions-exponential-entropy' );

/**
* F distribution.
*/

dist.f = {};

/*
dist.f.pdf = require( 'distributions-f-pdf' );
dist.f.cdf = require( 'distributions-f-cdf' );
dist.f.quantile = require( 'distributions-f-quantile' );

dist.f.random = require( 'distributions-f-random' );

dist.f.mean = require( 'distributions-f-mean' );
dist.f.median = require( 'distributions-f-median' );
dist.f.variance = require( 'distributions-f-variance' );
dist.f.skewness = require( 'distributions-f-skewness' );
dist.f.ekurtosis = require( 'distributions-f-ekurtosis' );
dist.f.entropy = require( 'distributions-f-entropy' );
*/

/**
* Gamma distribution.
*/

dist.gamma = {};

/*
dist.gamma.pdf = require( 'distributions-gamma-pdf' );
dist.gamma.cdf = require( 'distributions-gamma-cdf' );
dist.gamma.quantile = require( 'distributions-gamma-quantile' );
dist.gamma.mgf = require( 'distributions-gamma-mgf' );

dist.gamma.random = require( 'distributions-gamma-random' );

dist.gamma.mean = require( 'distributions-gamma-mean' );
dist.gamma.median = require( 'distributions-gamma-median' );
dist.gamma.variance = require( 'distributions-gamma-variance' );
dist.gamma.skewness = require( 'distributions-gamma-skewness' );
dist.gamma.ekurtosis = require( 'distributions-gamma-ekurtosis' );
dist.gamma.entropy = require( 'distributions-gamma-entropy' );
*/

/**
* Gumbel distribution.
*/

dist.gumbel = {};

dist.gumbel.pdf = require( 'distributions-gumbel-pdf' );
dist.gumbel.cdf = require( 'distributions-gumbel-cdf' );
dist.gumbel.quantile = require( 'distributions-gumbel-quantile' );
/*
dist.gumbel.mgf = require( 'distributions-gumbel-mgf' );

dist.gumbel.random = require( 'distributions-gumbel-random' );

dist.gumbel.mean = require( 'distributions-gumbel-mean' );
dist.gumbel.median = require( 'distributions-gumbel-median' );
dist.gumbel.variance = require( 'distributions-gumbel-variance' );
dist.gumbel.skewness = require( 'distributions-gumbel-skewness' );
dist.gumbel.ekurtosis = require( 'distributions-gumbel-ekurtosis' );
dist.gumbel.entropy = require( 'distributions-gumbel-entropy' );
*/

/**
* Inverse-Gamma distribution.
*/

dist.invgamma = {};

/*
dist.invgamma.pdf = require( 'distributions-invgamma-pdf' );
dist.invgamma.cdf = require( 'distributions-invgamma-cdf' );
dist.invgamma.quantile = require( 'distributions-invgamma-quantile' );
dist.invgamma.mgf = require( 'distributions-invgamma-mgf' );

dist.invgamma.random = require( 'distributions-invgamma-random' );

dist.invgamma.mean = require( 'distributions-invgamma-mean' );
dist.invgamma.median = require( 'distributions-invgamma-median' );
dist.invgamma.variance = require( 'distributions-invgamma-variance' );
dist.invgamma.skewness = require( 'distributions-invgamma-skewness' );
dist.invgamma.ekurtosis = require( 'distributions-invgamma-ekurtosis' );
dist.invgamma.entropy = require( 'distributions-invgamma-entropy' );
*/

/**
* Laplace distribution.
*/

dist.laplace = {};


dist.laplace.pdf = require( 'distributions-laplace-pdf' );
dist.laplace.cdf = require( 'distributions-laplace-cdf' );
dist.laplace.quantile = require( 'distributions-laplace-quantile' );
/*
dist.laplace.mgf = require( 'distributions-laplace-mgf' );

dist.laplace.random = require( 'distributions-laplace-random' );

dist.laplace.mean = require( 'distributions-laplace-mean' );
dist.laplace.median = require( 'distributions-laplace-median' );
dist.laplace.variance = require( 'distributions-laplace-variance' );
dist.laplace.skewness = require( 'distributions-laplace-skewness' );
dist.laplace.ekurtosis = require( 'distributions-laplace-ekurtosis' );
dist.laplace.entropy = require( 'distributions-laplace-entropy' );
*/

/**
* Logistic distribution.
*/

dist.logistic = {};

dist.logistic.pdf = require( 'distributions-logistic-pdf' );
dist.logistic.cdf = require( 'distributions-logistic-cdf' );
dist.logistic.quantile = require( 'distributions-logistic-quantile' );
/*
dist.logistic.mgf = require( 'distributions-logistic-mgf' );

dist.logistic.random = require( 'distributions-logistic-random' );

dist.logistic.mean = require( 'distributions-logistic-mean' );
dist.logistic.median = require( 'distributions-logistic-median' );
dist.logistic.variance = require( 'distributions-logistic-variance' );
dist.logistic.skewness = require( 'distributions-logistic-skewness' );
dist.logistic.ekurtosis = require( 'distributions-logistic-ekurtosis' );
dist.logistic.entropy = require( 'distributions-logistic-entropy' );
*/

/**
* Lognormal distribution.
*/

dist.lnorm = {};

dist.lnorm.pdf = require( 'distributions-lognormal-pdf' );
dist.lnorm.cdf = require( 'distributions-lognormal-cdf' );
dist.lnorm.quantile = require( 'distributions-lognormal-quantile' );
/*
dist.lnorm.mgf = require( 'distributions-lognormal-mgf' );

dist.lnorm.random = require( 'distributions-lognormal-random' );

dist.lnorm.mean = require( 'distributions-lognormal-mean' );
dist.lnorm.median = require( 'distributions-lognormal-median' );
dist.lnorm.variance = require( 'distributions-lognormal-variance' );
dist.lnorm.skewness = require( 'distributions-lognormal-skewness' );
dist.lnorm.ekurtosis = require( 'distributions-lognormal-ekurtosis' );
dist.lnorm.entropy = require( 'distributions-lognormal-entropy' );
*/

/**
* Rayleigh distribution.
*/

dist.rayleigh = {};

dist.rayleigh.pdf = require( 'distributions-rayleigh-pdf' );
dist.rayleigh.cdf = require( 'distributions-rayleigh-cdf' );
dist.rayleigh.quantile = require( 'distributions-rayleigh-quantile' );
// dist.rayleigh.mgf = require( 'distributions-rayleigh-mgf' );

// dist.rayleigh.random = require( 'distributions-rayleigh-random' );

dist.rayleigh.mean = require( 'distributions-rayleigh-mean' );
dist.rayleigh.median = require( 'distributions-rayleigh-median' );
dist.rayleigh.variance = require( 'distributions-rayleigh-variance' );
dist.rayleigh.skewness = require( 'distributions-rayleigh-skewness' );
dist.rayleigh.ekurtosis = require( 'distributions-rayleigh-ekurtosis' );
dist.rayleigh.entropy = require( 'distributions-rayleigh-entropy' );

/**
* Student's t distribution.
*/

dist.t = {};

dist.t.pdf = require( 'distributions-t-pdf' );
/*
dist.t.cdf = require( 'distributions-t-cdf' );
dist.t.quantile = require( 'distributions-t-quantile' );

dist.t.random = require( 'distributions-t-random' );

dist.t.mean = require( 'distributions-t-mean' );
dist.t.median = require( 'distributions-t-median' );
dist.t.variance = require( 'distributions-t-variance' );
dist.t.skewness = require( 'distributions-t-skewness' );
dist.t.ekurtosis = require( 'distributions-t-ekurtosis' );
dist.t.entropy = require( 'distributions-t-entropy' );
*/

/**
* Uniform distribution.
*/

dist.unif = {};

dist.unif.pdf = require( 'distributions-uniform-pdf' );
dist.unif.cdf = require( 'distributions-uniform-cdf' );
dist.unif.quantile = require( 'distributions-uniform-quantile' );
dist.unif.mgf = require( 'distributions-uniform-mgf' );

/*
dist.unif.random = require( 'distributions-uniform-random' );

dist.unif.mean = require( 'distributions-uniform-mean' );
dist.unif.median = require( 'distributions-uniform-median' );
dist.unif.variance = require( 'distributions-uniform-variance' );
dist.unif.skewness = require( 'distributions-uniform-skewness' );
dist.unif.ekurtosis = require( 'distributions-uniform-ekurtosis' );
dist.unif.entropy = require( 'distributions-uniform-entropy' );
*/

/**
* Normal distribution.
*/

dist.norm = {};

dist.norm.pdf = require( 'distributions-normal-pdf' );
dist.norm.cdf = require( 'distributions-normal-cdf' );
dist.norm.quantile = require( 'distributions-normal-quantile' );
// dist.norm.mgf = require( 'distributions-normal-mgf' );

dist.norm.random = require( 'distributions-normal-random' );

/*
dist.norm.mean = require( 'distributions-normal-mean' );
dist.norm.median = require( 'distributions-normal-median' );
dist.norm.variance = require( 'distributions-normal-variance' );
dist.norm.skewness = require( 'distributions-normal-skewness' );
dist.norm.ekurtosis = require( 'distributions-normal-ekurtosis' );
dist.norm.entropy = require( 'distributions-normal-entropy' );
*/

/**
* Pareto (Type 1) distribution.
*/

dist.pareto = {};

/*
dist.pareto.pdf = require( 'distributions-pareto-type1-pdf' );
dist.pareto.cdf = require( 'distributions-pareto-type1-cdf' );
dist.pareto.quantile = require( 'distributions-pareto-type1-quantile' );
dist.pareto.mgf = require( 'distributions-pareto-type1-mgf' );

dist.pareto.random = require( 'distributions-pareto-type1-random' );

dist.pareto.mean = require( 'distributions-pareto-type1-mean' );
dist.pareto.median = require( 'distributions-pareto-type1-median' );
dist.pareto.variance = require( 'distributions-pareto-type1-variance' );
dist.pareto.skewness = require( 'distributions-pareto-type1-skewness' );
dist.pareto.ekurtosis = require( 'distributions-pareto-type1-ekurtosis' );
dist.pareto.entropy = require( 'distributions-pareto-type1-entropy' );
*/

/**
* Triangular distribution.
*/

dist.triangular = {};


dist.triangular.pdf = require( 'distributions-triangular-pdf' );
dist.triangular.cdf = require( 'distributions-triangular-cdf' );
dist.triangular.quantile = require( 'distributions-triangular-quantile' );
/*
dist.triangular.mgf = require( 'distributions-triangular-mgf' );

dist.triangular.random = require( 'distributions-triangular-random' );

dist.triangular.mean = require( 'distributions-triangular-mean' );
dist.triangular.median = require( 'distributions-triangular-median' );
dist.triangular.variance = require( 'distributions-triangular-variance' );
dist.triangular.skewness = require( 'distributions-triangular-skewness' );
dist.triangular.ekurtosis = require( 'distributions-triangular-ekurtosis' );
dist.triangular.entropy = require( 'distributions-triangular-entropy' );
*/

/**
* Weibull distribution.
*/

dist.weibull = {};

dist.weibull.pdf = require( 'distributions-weibull-pdf' );
dist.weibull.cdf = require( 'distributions-weibull-cdf' );
dist.weibull.quantile = require( 'distributions-weibull-quantile' );
/*
dist.weibull.mgf = require( 'distributions-weibull-mgf' );

dist.weibull.random = require( 'distributions-weibull-random' );

dist.weibull.mean = require( 'distributions-weibull-mean' );
dist.weibull.median = require( 'distributions-weibull-median' );
dist.weibull.variance = require( 'distributions-weibull-variance' );
dist.weibull.skewness = require( 'distributions-weibull-skewness' );
dist.weibull.ekurtosis = require( 'distributions-weibull-ekurtosis' );
dist.weibull.entropy = require( 'distributions-weibull-entropy' );
*/

// EXPORTS //

module.exports = dist;
