'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TemplateSchema = new Schema({
  name: String,
  projectId: String,
  active: Boolean,
  url: String,
  templateFile: String,
  complete: { type: Boolean, default: false },
  respTablet: { type: Boolean, default: false },
  respMobile: { type: Boolean, default: false }
});

module.exports = mongoose.model('Template', TemplateSchema);