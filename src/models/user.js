import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  contactNo: String,
  isdCode: String,
  countryCode: String,
  designation: String,
  roleID: String,
  systemAccess: {
    type: Number,
    default: 0,
  },
  type: Number, // 1 => internal , 0 => external
  googleId: { type: String },
});

const User = mongoose.model('User', userSchema);

export default User;
