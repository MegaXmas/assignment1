const { pool } = require('../config/db.config');

class ClientModel {

    // Get all clients
    async findAll() {
        const [rows] = await pool.query('SELECT * FROM client');
        return rows;
    }


    // Get client by ID
    async findById(id) {
        const [rows] = await pool.query('SELECT * FROM client WHERE id = ?', [id]);
        return rows[0];
    }

     // Create new client
    async create(client) {
        const { name, email, address, mobile, password } = client;
    
        const [result] = await pool.query(
            'INSERT INTO client (id, name, email, address, mobile, password) VALUES (?, ?, ?, ?, ?, ?)',
            [id, name, email, address, mobile, password]
        );

        return { id: result.insertId, ...client };

    }

    // UPADTE client
    async update(id, client) {
        const { name, email, address, mobile, password } = client;
    
        await pool.query(
            'UPDATE client SET name = ?, email = ?, address = ?, mobile = ?, password = ?) WHERE id = ?',
            [name, email, address, mobile, password, id]
        );

        return { id: result.insertId, ...client };
    }

    // Delete client
    async delete(id) {
        const [result] = await pool.query('DELETE FROM client WHERE id = ?', [id]);
        return result.affectedRows > 0;
    }
}

module.exports = new ClientModel();




