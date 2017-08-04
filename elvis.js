function rand(num){
    // random integer between 0 and 1
    var randDec = Math.random() * num;
    var randInt = Math.floor(randDec);
    console.log(randInt);
    return randInt;
}

function getParam(name){
    // something about urls and parameters returns a value?
	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	if(results){
        return results[1];
    }else{
        return undefined;
    }
}