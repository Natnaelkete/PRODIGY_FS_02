import asyncHandler from "../middlewares/asyncHandler.js";
import Employee from "../models/employeeModel.js";

export const createEmployee = asyncHandler(async (req, res, next) => {
  try {
    const { fullName, email, description, address, phoneNumber, education } =
      req.body;
    const employee = await Employee.findOne({ email });

    if (employee) {
      res.status(400);
      throw new Error("Employee already exists");
    }

    const newEmployee = await Employee.create({
      fullName,
      email,
      description,
      address,
      phoneNumber,
      education,
    });

    res.status(201).json(newEmployee);
  } catch (error) {
    console.log(`createEmployee Error ${error.message}`);
    next(error);
  }
});

export const getEmployee = asyncHandler(async (req, res, next) => {
  try {
    const employees = await Employee.find({});

    if (!employees) {
      throw new Error("Could not find an employees");
    }

    res.status(200).json(employees);
  } catch (error) {
    console.log(`getEmployee Error ${error.message}`);
    next(error);
  }
});

export const getEmployeeById = asyncHandler(async (req, res, next) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findById(id);

    if (!employee) {
      res.status(404);
      throw new Error("Could not find an employee");
    }

    res.status(200).json(employee);
  } catch (error) {
    console.log(`getEmployee Error ${error.message}`);
    next(error);
  }
});

export const updateEmployee = asyncHandler(async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    const { fullName, email, description, address, phoneNumber, education } =
      req.body;
    const employee = await Employee.findById(id);

    if (!employee) {
      res.status(404);
      throw new Error("Employee not found");
    }

    employee.fullName = fullName || employee.fullName;
    employee.email = email || employee.email;
    employee.description = description || employee.description;
    employee.address = address || employee.address;
    employee.phoneNumber = phoneNumber || employee.phoneNumber;
    employee.education = education || employee.education;

    const updatedEmployee = await employee.save();
    res.status(200).json(updatedEmployee);
  } catch (error) {
    console.error(`Update Employee Error: ${error.message}`);
    next(error);
  }
});
export const deleteEmployee = asyncHandler(async (req, res, next) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findById(id);

    if (!employee) {
      res.status(404);
      throw new Error("Employee not found");
    }

    await employee.deleteOne({ _id: id });

    res.status(200).json({ message: "Employee deleted successfully" });
  } catch (error) {
    console.error(`Delete Employee Error: ${error.message}`);
    next(error);
  }
});
