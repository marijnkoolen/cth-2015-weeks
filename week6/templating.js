//Get the HTML from the template   in the script tag​
var theTemplateScript = $("#list-template").html(); 
var theTemplate = Handlebars.compile(theTemplateScript); 
$('ul').append(theTemplate(persons)); 


