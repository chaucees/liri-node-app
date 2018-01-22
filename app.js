// Link to Node packages
var twitter = require('twitter');
var spotify = require('node-spotify-api');
var request = require('request');

function main(commandName, searchTerm){
    switch (commandName){
        case 'my-tweets':
            searchTwitter();

        case 'spotify-this-song':
            searchSpotify(searchTerm);

        case 'movie-this':
            searchOMDB();

        // one more case for last command: do-what-it-says
        // look at switch statement documentation and include break statements and default case

    }
}

// Search Spotify 
function searchSpotify(songName) {
    // look at HW instructions to get link and sign up for spotify API
    // look at npm doc for node-spotify-api for js code to search songs

}

// Search Twitter 
function searchTwitter() {
    // look at HW instructions to get link and sign up for Twitter API
    // look at npm doc for twitter for js code to get tweets

}

// Search OMDB 
function searchOMDB(movieName) {
    // look at npm doc for request package for js code to make an API request
    // look at HW instructions for link to OMDB API. use this with request pkg to search for movies.
}

main(process.argv[2], process.argv[3]);

// Console log what the instructions say what to print (song name/tweets/movies/etc)

