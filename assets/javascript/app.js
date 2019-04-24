// Event listener for all button elements
// this code calls upon the button and when click it pops up
$("button").on("click", function () {
    // In this case, the "this" keyword refers to the button that was clicked
    var topic = $(this).attr("data-person"); //this is reffering to the topics 

    // Constructing a URL to search Giphy for the name of the person who said the quote
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        topic + "&api_key=dc6zaTOxFJmzC&limit=10"; //api is where all the info being brought for the GIF

    // Performing our AJAX GET request
    $.ajax({
        url: queryURL, // code to ''get'' the info from a server//
        method: "GET"
    })
        // After the data comes back from the API
        .then(function (response) { // & then you put this method to response
            // Storing an array of results in the results variable
            var results = response.data;

            // Looping over every result item
            for (var i = 0; i < results.length; i++) {

                // Only taking action if the photo has an appropriate rating
                if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                    // Creating a div for the gif
                    var gifDiv = $("<div>");

                    // Storing the result item's rating
                    var rating = results[i].rating;

                    // Creating a paragraph tag with the result item's rating
                    var p = $("<p>").text("Rating: " + rating);

                    // Creating an image tag
                    var personImage = $("<img>");

                    // Giving the image tag an src attribute of a proprty pulled off the
                    // result item
                    personImage.attr("src", results[i].images.fixed_height.url);

                    // Appending the paragraph and personImage we created to the "gifDiv" div we created
                    gifDiv.append(p);
                    gifDiv.append(personImage);

                    // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
                    $("#gifs-appear-here").prepend(gifDiv);



                }
            }
        });
});

// i try to replicate the assigment 

// Initial array of movies
// var movies = ["The Matrix", "The Notebook", "Mr. Nobody", "The Lion King"];

// Generic function for capturing the movie name from the data-attribute
//function alertMovieName() {
    //var movieName = $(this).attr("data-name");

    //alert(movieName);
//}

// Function for displaying movie data
//function renderButtons() {

    // Deleting the movies prior to adding new movies
    // (this is necessary otherwise we will have repeat buttons)
    //$("#buttons-view").empty();

    // Looping through the array of movies
    // for (var i = 0; i < movies.length; i++)// {

        // Then dynamicaly generating buttons for each movie in the array
        // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
       // var a = $("<button>");
        // Adding a class of movie to our button
        //a.addClass("movie");
        // Adding a data-attribute
       // a.attr("data-name", movies[i]);
        // Providing the initial button text
        //a.text(movies[i]);
        // Adding the button to the HTML
       // $("#buttons-view").append(a);
    //}
//}