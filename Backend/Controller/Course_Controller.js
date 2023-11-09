const mongoose=require('mongoose')
const Course=require('./../Model/courseSchema')



// Fetching courses
exports.fetch_course = async (req, res) => {
    try {
        const data = await Course.find();
        res.send({ "detail": data });
    } catch (error) {
        res.status(500).send({ "error": "An error occurred while fetching courses" });
    }
};
// Saving a course
exports.save_course = async (req, res) => {
    try {
        const data = req.body;
        const course = new Course(data);
        const result = await course.save();
        res.status(201).send({ result }); // Send a 201 Created status and the saved data
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "An error occurred while saving the course" });
    }
};
