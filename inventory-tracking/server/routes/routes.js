const express = require('express');
const router = express.Router();
const InventoryController = require('../controllers/inventory.controller');

router.get('/', function(req, res){
  res.render('index')
});


router.post('/create', InventoryController.create);
router.put('/:_id', InventoryController.update);
router.delete('/:_id', InventoryController.delete);
router.get('/getAll', InventoryController.get);

module.exports = router;