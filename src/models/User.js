import mongoose from 'mongoose'
import config from '../config.js'

const UserSchema = new mongoose.Schema({
  email: String,
  username: String,
  password: String,
});

const UserModel = mongoose.model('users', UserSchema);

export default UserModel;