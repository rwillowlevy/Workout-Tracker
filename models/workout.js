const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workout = new Schema({
  day: {
    type: Date,
    default: () => Date().now
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

workout.virtual(`totalDuration`).get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
})


const Workout = mongoose.model("Workout", workout);

module.exports = Workout;