const meetingModel = require('../models/meeting.model');

// Controller methods follow a consistent pattern:
// 1. Extract data from request
// 2. Call appropriate model method
// 3. Handle any errors
// 4. Send appropriate response

class MeetingController {
  // Get all meetings
  async getAllMeetings(req, res) {
    try {
      const meetings = await meetingModel.findAll();
      res.status(200).json(meetings);
    } catch (error) {
      console.error('Error retrieving meeting:', error);
      res.status(500).json({ message: 'Failed to retrieve meeting' });
    }
  }

  // Get meeting by ID
  async getMeetingById(req, res) {
    try {
      const id = req.params.meetingId;
      const meeting = await meetingModel.findById(id);
      
      if (!meeting) {
        return res.status(404).json({ message: `meeting with ID ${id} not found` });
      }
      
      res.status(200).json(meeting);
    } catch (error) {
      console.error('Error retrieving meeting:', error);
      res.status(500).json({ message: 'Failed to retrieve meeting' });
    }
  }

  // Get meetings by clientID
  async getMeetingsByClientId(req, res) {
    try {
      const id = req.params.clientId;
      const meetings = await meetingModel.getMeetingsByClientId(id);
      
      if (!meetings) {
        return res.status(404).json({ message: `no meetings with ID ${id} found` });
      }
      
      res.status(200).json(meetings);
    } catch (error) {
      console.error('Error retrieving meetings:', error);
      res.status(500).json({ message: 'Failed to retrieve meetings' });
    }
  }

   // Create new meeting
   async createMeeting(req, res) {
    try {
      // Validate request body
      if (!req.body.meetingTopic || !req.body.meetingDateTime) {
        return res.status(400).json({ message: 'Topic and Date and Time are required fields' }); '???'
      }
      
      const newMeeting = await meetingModel.create(req.body);
      res.status(201).json(newMeeting);
    } catch (error) {
      console.error('Error creating meeting:', error);
      res.status(500).json({ message: 'Failed to create meeting' });
    }
  }

 // Update meeting
 async updateMeeting(req, res) {
    try {
      const id = req.params.meetingId;
      const meeting = await meetingModel.findById(id);
      
      if (!meeting) {
        return res.status(404).json({ message: `meeting with ID ${id} not found` });
      }
      
      const updatedMeeting = await meetingModel.update(id, req.body);
      res.status(200).json(updatedMeeting);
    } catch (error) {
      console.error('Error updating meeting:', error);
      res.status(500).json({ message: 'Failed to update meeting' });
    }
  }

  // Delete meeting
  async deleteMeeting(req, res) {
    try {
      const id = req.params.meetingId;
      const success = await meetingModel.delete(id);
      
      if (!success) {
        return res.status(404).json({ message: `meeting with ID ${id} not found` });
      }
      
      res.status(200).json({ message: `meeting with ID ${id} deleted successfully` });
    } catch (error) {
      console.error('Error deleting meeting:', error);
      res.status(500).json({ message: 'Failed to delete meeting' });
    }
  }

}


module.exports = new MeetingController()