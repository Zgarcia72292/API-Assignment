var topics = ["Games", "Anime", "Sports", "Music", "Movies"];

//created an array to store my topics in//

for (var i = 0; i < topics.length; i++){
    $("#aBtn").append('<button id="gif-btn" data-name="' + topics[i] + '">'+topics[i]);
}

//created a for loop that will convert anything in the array into buttons and append them to the page
//gave each button an id to call later and a data-name type consistent with the value of the corresponding
//item in the array// 


// $("#input-btn").on("click", function (event){
//     event.preventDefault();
//     $("#user-input")

//     topics = $("<button>");
//      var myJSON = JSON.stringify(toDoArray);
//      $("#to-do").html(myJSON);
//      function array(){
//      toDoArray.push(toDoTask);
   
//     };

//     array();
// })










// $("gif-btn").on("click", function() {
   
//     var gifName = $(this).val("data-name");

   
//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//       gifName + "&api_key=dc6zaTOxFJmzC&limit=1";

//       $.ajax({
//         url: queryURL,
//         method: "GET"
//       })
//         // After the data comes back from the API
//         .then(function(response) {
//           // Storing an array of results in the results variable
//           var results = response.data;
    