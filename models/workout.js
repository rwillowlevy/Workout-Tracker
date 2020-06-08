const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date()
  },
  totalDuration: {
    type: Number,
    default: 0
  },
  exercises: [{
    type: {
      type: String,
      trim: true,
      require: [true, "A type is required"]
    },
    name: {      
      type: String,
      trim: true,
      require: [true, "A name is required"]
    },
    duration: {      
      type: Number,
      require: [true, "A number is required"]
    },
    distance: {
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
    ],
}
);

const Workout = mongoose.model("Workout", workoutSchema );

module.exports = Workout;