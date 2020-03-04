const mongoose = require("mongoose");

const HouseSchema = mongoose.Schema({
  // address: {
  // 	type: Map,
  // 	of: new mongoose.Schema({
  //       street: { type: String, required: true },
  //       city: { type: String, required: true },
  //       state: { type: String, required: true },
  //       zip: { type: String, required: true }
  //     }),
  // 	required: true
  // },
  street: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zip: {
    type: String,
    required: true
  },
  landlord_id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  tenant_ids: {
    type: Array,
    of: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Houses", HouseSchema);
