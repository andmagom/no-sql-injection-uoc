const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
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
  const resultBD = await MyModel.findOne({
    email: username,
    Password: password
  });

  let result = false;
  if (resultBD && resultBD.email) {
    result = true;
  }
  return result;
};

module.exports = {
  validateCredential,
};