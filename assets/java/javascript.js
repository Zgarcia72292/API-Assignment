var topics = ["Games", "Anime", "Sports", "Music", "Movies"];

//created an array to store my topics in, and stored it in a fucntion to be called later//
function displayArray() {
    for (var i = 0; i < topics.length; i++) {
        $("#aBtn").append('<button class="gif-btn btn btn-primary" data-name="' + topics[i] + '">' + topics[i]);
    }
    //creating an on.click for the new buttons that show up to pull data from the api//
    //used week 6 activity 13 for reference//

    $(".gif-btn").on("click", function () {

        var gifName = $(this).attr("data-name");
    
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            gifName + "&api_key=dc6zaTOxFJmzC&limit=5";
    
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
    
            //so far the code works and pulls data from the api, now i have to figure out how to get it to display to page//
            //in the data we are accessing from the api page there is an array called 'data' that has all relevent properties, so
            //we will save the array in a variable 'results'
    
            var results = response.data;
    
            //the for loop will iterate through the 'data' arrays for all the results that show up. It will then access the 'rating'
            //properties for each item in the array. 
            for (var i = 0; i < results.length; i++) {
    
    
    
                var gifDiv = $("<div class='imgDiv'>");
    
                var rating = results[i].rating;
    
                var p = $("<p class='ratingText'>").text("Rating: " + rating);
    
                // var gifImage = $('<img class="picture" data-type="'+results[i].images.fixed_height_still.url+'">');
                var gifImage = $('<img>');
    
                gifImage.addClass("picture");
    
                gifImage.attr("src", results[i].images.fixed_height_still.url);
    
                gifImage.attr("data-still", results[i].images.fixed_height_still.url);
    
                gifImage.attr("data-animate", results[i].images.fixed_height.url);
    
                gifImage.attr("data-state", "still");
    
                gifDiv.append(gifImage);

                gifDiv.append(p);
    
                $("#gif-area").prepend(gifDiv);
    
                //now this on.click function will change the data state, essentially the url, from the still version of the
                //image to the animated gif//
    
                //here i used the same principles from week 6 activity 15//
    
                $(".picture").on("click", function () {
    
                    var state = $(this).attr("data-state");
    
                    if (state === "still") {
    
                        $(this).attr("src", $(this).attr("data-animate"));
    
                        $(this).attr("data-state", "animate");
    
                    }
    
                    else {
    
                        $(this).attr("src", $(this).attr("data-still"));
    
                        $(this).attr("data-state", "still");
                    }
                });
    
    
            }
    
        })
    
    
    });
    
    



};

displayArray();



//created a for loop that will convert anything in the array into buttons and append them to the page
//gave each button an id to call later and a data-name type consistent with the value of the corresponding
//item in the array// 


$("#input-btn").on("click", function (event) {
    event.preventDefault();
    $("#aBtn").empty();
    topics.push($("#user-input").val());

    //this code pushes whatever value is in the form field that the user has inputted into the array, clears the button list,
    //then re-runs the for loop which will now display any new array items as buttons// 


    displayArray()

});

//put ajax in a function??//

// function APIbtn (){
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//         })
//         .then(function(response){
//             console.log(queryURL);
//             console.log(response);
//                 //Gif API data appears, need to push to page
//                 //NEW DEVELOPMENT - Only first button works
//             var results = response.data;
//             for(var i=0;i<results.length;i++);
//             var p = $("<p>").text("Rating: " + results.rating);


//               })
// }







//THINGS TO FIX//




//FIXED//

//giphs appear but arent taking data from user input- getting random gifs// 
//was taking the .val instead of the .attr//

//need to create a working on.click button to turn gifs into pics and visa-versa// 
//used week 6 activity 15 to see what method they used to replace the url//

//Ajax stops working after new buttons are stored into the array//
//This was a scoping issue. I had to put my ajax code inside of the display array so after it is cleared
//it will get called again everytime a new button is made// 