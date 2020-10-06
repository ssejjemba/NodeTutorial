/**
 * These are the request handlers
 */

// Define the handlers
var handlers = {};

// ping handler
handlers.ping = function (data, callback) {
    // callback a http status code, and payload object
    callback(200);
};

// Not found handler
handlers.notFound = function (data, callback) {
    callback(404);
};

// Export the handlers
module.exports = handlers;
