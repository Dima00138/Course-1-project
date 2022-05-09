$(document).ready(function () {
        $.ajax({
            type: "GET",
            url: "../../pages/heroes.xml",
            dataType: "xml",
            success: xmlParser,
            error: function(data){
        console.log('Error loading XML data');
    }
        });
    });
    function xmlParser(xml) {
     
        $(xml).find("div").each(function () {
            $("main").append('<div class="hero"><h2>' + $(this).find("heading").text() + 
            '</h2><div class="div-img" style="background-image: url(../src/images/' + $(this).find("image").text() +
             ');"></div><div class="description">' + $(this).find("description").text() + '</div></div>');
        });
    }