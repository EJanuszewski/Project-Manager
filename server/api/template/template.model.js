'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TemplateSchema = new Schema({
  name: String,
  projectId: String,
  active: Boolean,
  url: String,
  complete: { type: String, default: 'No' },
  respTablet: { type: String, default: 'No' },
  respMobile: { type: String, default: 'No' }
});

module.exports = mongoose.model('Template', TemplateSchema);