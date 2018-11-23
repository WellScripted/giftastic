$(document).ready(function() {

    //Button variables
    var displayButtons = ["Independence Day", "Veteran/'s Day", "Halloween", "Thanksgiving", "Christmas"];

    //Function to display images
    function displayImages() {
        $("#images").empty();
        var input = $(this).attr("data-name");
        var limit = 10;
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + input + "&limit=" + limit + "&api_key=UQQLAcG6Z0ggomudLwifhq9Nhtym5Tpo";



        //ajax method



    }












    
});