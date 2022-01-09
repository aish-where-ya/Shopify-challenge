const InventoryService = require('../services/inventory.service');


exports.create = async function (req, res, next) {
    try {
        await InventoryService.create(req.body, req.user);
        res.status(200).json({
            message: 'Inventory created.'
        });
    } catch (e) {
        res.status(500).json({
            message: e.message
        });
    }
};

exports.update = async function (req, res, next) {
    try {
        await InventoryService.update(req.params._id, req.body);
        res.status(200).json({
            message: 'Inventory updated.'
        });
    } catch (e) {
        res.status(500).json({
            message: e.message
        })
    }
};

exports.delete = async function (req, res, next) {
    try {
        await InventoryService.delete(req.params._id);
        res.status(200).json({
            message: 'Inventory deleted.'
        });
    } catch (e) {
        res.status(500).json({
            message: e.message
        });
    }
};

exports.get = async function (req, res, next) {
    try {
        let inventory = await InventoryService.get(req.params._id);
        res.status(200).json({
            inventory
        });
    } catch (e) {
        res.status(500).json({
            message: e.message
        });
    }
};