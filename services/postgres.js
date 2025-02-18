const config = require('../config/index');
var pgLib = require('pg');
const promise = require('bluebird'); 
const initOptions = {
    promiseLib: promise 
};

const pgp = require('pg-promise')(initOptions);
const db = pgp(config.db); 

module.exports = db;