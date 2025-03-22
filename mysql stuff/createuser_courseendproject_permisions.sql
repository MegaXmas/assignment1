CREATE USER 'user001'@'localhost' IDENTIFIED BY 'peepee123';
GRANT ALL PRIVILEGES ON course_end_project.* TO 'user001'@'localhost';
FLUSH PRIVILEGES;