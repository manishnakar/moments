'use strict';

const AWS = require('aws-sdk');

AWS.config.setPromisesDependency(require('bluebird'));
const s3 = new AWS.S3();

module.exports = function(req, res, next) {

};
