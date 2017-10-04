//datepicker on journal form
$('.datepicker').pickadate({
  selectMonths: true, // Creates a dropdown to control month
  selectYears: 5, // Creates a dropdown of 15 years to control year,
  today: 'Today',
  clear: 'Clear',
  close: 'Ok',
  closeOnSelect: true // Close upon selecting a date,
});

//select form type
$(document).ready(function() {
  $('select').material_select();
});

//modal create journal item
$(document).ready(function(){
  // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
});