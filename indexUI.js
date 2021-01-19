let cnt = 0;

$(function(){
    $(".img_slide_left").on('click',function(){
        cnt -= 1;
        if(cnt < 0){
            cnt = 3;
        }

        switch(cnt){
            case(1):
            $('#img_slide1').removeClass('active');
            $('#img_slide2').addClass('active');
            $('#img_slide3').addClass('active');           
            break;
            case(2):
            $('#img_slide2').removeClass('active');
            $('#img_slide1').addClass('active');
            $('#img_slide3').addClass('active');            
            break;
            case(3):
            $('#img_slide3').removeClass('active');
            $('#img_slide1').addClass('active');
            $('#img_slide2').addClass('active');
            break;
        }
    });
});

$(function(){
    $(".img_slide_right").on('click',function(){
        cnt += 1;
        if(cnt > 3){
            cnt = 1;
        }

        switch(cnt){
            case(1):
            $('#img_slide1').removeClass('active');
            $('#img_slide2').addClass('active');
            $('#img_slide3').addClass('active');           
            break;
            case(2):
            $('#img_slide2').removeClass('active');
            $('#img_slide1').addClass('active');
            $('#img_slide3').addClass('active');            
            break;
            case(3):
            $('#img_slide3').removeClass('active');
            $('#img_slide1').addClass('active');
            $('#img_slide2').addClass('active');
            break;
        }
    });
});