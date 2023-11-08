const express = require('express');
const mongoose = require('mongoose');

const syllabusSchema = new mongoose.Schema({
    week: { type: String },
    topic: { type: String },
    content: { type: String }
});

const userSchema = new mongoose.Schema({
    id: { type: String },
    name: { type: String },
    email: { type: String },
});

const courseSchema = new mongoose.Schema({
    id: { type: Number }, // Unique identifier for the course
    name: { type: String },
    instructor: { type: String }, // Name of the course instructor
    description: { type: String },
    thumbnail: { type: String }, // Link to the course thumbnail
    duration: { type: String }, // Duration of the course
    schedule: { type: String },
    location: { type: String },
    prerequisites: { type: String },
    syllabus: [syllabusSchema], // Using an array of syllabusSchema
    students: [userSchema] // Using an array of userSchema
});

module.exports = mongoose.model('Course', courseSchema);


// onst courseModel = {
//     id: 1, // Unique identifier for the course
//     name: 'Introduction to React Native',
//     instructor: 'John Doe', // Name of the course instructor
//     description: 'Learn the basics of React Native development and
//     build your first mobile app.',
//     enrollmentStatus: 'Open', // Can be 'Open', 'Closed', or 'In
//     Progress'
//     thumbnail: 'your.image.here', //Link to the course thumbnail
//     duration: '8 weeks', // Duration of the course
//     schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
//     location: 'Online',
//     prerequisites: ['Basic JavaScript knowledge', 'Familiarity with
//     React'],
//     syllabus: [
//     {
//     week: 1,
//     topic: 'Introduction to React Native',
//     content: 'Overview of React Native, setting up your
//     development environment.'
//     },
//     {
//     week: 2,
//     topic: 'Building Your First App',
//     content: 'Creating a simple mobile app using React Native
//     components.'
//     },
//     // Additional weeks and topics...
//     ],
//     students: [
//     {
//     id: 101,
//     name: 'Alice Johnson',
//     email: 'alice@example.com',
//     },
//     {
//     id: 102,
//     name: 'Bob Smith',
//     email: 'bob@example.com',
//     },
//     // Additional enrolled students...
//     ],
//     };
//     export default courseModel;