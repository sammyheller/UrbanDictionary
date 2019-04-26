$(document).ready(function () {
    $("#table").hide();
});

function onSubmit(){

    var word = document.getElementById("word").value;

    $.ajax({
        url: "http://api.urbandictionary.com/v0/define?term=" + word,
        dataType: "jsonp",
        success: callBack
    });

}

function callBack(data) {
    $("#table").show();
    console.log(data);
    var x = "";

    x += "<tr><td id='title' colspan='5'>Urban Dictionary Definition: " + document.getElementById("word").value + "</td></tr>";
    x += "<tr><td class='categories'>Definition</td><td class='categories'>Example</td><td class='categories'>Thumbs Up</td><td class='categories'>Thumbs Down</td><td class='categories'>Author</td></tr>"

    for(var i=0; i<data.list.length; i++){
        x += "<tr>";
        x += "<td>" + data.list[i].definition + "</td>";
        x += "<td>" + data.list[i].example + "</td>";
        x += "<td>" + data.list[i].thumbs_up + "</td>";
        x += "<td>" + data.list[i].thumbs_down + "</td>";
        x += "<td>" + data.list[i].author + "</td>";


        x += "</tr>"

    }

document.getElementById("table").innerHTML = x;
}