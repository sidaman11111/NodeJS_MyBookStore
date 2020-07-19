const { connect } = require("mongoose");

const mongoose = require('mongoose');

const TestDataSchema = new mongoose.Schema({
    name: String,
    content: String
  });

const TestData = mongoose.model('TestData', testSchema, 'TestCollection');

module.exports = TestData;