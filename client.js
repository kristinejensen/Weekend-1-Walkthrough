$(document).ready(function(){ // Waits for the DOM to be completely loaded
  $('form').on('submit', function(event){ // "Submit is an event." "Submit" allows you to hit the return key and create a form. Typing enter will trigger the event, in addition to pushing submit. Event refers to the current event. Event listener -- listening for a button clicks inside the form. Button is not created dynamically, so it doesn't need a specifier.
  event.preventDefault(); // Do not bring us to a new page.

  console.log('form values', $(this).serializeArray()); // "This" refers to the form. Forms have serialized arrays -- their special function. .serializeArray creates an array of input values, which are converted to objects. Objects have two properties: name and value. {name(name of input): 'firstName', value: 'Kris'}. You are locked into these two properties with .serializeArray.

  var submissionArray = $(this).serializeArray();
  var newEmployeeObject = {}; // {firstName: 'Kris', lastName: 'Jensen'} This is what we want to create.
  submissionArray.forEach(function(inputFieldObject) { // The forEach loop calls the function for us. forEach is accomplishing the same thing as a for loop.
    // first time through, newEmployeeObject is an empty object
    newEmployeeObject[inputFieldObject.name] = inputFieldObject.value; // We use bracket notation becuase this is going to change. Bracket notation tells the computer you are looking for a property.
    // newEmployeeObject.firstName = Kris
    //after code runs newEmployeeObject is {firstName: 'Kris', }
    // second time through newEmployeeObject is {firstName: 'Kris', lastName: 'Jensen'}
  });

  console.log('New Employee Object: ', newEmployeeObject);



  // Adds new employee row to DOM
  $('#employeeTableBody').append('<tr>' +
  '<td>' + newEmployeeObject.firstName + '</td>' + // updated to accept properties from objects
  '<td>' + newEmployeeObject.lastName + '</td>' +
  '<td>' + newEmployeeObject.idNumber +'</td>' +
  '<td>' + newEmployeeObject.jobTitle +'</td>' +
  '<td>' + newEmployeeObject.annualSalary + '</td>' +
  '<td><button class="deleteEmployeeButton" data-salary="' + annualSalary + '">Delete ' + firstName + '</button></td>' + // "data-"" is an element that lets you store data in an element. The data doesn't show up on the page (visually).
  '</tr>'); // .append expects a string.

// Add monthly salary expenses to the DOM
var newEmployeeMonthlyExpenses = annualSalary / 12; // Takes annual salary and divide by 12. Division uses type coercion.
var previousSalaryTotal = $('#monthlyExpenses').text(); // This gets the currently monthly expenses from the DOM. ".text" is used for different elements, not input box values. ".text" with empty parameters grabs the value of that text.
var totalMonthlyExpenses = parseFloat(previousSalaryTotal) + newEmployeeMonthlyExpenses; // parseFloat turns a string into a number.
$('#monthlyExpenses').text(totalMonthlyExpenses); // if you pass something into .text, you are replacing that item with the variable value

// Clear out input boxes
$('.employeeFormInput').val('');

});

// Adding lisetner for clicking delete buttons
$('#employeeTableBody').on('click', '.deleteEmployeeButton', function(){ //This listener refers to the button. You need the specifier here because the delete button is being dynamically created. You need to tie this function to something that already exists.

    var deletedEmployeeSalary = $(this).data('salary');  // Removing employee salary from total. If someone adds a new column, it will still pull the salary data.
    var deletedEmployeeMonthlyExpenses = deletedEmployeeSalary / 12; // Converts string to number by type coercion.
    var previousMonthlyExpenses = $('#monthlyExpenses').text();
    var newTotalMonthlyExpenses = previousMonthlyExpenses - deletedEmployeeMonthlyExpenses;
    $('#monthlyExpenses').text(newTotalMonthlyExpenses); // Changing the value of #monthlyExpenses span
    $(this).parent().parent().remove(); // Selecting the row with .parent() functions that I want to delete.
  });
});

//If things aren't working, test with console log.
