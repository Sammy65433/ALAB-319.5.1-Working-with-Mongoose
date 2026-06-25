// Schema Example
// const playerSchema = new mongoose.Schema({
//   name: String,
//   team: String,
//   position: String,
//   pointsPerGame: Number
// })

// {
//   name: "LeBron James",
//   team: "Lakers",
//   position: "SF",
//   pointsPerGame: 27.1
// }


import mongoose from "mongoose";

const gradesSchema = new mongoose.Schema({
    learner_id: {
        type: Number,
        required: true
    },
    class_id: {
        type: Number,
        required: true
    
    },
    
    scores: [{
        type: {
            type: String },
            
        score: Number
    }],

    

})
// Compile in to Module based of Schema
//model, schema, name of collection
const gradez = mongoose.model("Grade", gradesSchema, "grades")
export default gradez


// postSchema.virtual("hasPermalink").get(function() {
//     return `${this.title} by ${this.author}`;
// })


// /* STATIC METHOD
//    Runs on the model itself: Post.findByAuthor(...)
// */
// postSchema.statics.findByAuthor = function (authorName) {
//     return this.find({
//         author: authorName
//     });
// };

// /* INSTANCE METHOD
//    Runs on one document: onePost.getSummary()
// */
// postSchema.methods.getSummary = function () {
//     return `${this.title} by ${this.author}`;
// };



// // Import the Mongoose library so we can create schemas and models
// import mongoose from "mongoose";

// // Create a new schema for documents in the posts collection
// // A schema is the blueprint for what each document should look like
// const postSchema = new mongoose.Schema({
//     // The main content/body of the post
//     body: {
//         // This field must be text
//         type: String,

//         // This field is required, so Mongoose will reject a post
//         // if no body value is provided
//         required: true
//     },

//     // The name of the person who wrote the post
//     author: {
//         // Must be a string
//         type: String,

//         // Required field
//         required: true
//     },

//     // The title of the post
//     title: {
//         // Must be a string
//         type: String,

//         // Required field
//         required: true
//     },

//     // Tags is an array of strings
//     // Example: ["mongodb", "mongoose", "backend"]
//     tags: [String],

//     // Comments is an array of objects
//     // Each object represents one comment on the post
//     comments: [{
//         // The text/content of the comment
//         body: String,

//         // The title field for the comment
//         // If this is actually supposed to be the comment author's name,
//         // you may want to rename this field later
//         title: String,

//         // Email for the person who made the comment
//         email: {
//             // Must be a string
//             type: String,

//             // Required, so every comment must include an email
//             required: true
//         },
//     }],

//     // Stores the date the post was created
//     date: {
//         // Mongoose should treat this value as a Date object
//         type: Date,

//         // Default value if no date is provided when creating a post
//         // Note: `new Date()` runs immediately when this file loads.
//         // A better pattern is usually `default: Date.now`
//         default: new Date()
//     }

// });

// // Create a model from the schema
// // 1st arg: "Post" is the model name used in your app
// // 2nd arg: postSchema is the schema this model uses
// // 3rd arg: "posts" is the exact MongoDB collection name
// const post = mongoose.model("Post", postSchema, "posts");

// // Export the model so it can be imported and used in other files
// // This is what you'll use to create, read, update, and delete posts
// export default post;











// Schema Example
// const playerSchema = new mongoose.Schema({
//   name: String,
//   team: String,
//   position: String,
//   pointsPerGame: Number
// })

// {
//   name: "LeBron James",
//   team: "Lakers",
//   position: "SF",
//   pointsPerGame: 27.1
// }