
var randomQuote= ['“All our dreams can come true, if we have the courage to pursue them.” —Walt Disney',
'“The secret of getting ahead is getting started.” —Mark Twain',
'“The hard days are what make you stronger.” ―Aly Raisman',
'“If you believe it will work out, youll see opportunities. If you dont believe it will work out, you’ll see obstacles.” ―Wayne Dyer',
'“If opportunity doesnt knock, build a door.” ―Kurt Cobain'

];


//  var para = document.getElementById('quote')

function quoteGenenator() {

        var random = randomQuote[(Math.floor(Math.random() * randomQuote.length))]
        console.log(random)
        document.getElementById('quote').innerHTML = random;
        
        
}









