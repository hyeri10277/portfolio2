$(function () {

    //부드러운스크롤    
    $("#wrap").smoothWheel()


    //top메뉴 스크롤시 부드럽게 올라가기
    $(".quick_top a").click(function (e) {

        e.preventDefault(); //기본막기

        $('#wrap').animate({
            scrollTop: 0
        }, 400);



        // 페이지번호 0으로 초기화!(첫페이지로 가니까!)
        pno = 0;

        //console.log("탑버튼눌렀을때" + pno);
    });







    /// 페이지 새로 고칠때 맨위로 가게하기(브라우저 캐쉬가 잘 안지워져서 쓰는 것임!) 
    setTimeout(function () {
        $("#wrap").animate({
            scrollTop: "0px"
        }, 10); /// animate ////
    }, 500); //// 타임아웃 ////////









    // 스크롤내릴시에 gnb나오기
    /////// 스크롤액션 //////////////////////
    $("#wrap").scroll(function () {
        // 현재스크롤바 위치
        var scTop = $(this).scrollTop();
        //console.log("스크롤위치:" + scTop);

        if (scTop >= 200) {
            $("#top").addClass("on");

        } else {
            $("#top").removeClass("on");
        }

    }); /////////////////// scroll //////////////
    /////////////////////////////////////////////////



    /*1.햄버거메뉴*/

    $('.sidebarbtn').click(function () {
        $('.sidebar').toggleClass("active");
        $('.sidebarbtn').toggleClass("toggle");
        $(".modal").fadeToggle(500);
    });





    /*pc에서 퍼즐이미지 서서히나타남 모바일에서는 안나타나게*/

    let windowWidth = $(window).width(); //창 가로값 저장
    $(window).resize(function () {
        //창 크기 변화시
        windowWidth = $(window).width(); //다시 저장
    });

    if (windowWidth >= 1200) {
        //웹 실행되자마자 판단하고 1200px 이상인 PC화면이면 on을 없애주는 것을 기본으로 한다.
        $('.hideme').removeClass('on');
    }

    $('#wrap').scroll(function () { //스크롤 될때마다
        var scTop = $(this).scrollTop(); //스크롤 탑값을 저장하며
        if (windowWidth >= 1200) { //PC인지 모바일인지 판단하여 PC라면
            if (scTop >= 600) {
                $('.hideme').addClass('on').stop().fadeIn(500);
            } else {
                $('.hideme').removeClass('on');
            }
        } else { //모바일이라면
            $('.hideme').addClass('on'); //항상 on이 붙어있도록 한다.
        }
    });

    // 스크롤내릴시에 이미지나오기
    ///// 스크롤액션 //////////////////////
    //    $("#wrap").scroll(function () {
    //        // 현재스크롤바 위치
    //        var scTop = $(this).scrollTop();
    //        //console.log("스크롤위치:" + scTop);
    //
    //        if (scTop >= 600) {
    //            $(".hideme").addClass("on").stop().fadeIn(500);
    //
    //        } else {
    //            $(".hideme").removeClass("on");
    //        }
    //
    //    }); /////////////////// scroll //////////////
    //    /////////////////////////////////////////////////  


    // 오류
    //   $(window).scroll( function(){
    //        /* 2 */
    //        $('.hideme').each( function(i){
    //            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
    //            var bottom_of_window = $(window).scrollTop() + $(window).height();
    //            /* 3 */
    //            if( bottom_of_window > bottom_of_object/2 ){
    //                $(this).animate({'opacity':'1'},500);
    //            }
    //        }); 
    //    });


}); ///////////// jqb /////////////////
