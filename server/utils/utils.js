'use strict';
const http = require('http');
exports.getJSON = function(options, onResult)
{
    console.log("rest::getJSON");

    var prot = options.port == 443 ? https : http;
    // var options = {
    //     host: 'www.random.org',
    //     path: '/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
    // };
    var options = {
        host: 'https://na1.api.riotgames.com',
        path: '/lol/match/v3/matches/2527688077'
    };

    var req = prot.request(options, function(res)
    {
        var output = '';
        console.log(options.host + ':' + res.statusCode);
        res.setEncoding('utf8');

        res.on('data', function (chunk) {
            output += chunk;
        });

        res.on('end', function() {
            var obj = JSON.parse(output);
            console.log('END');
            onResult(res.statusCode, obj);
        });
    });

    req.on('error', function(err) {
        //res.send('error: ' + err.message);
    });
    setTimeout(function(){
        console.log("THIS IS");
        req.end();
    }, 6000);
    
};

//copied from stackoverflow https://stackoverflow.com/questions/2532218/pick-random-property-from-a-javascript-object
exports.pickRandomProperty = function pickRandomProperty(obj) 
{
    var result;
    var count = 0;
    for (var prop in obj)
        if (Math.random() < 1/++count)
        result = prop;
    return result;
};   