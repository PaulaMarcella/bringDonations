"use strict";
const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
const donationSchema = new mongoose.Schema(
  {
    donationName: {
      type: String,
      required: true
    },
    category: {
      type: String,
      enum: ["Food", "Clothing", "Furniture", "Other"],
      default: "Other"
    },
    description: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      default:
        "https://atasouthport.com/wp-content/uploads/2017/04/default-image.jpg"
    },
    _creator: {
      type: ObjectId,
      ref: "User"
    },
    location: [
      {
        longitude: {
          type: Number,
          min: -180,
          max: 180
        },
        latitude: {
          type: Number,
          min: -180,
          max: 180
        }
      }
    ]
  },
  {
    timestamps: true
  }
);
donationSchema.index({ location: "2dsphere" });
module.exports = mongoose.model("Donation", donationSchema);
