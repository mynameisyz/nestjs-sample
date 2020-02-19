import * as mongoose from 'mongoose';

export const ReportSchema = new mongoose.Schema({
  time: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  projref: {
    type: String,
    required: true,
  }
});
