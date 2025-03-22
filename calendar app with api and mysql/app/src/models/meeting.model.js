const { pool } = require('../config/db.config');

class MeetingModel {

    // Get all meetings
    async findAll() {
        const [rows] = await pool.query('SELECT * FROM meeting');
        return rows;
    }


    // Get meeting by ID
    async findById(meetingId) {
        const [rows] = await pool.query('SELECT * FROM meeting WHERE id = ?', [meetingId]);
        return rows[0];
    }

    // Get meeting by ID
    async getMeetingsByClientId(clientId) {
        const [rows] = await pool.query('SELECT * FROM meeting WHERE clientId = ?', [clientId]);
        return rows;
    }

     // Create new meeeting
    async create(meeting) {
        const { id, meetingTopic, numberOfAttendees, meetingDateTime } = meeting;
    
        const [result] = await pool.query(
            'INSERT INTO meeting (id, meetingTopic, numberOfAttendees, meetingDateTime) VALUES (?, ?, ?, ?, ?)',
            [id, meetingTopic, numberOfAttendees, meetingDateTime, meetingId]
        );

        return { id: result.insertId, ...meeting };

    }

    // UPADTE meetings
    async update(meetingId, meeting) {
        const { meetingTopic, numberOfAttendees, meetingDateTime, clientId, meetingId } = meeting;
    
        await pool.query(
            'UPDATE meeting SET meetingTopic = ?, numberOfAttendees = ?, meetingDateTime = ?, clientId = ?, meetingId = ?',
            [meetingTopic, numberOfAttendees, meetingDateTime, clientId, meetingId]
        );

        return { id: result.insertId, ...meeting };
    }

    // Delete meeting
    async delete(id) {
        const [result] = await pool.query('DELETE FROM meeting WHERE id = ?', [id]);
        return result.affectedRows > 0;
    }
}

module.exports = new MeetingModel();