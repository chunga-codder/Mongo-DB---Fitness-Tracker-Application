const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
      type: Date,
      default: Date.now
    },
    exercise: [
      {
        type: {
            type: String,
            trim: true,
            required: "Please Submit An Exercise Type"
        },
        name: {
            type: String,
            trim: true,
            required: "Please Submit An Exercise Name"
        },
        duration: {
            type: Number
        },  
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        }
      }
    ]
  });
  
  const Workout = mongoose.model("Workout", WorkoutSchema);
  
  module.exports = Workout;