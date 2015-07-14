'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var LogSchema = new Schema({
	itemPageId: Schema.Types.ObjectId,
	itemObjectType: String,
  itemType: String,
	action: {type: String, default: 'added', enum: ['added', 'deleted']},
	actionValue: String,
	date: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  userName: String,
  active: Boolean
});

module.exports = mongoose.model('Log', LogSchema);