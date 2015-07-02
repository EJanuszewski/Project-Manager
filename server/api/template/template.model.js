'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TemplateSchema = new Schema({
  name: String,
  projectId: String,
  active: Boolean,
  url: String,
  complete: Boolean,
  respTablet: Boolean,
  respMobile: Boolean
});

module.exports = mongoose.model('Template', TemplateSchema);