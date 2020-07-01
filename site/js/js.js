$(function(){
    $('.wc').click(function(){
        $('#wc').fadeIn();
        $('#sg').css('display','none').fadeOut();
        $('#mc').css('display','none').fadeOut();
        $('#tb').css('display','none').fadeOut();
        $('#sb').css('display','none').fadeOut();
        $('#rf').css('display','none').fadeOut();
    });
    $('.sg').click(function(){
        $('#sg').fadeIn();
        $('#wc').css('display','none').fadeOut();
        $('#mc').css('display','none').fadeOut();
        $('#tb').css('display','none').fadeOut();
        $('#sb').css('display','none').fadeOut();
        $('#rf').css('display','none').fadeOut();
    });
    $('.mc').click(function(){
        $('#mc').fadeIn();
        $('#wc').css('display','none').fadeOut();
        $('#sg').css('display','none').fadeOut();
        $('#tb').css('display','none').fadeOut();
        $('#sb').css('display','none').fadeOut();
        $('#rf').css('display','none').fadeOut();
    });
    $('.tb').click(function(){
        $('#tb').fadeIn();
        $('#wc').css('display','none').fadeOut();
        $('#sg').css('display','none').fadeOut();
        $('#mc').css('display','none').fadeOut();
        $('#sb').css('display','none').fadeOut();
        $('#rf').css('display','none').fadeOut();
    });
    $('.sb').click(function(){
        $('#sb').fadeIn();
        $('#wc').css('display','none').fadeOut();
        $('#sg').css('display','none').fadeOut();
        $('#mc').css('display','none').fadeOut();
        $('#tb').css('display','none').fadeOut();
        $('#rf').css('display','none').fadeOut();
    });
    $('.rf').click(function(){
        $('#rf').fadeIn();
        $('#wc').css('display','none').fadeOut();
        $('#sg').css('display','none').fadeOut();
        $('#mc').css('display','none').fadeOut();
        $('#tb').css('display','none').fadeOut();
        $('#sb').css('display','none').fadeOut();
    });
});

$(function(){
    $('.wc').click(function(){
        $('.wctxt').css('display','block').fadeIn();
        $('.sgtxt').css('display','none').fadeOut();
        $('.mctxt').css('display','none').fadeOut();
        $('.tbtxt').css('display','none').fadeOut();
        $('.sbtxt').css('display','none').fadeOut();
        $('.rftxt').css('display','none').fadeOut();
    });
    $('.sg').click(function(){
        $('.sgtxt').css('display','block').fadeIn();
        $('.wctxt').css('display','none').fadeOut();
        $('.mctxt').css('display','none').fadeOut();
        $('.tbtxt').css('display','none').fadeOut();
        $('.sbtxt').css('display','none').fadeOut();
        $('.rftxt').css('display','none').fadeOut();
    });
    $('.mc').click(function(){
        $('.mctxt').css('display','block').fadeIn();
        $('.wctxt').css('display','none').fadeOut();
        $('.sgtxt').css('display','none').fadeOut();
        $('.tbtxt').css('display','none').fadeOut();
        $('.sbtxt').css('display','none').fadeOut();
        $('.rftxt').css('display','none').fadeOut();
    });
    $('.tb').click(function(){
        $('.tbtxt').css('display','block').fadeIn();
        $('.wctxt').css('display','none').fadeOut();
        $('.sgtxt').css('display','none').fadeOut();
        $('.mctxt').css('display','none').fadeOut();
        $('.sbtxt').css('display','none').fadeOut();
        $('.rftxt').css('display','none').fadeOut();
    });
    $('.sb').click(function(){
        $('.sbtxt').css('display','block').fadeIn();
        $('.wctxt').css('display','none').fadeOut();
        $('.sgtxt').css('display','none').fadeOut();
        $('.mctxt').css('display','none').fadeOut();
        $('.tbtxt').css('display','none').fadeOut();
        $('.rftxt').css('display','none').fadeOut();
    });
    $('.rf').click(function(){
        $('.rftxt').css('display','block').fadeIn();
        $('.wctxt').css('display','none').fadeOut();
        $('.sgtxt').css('display','none').fadeOut();
        $('.mctxt').css('display','none').fadeOut();
        $('.tbtxt').css('display','none').fadeOut();
        $('.sbtxt').css('display','none').fadeOut();
    });
});



$(function(){
    $('.right1-slide > img:gt(0)').hide();
    setInterval(function(){    
        $('.right1-slide > img:first')
        .fadeOut('slow')
        .next()
        .fadeIn('slow')
        .end()
        .appendTo('.right1-slide');
    },5000);  
});

$(function(){
    $('.right3-slide > img:gt(0)').hide();
    setInterval(function(){    
        $('.right3-slide > img:first')
        .fadeOut('slow')
        .next()
        .fadeIn('slow')
        .end()
        .appendTo('.right3-slide');
    },5000);  
});

$(function(){
    $('.right4-slide > img:gt(0)').hide();
    setInterval(function(){    
        $('.right4-slide > img:first')
        .fadeOut('slow')
        .next()
        .fadeIn('slow')
        .end()
        .appendTo('.right4-slide');
    },5000);  
});








