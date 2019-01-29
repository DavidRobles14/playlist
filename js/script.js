/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Happier", "sunflower (spider-man into the spider-verse)","Young And Menace", "Dream"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
var images = ["https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/Marshmello_and_Bastille_Happier.png/220px-Marshmello_and_Bastille_Happier.png", "https://i.ytimg.com/vi/ZHVKlgfiYmU/maxresdefault.jpg", "https://i.ytimg.com/vi/TIbO4EIEtYc/maxresdefault.jpg", "https://i.ytimg.com/vi/ZCSX3mM6940/maxresdefault.jpg"];
var artists = ["Marshmellow & Bastille", "Post Malone ft Swae Lee", "Fall Out Boy", "Imagine Dragons"];
var lengths = ["3:34", "2:38", "3:43", "4:19"];
var links = ["https://youtu.be/QgKYZWRH4DA", "https://youtu.be/r7Rn4ryE_w8", "https://youtu.be/nzoInBonzq8", "https://youtu.be/ZCSX3mM6940" ];

function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
    images.forEach(function(image) 
    {
        $("#images").append("<img src='" + image + "'>");   
    });
    
    songs.forEach(function(song) 
    {
        $("#songs").append("<p>" + song + "</p>");
    })
    
    artists.forEach(function(artist) 
    {
        $("#artists").append("<p>" + artist + "</p>");
    })
    
    lengths.forEach(function(length) 
    {
        $("#lengths").append("<p>" + length + "</p>");
    })
    
    links.forEach(function(link) 
    {
        $("#links").append("<a href='" + link + "'>Listen</a>");
    })
}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs
    $("#images").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();

}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
    

}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
