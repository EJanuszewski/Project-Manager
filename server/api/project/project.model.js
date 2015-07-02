'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProjectSchema = new Schema({
  name: String,
  info: String,
  active: Boolean,
  templates: [{
      type: Schema.Types.ObjectId,
      ref: 'Template'
    }]
});

module.exports = mongoose.model('Project', ProjectSchema);