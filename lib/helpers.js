/**
 * Helpers for various tasks
 */

//  Dependencies
var crypto = require('crypto');
var config = require('./config');

//  Container for all the helpers
var helpers = {};

// Create a SHA256 hash
helpers.hash = function (str) {
    if (typeof str === 'string' && str.length > 0) {
        var hash = crypto.createHmac('sha256', config.hashingSecret).update(str).digest('hex');
        return hash;
    } else {
        return false;
    }
};

// Parse a JSON string to an object in all cases, without throwing
helpers.parseBufferToJSON = function (str) {
    try {
        var obj = JSON.parse(str);
        return obj;
    } catch (e) {
        return {};
    }
};

// Create a string of random alphanumeric characters, of a given length
helpers.createRandomString = function (strLength) {
    strLength = typeof strLength === 'number' && strLength > 0 ? strLength : false;

    if (strLength) {
        // Define all the possible characters that could go into a string
        var possibleCharacters = 'abcdefghijklmnoprstuvwxyz1234567890';

        // start the final string
        var str = '';
        for (var i = 1; i <= strLength; i++) {
            // Get a random character from the possible characters string
            var randomCharacter = possibleCharacters.charAt(
                Math.floor(Math.random() * possibleCharacters.length)
            );

            // Append the random character to str
            str += randomCharacter;
        }

        // Return the final string
        return str;
    } else {
        return false;
    }
};

// Export helpers
module.exports = helpers;
