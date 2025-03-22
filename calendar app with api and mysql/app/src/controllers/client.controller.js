const ClientModel = require('../models/client.model');

// Controller methods follow a consistent pattern:
// 1. Extract data from request
// 2. Call appropriate model method
// 3. Handle any errors
// 4. Send appropriate response

class ClientController {
  // Get all clients
  async getAllClients(req, res) {
    try {
      const clients = await ClientModel.findAll();
      res.status(200).json(clients);
    } catch (error) {
      console.error('Error retrieving clients:', error);
      res.status(500).json({ message: 'Failed to retrieve clients' });
    }
  }

  // Get client by ID
  async getClientById(req, res) {
    try {
      const id = req.params.id;
      const client = await ClientModel.findById(id);
      
      if (!client) {
        return res.status(404).json({ message: `Client with ID ${id} not found` });
      }
      
      res.status(200).json(client);
    } catch (error) {
      console.error('Error retrieving client:', error);
      res.status(500).json({ message: 'Failed to retrieve client' });
    }
  }

   // Create new client
   async createClient(req, res) {
    try {
      // Validate request body
      if (!req.body.name || !req.body.email) {
        return res.status(400).json({ message: 'Name and email are required fields' }); '???'
      }
      
      const newClient = await ClientModel.create(req.body);
      res.status(201).json(newClient);
    } catch (error) {
      console.error('Error creating client:', error);
      res.status(500).json({ message: 'Failed to create client' });
    }
  }

 // Update client
 async updateClient(req, res) {
    try {
      const id = req.params.id;
      const client = await ClientModel.findById(id);
      
      if (!client) {
        return res.status(404).json({ message: `Client with ID ${id} not found` });
      }
      
      const updatedClient = await ClientModel.update(id, req.body);
      res.status(200).json(updatedClient);
    } catch (error) {
      console.error('Error updating client:', error);
      res.status(500).json({ message: 'Failed to update client' });
    }
  }

  // Delete client
  async deleteClient(req, res) {
    try {
      const id = req.params.id;
      const success = await ClientModel.delete(id);
      
      if (!success) {
        return res.status(404).json({ message: `Client with ID ${id} not found` });
      }
      
      res.status(200).json({ message: `Client with ID ${id} deleted successfully` });
    } catch (error) {
      console.error('Error deleting client:', error);
      res.status(500).json({ message: 'Failed to delete client' });
    }
  }

}


module.exports = new ClientController