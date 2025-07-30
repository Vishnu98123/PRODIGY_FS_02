
// Controller for employee operations
const Employee = require('../models/Employee');
exports.getAllEmployees = async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
};
