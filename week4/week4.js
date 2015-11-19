
var persons = [
    {
        name: "Batman",
        age: "129",
        spouse: "Queen Elizabeth",
        vehicles: ["Batmobile", "Batcycle"]
    }, 
    {name: 
        "Catwoman",
        age: "23",
        spouse: "Catwoman",
        vehicles: ["Catmobile", "Catcycle"]
    }, 
    {name: 
        "Queen Elizabeth",
        age: "80",
        spouse: "Kermit",
        pets: ["Dylan", "Kermit", "Jeremy"]
    }
];


//Get the HTML from the template   in the script tag​
var theTemplateScript = $("#list-template").html(); 
var theTemplate = Handlebars.compile(theTemplateScript); 
$('ul').append(theTemplate(persons)); 


