function getHijriDate(gregorianDate){
  var hijriRequest= new XMLHttpRequest();
  // console.log(gregorianDate);
  hijriRequest.open("GET", "http://api.aladhan.com/gToH?date="+gregorianDate);
  hijriRequest.onload= function(){
    var requestDetail=JSON.parse(hijriRequest.responseText);
    $('#hijri-date-box').val(requestDetail.data.hijri.date);
    console.log(requestDetail.data.hijri.date);
  }
  hijriRequest.send();
}// ~~ END function getHijriDate() ~~
$(document).ready(function(){
  $(".datepicker").datepicker({
    dateFormat: "dd-mm-yy"
  });
  var currentDate= new Date();
  $('#gregorian-date-box').val(currentDate.getDate()+"-"+(currentDate.getMonth()+1)+"-"+currentDate.getFullYear());
  getHijriDate($('#gregorian-date-box').val());
  $('.js--datepicker').click(function(e){
    e.preventDefault();
    $('.datepicker').focus();
});
  $('#collapse-date-btn').click(function(){
    $('#close-btn').toggleClass("hidden");
    $('#open-btn').toggleClass("hidden");
    if($('#open-btn').hasClass('hidden')){
      $('.date-panel .panel-body').show(700);
    $('.date-panel').css("transform", "scale(1)");
    }else{
      $('.date-panel .panel-body').fadeOut(700);
      $('.date-panel').css("transform", "scale(0.85)");
    }   
  });
  $('#gregorian-date-box').change( 
       function(){
    getHijriDate($(this).val());
  });
  
});
