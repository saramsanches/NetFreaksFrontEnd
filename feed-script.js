var destUrl = "https://netfreaks.herokuapp.com/home/feed/";

$.get(destUrl, successCallback);

function successCallback(response) {

    var usersTable = $("#users-list");
    var blob;
    var row = $("<tr height='200px'></tr>");
    var cell;

for (var x = 1; x <= response.length; x++) {

 blob = "<div class='card' height='150px'><div class='card-body'><img src='" + response[x].picture + "' class='card-img-top'><h5 class='card-title'>" 
    + response[x].name + "  " + response[x].age + "</h5><p class='card-text'><b>" + response[x].kinks + "</b><br>" + response[x].aboutMe +
    "</p><button type='button' class='btn btn-primary'>See more ;)</button></div></div>";


cell = $("<td width=\"50%\" height='200px'></td>").html(blob);
row.append(cell);
        
if (x % 2 == 0) {
    usersTable.append(row);
    row = $("<tr height='200px'></tr>");
}
}
$(".btn-primary").on("click", openPopUp);
function openPopUp() {
    alert("You have a m@tch!!!!");
    
}
}



