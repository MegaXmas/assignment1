const express = require('express');
const MeetingController = require('../controllers/meeting.controller');
const router = express.Router();

// Each route is mapped to its corresponding controller method
router.get('/', MeetingController.getAllMeetings);
router.get('/:id', MeetingController.getMeetingById);
router.post('/', MeetingController.createMeeting);
router.put('/:id', MeetingController.updateMeeting);
router.delete('/:id', MeetingController.deleteMeeting);

module.exports = router;