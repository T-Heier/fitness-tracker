const router = require("express").Router();
const { Workout } = require("../../models/fitness");

// builds workout
router.post("/workouts", async (req, res) => {
  try {
    const workoutData = await Workout.create({});
    console.log(workoutData);
    res.status(200).json(workoutData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// updates workout from id
router.put("/workouts/:id", async (req, res) => {
  try {
    console.log("Workout ID" + req.params.id)
    console.log("Exercises" + req.body)
    const workoutData = await Workout.findByIdAndUpdate(
      req.params.id,
      { $push: { exercises: req.body } },
      { new: true }
    );
    console.log(workoutData);
    res.status(200).json(workoutData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/workouts", async (req, res) => {
  try{
// total of workout time
    const workoutData = await Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: "$exercises.duration",
        },
      },
    },
  ])
console.log()
  res.status(200).json(workoutData)
} catch(err) {
    res.status(500).json(err)
}
});

// Gets the workout data
router.get("/workouts/range", async (req,res) => {
    try{
        const workoutData = await Workout.aggregate([
        {
          $addFields: {
            totalDuration: {
              $sum: "$exercises.duration",
            },
          },
        },
      ]).sort({_id: -1}).limit(7)

      res.status(200).json(workoutData)
    } catch(err) {
        res.status(500).json(err)
    }
});

// Route that deletes the workout.
router.delete("/workouts", async (req,res) => {
    try {
    const workoutData = await Workout.findByIdAndDelete(req.body);
    res.status(200).json(true)
    console.log(workoutData);
} catch(err) {
    res.status(500).json(err)
}
});


module.exports = router;