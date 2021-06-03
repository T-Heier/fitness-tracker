const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const fitnessData = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },

  workout: [{
      type: {
        type: String,
        required: true,
      },

      name: {
        type: String,
        required: true,
      },

      duration: {
        type: Number,
        required: true,
      },

      weight: {
        type: Number
      },

      reps: {
        type: Number
      },

      sets: {
        type: Number
      },

      distance: {
        type: Number
      },
  }]

});

const fitness = mongoose.model("fitness", fitnessData);

module.exports = fitnessData;