const express = require('express');
const ClientController = require('../controllers/client.controller');
const router = express.Router();

// Each route is mapped to its corresponding controller method
router.get('/', ClientController.getAllClients);
router.get('/:id', ClientController.getClientById);
router.post('/', ClientController.createClient);
router.put('/:id', ClientController.updateClient);
router.delete('/:id', ClientController.deleteClient);

module.exports = router;