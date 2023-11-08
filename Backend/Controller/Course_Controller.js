const Course = require('./Model/courseModel');

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
        console.log(req.body);
        const data = req.body;
        const course = new Course(data);
        const result = await course.save();
        res.send({ "result": result });
    } catch (error) {
        res.status(500).send({ "error": "An error occurred while saving the course" });
    }
};
