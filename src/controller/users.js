const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const Joi = require('@hapi/joi');

const schema = Joi.object({
  uname: Joi.string().min(3).max(30),
  psw: Joi.string().min(3).max(30),
});
 
const User = new Schema({
  _id: ObjectId,
  email: String,
  Name: String,
  Password: String,
  AccountId: String
});

const MyModel = mongoose.model('users', User);

const validateCredential = async (username, password) => {
  await mongoose.connect('mongodb://localhost:27017/UOC', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const validation = schema.validate({ uname: username, psw: password });
  let result = false;


  if(!validation.error) {
    const resultBD = await MyModel.findOne({
      email: username,
      Password: password
    });

    if (resultBD && resultBD.email) {
      result = true;
    }
  }
  return result;
};

module.exports = {
  validateCredential,
};