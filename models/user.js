import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already exists!'],
    required: [true, 'Email is required!'],
  },
  username: {
    type: String,
    required: [true, 'Username is required!'],
    match: [/^[a-zA-Z0-9\s]*$/, "Username should not have special character!"],
  },
  password: {
    type: String,
    required: [true, 'Password is required!'],
    match: [/^[a-zA-Z0-9]{8,20}$/, "Password invalid, it should contain 8-20 alphanumeric letters and be unique!"]
  },
  image: {
    type: String,
  }
});

const User = models.User || model("User", UserSchema);

export default User;