$(document).ready(function() {
       $("#f1").mouseover(function() {
              $("body").css("background", "url('src/images/alies2.jpg') content-box center");
              $("body").css("background-size", "cover");
              $("#z1").css("color", "black");
              $("#f2").css("border-color", "grey");
              $("#f3").css("border-color", "grey");
       })
       $("#f1").mouseleave(function() {
              $("body").css("background", "");
              $("#z1").css("color", "whitesmoke");
              $("#f2").css("border-color", "white");
              $("#f3").css("border-color", "white");
       })
       $("#f3").mouseover(function() {
              $("body").css("background", "url('src/images/axis2_nocensored.jpg') content-box center");
              $("body").css("background-size", "cover");
              $("#z1").css("color", "black");
              $("#f2").css("border-color", "grey");
              $("#f1").css("border-color", "grey");
       })
       $("#f3").mouseleave(function() {
              $("#f1").css("border-color", "white");
              $("#f2").css("border-color", "white");
              $("body").css("background", "");
              $("#z1").css("color", "whitesmoke");
       })
       $("#f2").mouseover(function() {
              $("body").css("background", "url('src/images/neutral_background.jpg') content-box center");
              $("body").css("background-size", "cover");
              $("#z1").css("color", "black");
              $("#f1").css("border-color", "grey");
              $("#f3").css("border-color", "grey");
             })
       $("#f2").mouseleave(function() {
              $("#f1").css("border-color", "white");
              $("#f3").css("border-color", "white");
              $("body").css("background", "");
              $("#z1").css("color", "whitesmoke");
             })
});