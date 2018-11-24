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
        $.ajax ({
            url: queryURL,
            method: "GET"
        }).done(function(response) {

            //for loop for display, rating, and images
            for(var j = 0; j < limit; j++) {

                var displayDiv = $("<div>");
                displayDiv.addClass("holder");

                var image = $("<img>");
                image.attr("src", response.data[j].images.orignal_still.url);
                image.attr("data-still", response.data[j].images.orignal_still.url);
                image.attr("data-animate", response.data[j].images.orignal_still.url);
                image.attr("data-state", "still");
                image.attr("class", "gif");
                displayDiv.append(image);

                var rating = response.data[j].rating;
                console.log(response);
                var pRating = $("<p>").html("Rating: " + rating);
                displayDiv.append(pRating)

                $("#images").append(displayDiv);
            }
        });
    }

    //Function renderButtons

    //Function gifStateChange












    
});