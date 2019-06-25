const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  itemName: {
      type: String,
      unique: true
  },
  requiredItemLevel: {
      type: Number
  },
  itemDescription: {
      type: String
  },
  itemArea: {
      type: String
  },
  itemNpc: {
      type: String
  },
  createdAt: {
    type: Date
  },
  createdBy: {
    type: String
  }
});
ItemSchema.set('toJSON', { virtuals: true });

const Items = mongoose.model('Items', ItemSchema);

module.exports = Items;
