const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const offerTradeschema = new Schema({
  Name: { type: String, required: [true, "ItemName is required"] },
  Category: { type: String, required: [true, "Item Category is required"] },
  SavedBy: { type: Schema.Types.ObjectId, ref: "user" },
  Status: { type: String },
  tradeOfferedBy: { type: Schema.Types.ObjectId, ref: "User" },
});


const offerItem = mongoose.model("offer", offerTradeschema);
module.exports = offerItem;
