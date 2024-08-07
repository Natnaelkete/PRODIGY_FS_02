import mongoose from "mongoose";

const employeeModel = new mongoose.Schema({
  fullName: { type: String, required: [true, "Full-name is required"] },
  email: { type: String, required: [true, "Email is required"], unique: true },
  address: { type: String, required: [true, "address is required"] },
  phoneNumber: { type: Number, required: [true, "Phone number is required"] },
  education: { type: String, required: [true, "Education is required"] },
  description: { type: String, required: [true, "Description is required"] },
},{timestamps:true});

const Employee = mongoose.model("Employee", employeeModel);
export default Employee;
