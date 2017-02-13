$(document).ready(function(){ // Waits for the DOM to be completely loaded
  $('#submitNewEmployee').on('click', function() { // Event listener -- listening for a click. Button is not created dynamically, so it doesn't need a specifier.

  // Declaring variables and retrieving values from input boxes
  var firstName = $('#firstName').val();
  var lastName = $('#lastName').val();
  var idNumber = $('#idNumber').val();
  var jobTitle = $('#jobTitle').val();
  var annualSalary = $('#annualSalary').val();

  // Adds new employee row to DOM
  $('#employeeTableBody').append('<tr>' +
  '<td>' + firstName + '</td>' +
  '<td>' + lastName + '</td>' +
  '<td>' + idNumber +'</td>' +
  '<td>' + jobTitle +'</td>' +
  '<td>' + annualSalary + '</td>' +
  '</tr>'); // .append expects a string.

// Add monthly salary expenses to the DOM
var newEmployeeMonthlyExpenses = annualSalary / 12; // Takes annual salary and divide by 12. Division uses type coercion.
var previousSalaryTotal = $('#monthlyExpenses').text(); // This gets the currently monthly expenses from the DOM. ".text" is used for different elements, not input box values. ".text" with empty parameters grabs the value of that text.
var totalMonthlyExpenses = parseFloat(previousSalaryTotal) + newEmployeeMonthlyExpenses; // parseFloat turns a string into a number.
$('#monthlyExpenses').text(totalMonthlyExpenses); // if you pass something into .text, you are replacing that item with the variable value

});
});

//If things aren't working, test with console log. 
