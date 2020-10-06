/**
 * These are the request handlers
 */

// Define the handlers
var handlers = {};

// sample handler
handlers.sample = function (data, callback) {
    // callback a http status code, and payload object
    callback(406, { name: 'sample handler' });
};

// Not found handler
handlers.notFound = function (data, callback) {
    callback(404);
};

// Export the handlers
module.exports = handlers;
