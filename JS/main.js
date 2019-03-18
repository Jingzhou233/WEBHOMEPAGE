
$(document).ready(function () {
  

$(window).bind('scroll',function(e){
    parallaxScroll();
    example();
});

function parallaxScroll(){
var scrolled = $(window).scrollTop();
 
$(".backgroundimg").css('top',(0-(scrolled*.3))+'px');
$(".columnb").css('top',(0-(scrolled*.25))+'px');
    $(".columnc").css('top',(0-(scrolled*.17))+'px');
    $(".columnd").css('top',(0-(scrolled*.15))+'px');
  
$(".b1").css('color','#eb2f2f');
  $(".b2").css('color','black');
  if(scrolled>2800){
    $(".line").css('top',(0-(scrolled*.15))+'px');
    $(".b1").css('color','black');
    $(".b2").css('color','#eb2f2f');
  }

}




function example() {
  var tempScrollTop = $(window).scrollTop();
  console.log("Scroll from Top: " + tempScrollTop.toString());
};

});