// $('body').append("<h1> How will you die? </h1>");
// $('body').append("<h2> What is your gender? </h2>");
var theURL = 'https://data.cityofnewyork.us/resource/uvxr-2jwn.json?$where=sex%20=%20%27' + gender +'%27%20AND%20race_ethnicity=%27' + race + '%27AND%20year=%272014%27&$order=death_rate%20DESC'
$.ajax({
    url: theURL,
    success: function(data) {
        console.log(data);
        var data = data[0];
        var death = data.leading_cause;
        $('body').append("<h2> You will die from " + death + " </h2>");
    }
})