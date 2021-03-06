const router = require("express").Router();
const Workout = require("../models/workout")

router.get("/api/workouts", (req,res) => {
  Workout.find({})
  .then(workouts => {
    res.send(workouts);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

router.put("/api/workouts/:id", ({body,params},res) => {
  console.log(body)
  Workout.findByIdAndUpdate(params.id,
    {
      $push: {
        exercises: body
      }
    },
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        let totalDurationUpdate = data.totalDuration + body.duration
        Workout.findByIdAndUpdate(params.id,
          {
            totalDuration: totalDurationUpdate
          },
          (err, newData) => {
            if (err) throw err
            else{
              res.send(data)
            }
          })
      }
    }
  );
});

router.post("/api/workouts", ({body},res) => {
  Workout.create(body)
    .then(workout => {
      res.json(workout);
    })
    .catch(err=> {
      res.json(err);
  })
});

router.get("/api/workouts/range", (req,res) => {
  Workout.find({}).limit(7)
  .then(workouts => {
    res.json(workouts);
  })
  .catch(err => {
    res.status(400).json(err);
  });
})

module.exports = router;