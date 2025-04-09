const mongoose = require('mongoose');

const buttonSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "blue",
  },
  animationType: {
    type: String,
    default: "bounce",
  },
  unlocked: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
  },
}, { timestamps: true });

const Button = mongoose.model('Button', buttonSchema);

module.exports = Button;
