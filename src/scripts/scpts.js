function listing() {
    $("input[type=radio]").each(function (index, element) {
            if($(this).prop("checked") == true) {
                let a = "#slide"+(parseInt($(this).attr("id").slice(5,6))+1);
                if ((parseInt($(this).attr("id").slice(5,6))) == 5) {
                    $("#slide1").prop("checked", true);
                    $("#slide5").removeProp("checked");
                }
                else {
                $(a).prop('checked', true);
                $(this).removeProp("checked");
                }
                return false;
            }
            //if ($(this).is("#slide5")) return false;
        })
}

$(document).ready(function() {
   let slider = setInterval(listing, 5000);
   $("label").click(function () { 
       slider = clearInterval(slider);
       slider = setInterval(listing, 5000);
   });
});

var twobombChain  = (function(){
    var drag = false;
    var values = [];
    
        
    $(".chain").each(function(i,e){
        updateView(e);
    });
    $(".chain>.bar>.lp,.chain>.bar>.rp").bind("mousedown",function(){
        drag = $(this);
    })
    $(document).bind("mousemove",function(e){
        if(!drag)
          return;
       var x = (e.pageX - $(drag).outerWidth()/2 - $(drag).parent().parent().offset().left)/$(drag).parent().parent().outerWidth();
       if(x < 0 ) x = 0;
       if(x > 1) x = 1;
       var rp = $(drag).parent().find(".rp");
       var lp = $(drag).parent().find(".lp");
       if($(drag).hasClass("lp") && x > $(rp).attr("data-pos") ){
               $(rp).attr("data-pos",x);
       }
       if($(drag).hasClass("rp") && x < $(lp).attr("data-pos") ){
               $(lp).attr("data-pos",x);
       }
       $(drag).attr("data-pos",x);
       updateView($(drag).parent().parent());
    });
    $(document).bind("mouseup",function(){
        drag = false;
    });
    function updateView(chain){
        let startVal = parseInt($(chain).find(".bar").data("start"));
        let endVal = parseInt($(chain).find(".bar").data("end"));
      if(startVal > endVal)
          endVal = startVal;
        startVal = startVal || 0;
      endVal = endVal || 2190;
      let values = [];
      for(let i = startVal; i <= endVal;i++)
          values.push(new Date(1939, 8, i+1).toLocaleString().substring(0,10));
        let l  =$(chain).find(".lp").attr("data-pos");
        var r  =$(chain).find(".rp").attr("data-pos");
      let x = $(chain).outerWidth() * l;
      let w = (r - l)*$(chain).outerWidth();
      $(chain).find(".bar").css({left:x+"px",width:w+"px"});
      let index = Math.round(values.length*l);
      if(index >= values.length)
          index = values.length-1;
      $(chain).find(".lp").html("<span>"+values[index]+"</span>");
      index = Math.round(values.length*r);
      if(index >= values.length)
          index = values.length-1;
      $(chain).find(".rp").html("<span>"+values[index]+"</span>");
      }
      })();