const Inventory = require('../models/Inventory')
const utils = require('../utils');

exports.create = async function (obj) {
    if (!obj.name) throw Error('Name is required');
    if (!obj.type) throw Error('Type is required');
    if (!obj.cost) throw Error('Cost is required');
    let inventory = await Inventory.create({
        _id: utils.getId(),
        name: obj.name,
        type: obj.type,
        cost: obj.cost,
        createdAt: obj.createdAt ? new Date(obj.createdAt) : null,
    });
    await inventory.save();
    return inventory;
}

exports.update = async function (_id, obj) {
    if (!_id) throw Error('_id is required.');
    let inventory = await module.exports.findById(_id);
    if (!inventory) {
        throw Error('Inventory not found');
    }
    let updateObj = {};
    if (obj.hasOwnProperty('name')) {
        updateObj.name = obj.name;
    }
    if (obj.hasOwnProperty('type')) {
        updateObj.type = obj.type;
    }
    if (obj.hasOwnProperty('cost')) {
        updateObj.cost = obj.cost;
    }
    await Inventory.updateOne({ _id: inventory._id }, { $set: updateObj });
}

exports.findById = async function (_id) {
    let inventory = await Inventory.findById(_id);
    return inventory;
}

exports.delete = async function (_id) {
    if (!_id) throw Error('_id is required.');
    let inventory = await module.exports.findById(_id);
    if (!inventory) throw Error('Inventory not found.');
    await Inventory.deleteOne({ _id: inventory._id });
}

exports.get = async function () {
    let inventory = await Inventory.find();
    if (!inventory) throw Error('Inventories not found.');
    return inventory;
}
