ALTER TABLE meeting (
	meetingTopic varchar(255) NOT NULL,
	numberOfAttendees smallint NOT NULL,
	meetingDateTime varchar(255) NOT NULL,
    clientId int NOT NULL,
    meetingId int NOT NULL,
	PRIMARY KEY(meetingId)
);