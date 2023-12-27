$(document).ready(function(){
    // 포트폴리오 탭
    $('.portfolio .portf').click(function(){
        let result = $(this).attr('data-alt');

        $('.pofol').removeClass('active');
        $(`#${result}`).addClass('active');

        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });

    // 헤더영역 카테고리 버튼
    // $('#scroll_move').click(function(event){
    //     event.preventDefault();
    //     $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    // });

    // var wh = $(window).height();

    // $('.menu').each(function(index){
    //     $(this).attr('data-index',index);
    // });
    // $('.menu').click(function(){
    //     let dataIndex = $(this).attr('data-index');

    //     $('html,body').animate({
    //         scrollTop : wh*dataIndex
    //     });
    // });

    $('.header-area .menu-box a').click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });

    const sec1 = $('.sec1').offset().top;
    const sec2 = $('.sec2').offset().top;
    const sec3 = $('.sec3').offset().top;
    const sec4 = $('.sec4').offset().top-600;

    $(window).scroll(function(){

        const height = $(window).scrollTop();

        if(height >= sec1 && height < sec2){
            $('.header-area .menu-box a').siblings().removeClass('active');
            $('.header-area .menu-box a').eq(0).addClass('active');
        }else if(height >= sec2 && height < sec3){
            $('.header-area .menu-box a').siblings().removeClass('active');
            $('.header-area .menu-box a').eq(1).addClass('active');
        }else if(height >= sec3 && height < sec4){
            $('.header-area .menu-box a').siblings().removeClass('active');
            $('.header-area .menu-box a').eq(2).addClass('active');
        }else if(height >= sec4){
            $('.header-area .menu-box a').siblings().removeClass('active');
            $('.header-area .menu-box a').eq(3).addClass('active');
        }
    });

    $(window).scroll(function(){
        const height = $(window).scrollTop();
        if(height >= sec1 && height < sec2){
            $('.header-area').removeClass('active');
        }else if(height >= sec2){
            $('.header-area').addClass('active');
        }
    });


    $('.menu1').click(function(){
        $('html,body').animate({
            scrollTop : sec1
        });
    });

    $('.menu2').click(function(){
        $('html,body').animate({
            scrollTop : sec2
        });
    });
    $('.menu3').click(function(){
        $('html,body').animate({
            scrollTop : sec3
        });
    });
    $('.menu4').click(function(){
        $('html,body').animate({
            scrollTop : sec4+600
        });
    });

    $('#hamburger').click(function(){
        $(this).children().toggleClass('active');
    });

}); //end
