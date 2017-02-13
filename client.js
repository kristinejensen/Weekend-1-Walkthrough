$(document).ready(function(){
  $('#submitNewEmployee').on('click', function() { // Button is not created dynamically, so it doesn't need a specifier.

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
});
});
