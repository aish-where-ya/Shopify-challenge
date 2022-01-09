const {v4: uuidv4} = require('uuid');
module.exports.getId = function () {
    return uuidv4();
}