/*jslint
    browser: true, devel: true, maxlen: 79
*/
/*
    Made by pharus, for fun and profit
    This code was made to be documented not to go on production, only a cute 
    challenge.
    
    I wish I'd have the tools in 51mpl3r W3b in place, so that I could organize
    the code my way, instead of following my obcessive policy of single filing
    all this. Besides, the output of those preprocessors will aim efficiency, 
    and all.
    
    The organization of this code is the following, each identified with the 
    name:
    - Handy -- Handy functions
    - Object -- useful objects (each sub with <name>.obj):
        - Card  -- abstraction for cards
        - Stage -- abstraction for each Stage (Splash, Game, End of game)
        - Game  -- Manages the stages and flow
    - Logic -- code of app
*/

    
/* Handy */
    
/* jsonp function, url and callback in string */
function myJsonP(url, callback) {
    var jsonp = document.createElement('script');
    jsonp.src = url + '?callback=' + callback;
    jsonp.type = 'application/javascript';
    document.getElementsByTagName('head')[0].appendChild(jsonp);
}

/* hide an element by id */
function hide(id) {
    var e = document.getElementById(id);
    id.style.visibility = 'hidden';
}

/* show an element by id */
function show(id) {
    var e = document.getElementById(id);
    id.style.visibility = 'visible';
}

function tweetIT(msg) {
    var TWITTERURL = 'https://twitter.com/intent/tweet/?text=',
        win = window.open(TWITTERURL + msg, 'popup');
}

/* Object */
/* Card.obj */
/* Stage.obj */
/* Game.obj */
/* Logic */

var BADGESURL = 'https://services.sapo.pt/Codebits/listbadges';

function buildBoard () {
    var board = document.getElementById('board');
    
    for (var i = 0; i < 3; i++) {
        var div = document.createElement('div');
        for (var j = 0; j < 6; j++) {
            var card = document.createElement('div');
            card.className = 'card';
            div.appendChild(card);
        }
        board.appendChild(div);
    }
}

buildBoard();












