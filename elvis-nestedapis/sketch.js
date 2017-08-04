$.ajax({
    url: "https://randomuser.me/api/", // api 1
}).done(function(data){ // success
    var country = getNat(data); // sets the intials = to the var country
    realName(country); // initials are given to a this function for the api to use
});

function getNat(data){
    console.log(data); // prints object to the console
    $("body").append("<h2>" + data.results[0].nat + "</h2>"); //prints initials to the body
    var initials = data.results[0].nat; // gets initials from the api object and sets it = to the var
    return initials; // returns initials of country
}

function realName(country){ // successfully gets country initials
    $.ajax({
        url: "https://restcountries.eu/rest/v2/all", // api 2
    }).done(function(data){ // success
        console.log(data); // prints object to the console
        getCountry(data, country); // funtion to find the actual name of the country
    });
}
function getCountry(data, country){
    for(var i = 0; i < 250; i++){ // will go through all the objects looking for the initials
        var acronym = data[i].alpha2Code; 
        if(country == acronym){ // checks to see if code initials are correct
            var countryName = data[i].name; // gets real country name
            $("body").append("<h2>" + countryName + "</h2>"); // appends real country name
        }
    }
}