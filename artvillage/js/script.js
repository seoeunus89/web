setInterval(function(){
    // setInterval(); 함수 반복 실행
    $(".slide_box").delay("2500");
    $(".slide_box").animate({marginTop: "-300px"}, "500");
    $(".slide_box").delay("2500");
    $(".slide_box").animate({marginTop: "-600px"}, "500");
    $(".slide_box").delay("2500");
    $(".slide_box").animate({marginTop: "0"}, "500");
});



