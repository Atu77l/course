import create from 'zustand';
import {devtools, persist} from 'zustand/middleware'

const courseStore = (set) => ({
    courseDetail:{
        "_id": {
          "$oid": "654bbd631cfdc5166288bfc7"
        },
        "id": 1,
        "name": "Introduction to React Native",
        "instructor": "John Doe",
        "description": "Learn the basics of React Native development and build your first mobile app.",
        "enrollmentStatus": "Open",
        "thumbnail": "your.image.here",
        "duration": "8 weeks",
        "schedule": "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
        "location": "Online",
        "prerequisites": [
          "Basic JavaScript knowledge",
          "Familiarity with React"
        ],
        "syllabus": [
          {
            "week": 1,
            "topic": "Introduction to React Native",
            "content": "Overview of React Native, setting up your development environment."
          },
          {
            "week": 2,
            "topic": "Building Your First App",
            "content": "Creating a simple mobile app using React Native components."
          }
        ],
        "students": [
          {
            "id": 101,
            "name": "Alice Johnson",
            "email": "alice@example.com"
          },
          {
            "id": 102,
            "name": "Bob Smith",
            "email": "bob@example.com"
          }
        ]
      },

    // For Updating courseDetail
    updateCourseDetail:(course1) => { 
        set((state) => (
           { courseDetail:course1 }
        ))
    }
})

// Now,We will make a above code as a store and perform action in another component to perform it.
const useCourseStore = create(
    devtools(
        persist(courseStore, {
            name: "course",
        })
    )
)


export default useCourseStore;