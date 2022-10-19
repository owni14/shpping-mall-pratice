const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
  {
    writer: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    title: {
      type: String,
      maxlength: 50,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      default: 0,
    },
    images: {
      type: Array,
      default: [],
    },
    sold: {
      type: Number,
      maxlength: 100,
      default: 0,
    },
    continents: {
      type: Number,
      default: 1,
    },
    view: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

productSchema.index(
  {
    title: 'text',
    description: 'text',
  },
  {
    wweights: {
      title: 5,
      description: 1,
    },
  }
);
const Product = mongoose.model('Product', productSchema);

module.exports = { Product };
