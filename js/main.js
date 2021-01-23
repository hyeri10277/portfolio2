//// 메인페이지 JS - main.js //////////


//모바일 스크롤없애기
var mob = 0;
if ($(window).width() <= 200) {
    mob = 1;
}
console.log("모바일:" + mob);

$(function () { /////// jQB ///////////////////////
    //console.log("로딩완료!");






    //0.top버튼

    //top메뉴 스크롤 내리면 보이기
    //    $(function () {
    //        var winH = $(window).height();
    //        console.log(winH);
    //        $(window).scroll(function () {
    //            var scTop = $(this).scrollTop();
    //            console.log(scTop);
    //            if (scTop >= winH) {
    //                $("#top").addClass("on");
    //
    //            } else {
    //                $("#top").removeClass("on");
    //            }
    //        });
    //    });
    //    


    //top메뉴 스크롤시 부드럽게 올라가기
    $(".quick_top a").click(function (e) {

        e.preventDefault(); //기본막기

        $('html, body').animate({
            scrollTop: 0
        }, 400);



        // 페이지번호 0으로 초기화!(첫페이지로 가니까!)
        pno = 0;

        console.log("탑버튼눌렀을때" + pno);
    });



    /// 페이지 새로 고칠때 맨위로 가게하기(브라우저 캐쉬가 잘 안지워져서 쓰는 것임!) 
    setTimeout(function () {
        $("html,body").animate({
            scrollTop: "0px"
        }, 10); /// animate ////
    }, 500); //// 타임아웃 ////////







    // 스크롤시 gnb 불투명
    //    $(window).scroll(function () {
    //        var scroll = $(window).scrollTop();
    //        //console.log(scroll);
    //        if (scroll >= 50) {
    //            //console.log('a');
    //            $("#top").addClass("on");
    //        } else {
    //            //console.log('a');
    //            $("#top").removeClass("on");
    //        }
    //    });






    /*1.햄버거메뉴*/

    $('.sidebarbtn').click(function () {
        $('.sidebar').toggleClass("active");
        $('.sidebarbtn').toggleClass("toggle");
        $(".modal").fadeToggle(500);
    });









    /*2.메인배너*/
    var swiper3 = new Swiper('.swiper3', {
        slidesPerView: '1',
        //centeredSlides: true,
        spaceBetween: 0,
        //            pagination: {
        //                el: '.swiper-pagination',
        //                type: 'fraction',
        //            },
        loop: true, //// 슬라이드 무한 반복
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // 슬라이드 속도 설정
        // 지정하지 않을시 기본값은 300
        speed: 1000,

    });


    swiper3.on("slideChange", function () {

        //console.log(this.activeIndex); 

        var idx = this.activeIndex;
        //this.activeIndex;-> 현재 활성화된 슬라이드 번호
        $(".main_slide ul").eq(idx).addClass("on")
            .siblings().removeClass("on");

        if (idx === 0) idx = 4;
        if (idx === 5) idx = 1;

        // 번호 증가하기
        $(".paging li").first().text("0" + idx);


    });

    $(".main_next_btn").click(function () {
        swiper3.slideNext(3000);
    }); //////// click /////////////////









    /*3.상품영역 swiper*/
    var swiper2 = new Swiper('.swiper2', {
        slidesPerView: 4,
        spaceBetween: 21,
        slidesPerGroup: 4, // 그룹으로 묶을 수, slidesPerView 와 같은 값을 지정하는게 좋음
        centeredSlides: false, //다음 슬라이드의 모습이 50%만 보입니다.(중앙)
        //            loop: true, //// 슬라이드 무한 반복
        freeMode: false,
        breakpoints: {
            1100: {
                slidesPerView: 2,
                spaceBetween: 21,
                slidesPerGroup: 2,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
                slidesPerGroup: 1,
            } ,
            500: {
                slidesPerView: 1,
                spaceBetween: 20,
                slidesPerGroup: 1,
            }
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true
        },
        navigation: {
            nextEl: '.swp_right',
            prevEl: '.swp_left',
        },

        observer: true,
        observeParents: true,
        // 슬라이드 속도 설정
        // 지정하지 않을시 기본값은 300
        speed: 700,
    })





    // html 로딩후 시작
    // 마우스 페이드인아웃
    $(document).ready(function () {

        //contents_slide 에 마우스 올리면
        $(".contents_slide").mouseenter(function () {
            $(this).find(".mouseevent").children("img").eq(0).stop().fadeOut(500);
            $(this).find(".mouseevent").children("img").eq(1).stop().fadeIn(500);
        });

        //contents_slide 에 마우스 내리면
        $(".contents_slide").mouseleave(function () {
            $(this).find(".mouseevent").children("img").eq(0).stop().fadeIn(500);
            $(this).find(".mouseevent").children("img").eq(1).stop().fadeOut(500);
        });
    });









    /*4.브랜드스토리 이미지 애니메이션*/

    // 각 등장 이미지 셋팅
    // 대상: .sca
    // 내용: 아래로 이동 투명하게
    $(".sca").css({
        top: "60%",
        opacity: 0
    }); //////css ////////////


    // 등장할 요소 지정 클래스 : .sca 스크롤액션
    var sca = $(".sca");
    // 위치할당변수
    var scpos = [];

    // 등장요소 위치 셋업
    for (var i = 0; i < sca.length; i++) {
        scpos[i] = sca.eq(i).offset().top;
    } ////// for문 /////////

    console.log("위치셋팅:" + scpos);

    /////// 스크롤액션 //////////////////////
    $("html,body").scroll(function () {
        // 현재스크롤바 위치
        var scTop = $(this).scrollTop();
        console.log("스크롤위치:" + scTop);

        // 1. 2페이지 등장
        if (scTop > scpos[0] - 600 &&
            scTop < scpos[0] - 0) { //아래서 올라가는 부분
            $(".sca").eq(0).css({
                top: "50%",
                opacity: 1
            }); //////css ////////////
        } ///////////// if /////////////////////
        // => 사진 앞뒤로 에왔을때 보이게
        else { //초기화
            $(".sca").eq(0).css({
                top: "60%",
                opacity: 0
            }); //////css ////////////
        } //////////////// else ///////

        if (scTop >= winH) {
            $("#top").addClass("on");

        } else {
            $("#top").removeClass("on");
        }

    }); /////////////////// scroll //////////////
    /////////////////////////////////////////////////

    // 









    /* 5.메거진슬라이드 swiper*/
    var swiperBest = new Swiper('.swiper-container.swiper1', {
        effect: 'coverflow',
        slidesPerView: 3,
        spaceBetween: 20,
        initialSlide: 1,
        pagination: '.swiper_page',
        paginationClickable: true,
        centeredSlides: true,
        loop: true,
        slideShadows: false,

        coverflow: {
            //scale: 1.2,
            //stretch: 0,
            rotate: 0,
            depth: 10,
            modifier: 1,
            slideShadows: false,
        },
      
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.xi-angle-right',
            prevEl: '.xi-angle-left',
        },
      breakpoints: {
            768: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            480: {
                //direction : 'horizontal',
                slidesPerView: 1,
                spaceBetween: 0,
            }
        },
        speed: 700
    });


    //    var swiper1 = new Swiper('.swiper-container.swiper1', {
    //        slidesPerView: '3', //// 보여지는 슬라이드 수
    //        spaceBetween: 60, //// 슬라이드 간의 거리(px 단위)
    //        centeredSlides: true, //다음 슬라이드의 모습이 50%만 보입니다.(중앙)
    //        grabCursor: true,
    //        loop: true, //// 슬라이드 무한 반복
    //        pagination: {
    //            el: '.swiper-pagination',
    //            clickable: true,
    //        },
    //        navigation: {
    //            nextEl: '.xi-angle-right',
    //            prevEl: '.xi-angle-left',
    //        },
    //        breakpoints: {
    //
    //            961: {
    //                slidesPerView: 3,
    //                spaceBetween: 35,
    //            },
    //            768: {
    //                slidesPerView: 2,
    //                spaceBetween: 30,
    //            }
    //        },
    //        speed: 700,
    //        //   autoplay: {  //자동 재생(1000 = 1초)
    //        //     delay: 5000,
    //        // }
    //    });









    /* 6.이벤트 슬라이드 slick*/
    $(function () {
        $('#slider-div').slick({
            slide: 'div', //슬라이드 되어야 할 태그 ex) div, li 
            //infinite : true,     //무한 반복 옵션     
            slidesToShow: 1, // 한 화면에 보여질 컨텐츠 개수
            slidesToScroll: 1, //스크롤 한번에 움직일 컨텐츠 개수
            speed: 500, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
            arrows: true, // 옆으로 이동하는 화살표 표시 여부
            dots: true, // 스크롤바 아래 점으로 페이지네이션 여부
            //autoplay : true,            // 자동 스크롤 사용 여부
            //autoplaySpeed : 10000,         // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
            //pauseOnHover : true,        // 슬라이드 이동    시 마우스 호버하면 슬라이더 멈추게 설정
            //vertical : false,        // 세로 방향 슬라이드 옵션
            prevArrow: "<button type='button' class='slick-prev'>Previous</button>", // 이전 화살표 모양 설정
            nextArrow: "<button type='button' class='slick-next'>Next</button>", // 다음 화살표 모양 설정
            dotsClass: "slick-dots", //아래 나오는 페이지네이션(점) css class 지정
            adaptiveHeight: true,
            draggable: true, //드래그 가능 여부 

            responsive: [ // 반응형 웹 구현 옵션
                {
                    breakpoint: 960, //화면 사이즈 960px
                    settings: {
                        //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                        slidesToShow: 1
                    }
                    },
                {
                    breakpoint: 768, //화면 사이즈 768px
                    settings: {
                        //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                        slidesToShow: 1
                    }
                    }
                ]

        });
    })


});






// c+h 콘솔 한번에주석 //console

/////////  전역변수 ////////////////////

// 1.페이지번호
var pno = 0;
// 2. 전체 페이지수
const totnum = 7;
// const는 변수 var와 달리 변경불가한 상수(안바뀌는 어떤값)를 말한다! =>못바꾸는것 =>페이지갯수 정해놓고해야해서

// 3. 광클금지 광스크롤방지 변수
var psts = 0; // (0-허용,1-불허용) =>페이지 프로텍트...
// 4. 화면 크기 
var winH = $(window).height();



///////////////////////////////////////






$(function () { ////////// jqb///////////

    /*    [ 자동스크롤 구현!]
        1. 기능: 스크롤휠을 위나 아래로 작동 시킬때 페이지 스크롤이 위나 아래로 자동으로 이동되는 애니메이션 기능
        
        2. 마우스휠을 움직일때 발생하는 이벤트는?
            (1) mousewheel : 초기버전부터 사용한 마우스휠 이벤트
            (2) wheel : html5 버전 이후에 나온 마우스휠 이벤트
            (아직 벤더사(ms,크롬)에서 표준화못됨-ie,사파리지원x)
        
            (3) DOMMouseScroll : 파이어폭스 전용 이벤트
            -> 결론적으로 mousewheel과 DOMMouseScroll을 동시에 사용함
            
        
        3. 마우스휠 이벤트와 함수를 연결하는 방법은?
           (1) bind(이벤트명,함수) : 최신버전에서 사용안됨!
           (2) on(이벤트명,함수) : 각종 이벤트와 함수를 연결해 사용함
           
           
        4. 마우스휠 이벤트 발생시 기본스크롤 이동 막는방법은?
            *(1) html,body에 overflow:hidden 설정으로 스크롤막기
            - 자동스크롤 페이지이동은 보통 스크롤바를 없앤다~!
            (2) 마우스휠 이벤트가 걸린 코드에 preventDefault로 기본 이동기능막기
             (주의사항! - window,document,body와 같이 브라우저 최상위 객체나 요소에 본 막기기능은 사용못하도록 변경되었음 - 우회방법은 body를 overflow:hidden처리하고 속박스를 만들어서 스크롤가능상태로 두어 이것을 이벤트 대상으로 삼아서 스크롤막기를 한다!)
            
        
        */




    // - 여러가지 이벤트는 띄어쓰기로 나열함!(동시적용 가능)
    $(document).on("mousewheel DOMMouseScroll", function (e) {

        ////// 광스크롤막기 ///////////
        if (psts === 1 || mob === 1) return true; // => 돌아가! return false쓰면 막기됨(불끄고나감) 그래서 true로바꿈(안끄고나감)
        psts = 1; // 잠금(기존0값을 변경)
        setTimeout(function () {
            psts = 0;
        }, 600); /// 타임아웃 ///
        /////////////////////////////////

        // return ture는 마우스 휠 기능을 그대로 두고 돌아감 
        // return false는 마우스 휠 기능을 정지 시키게되는데
        // 이것을 브라우저가 window,document,body에 대해서
        // 금지하기 때문에 여기서는 return true해야한다!




        //1. 이벤트발생확인
        console.log("휠~~~");

        // 기본이동막기는 하지않음
        //(대신 body에 overflow:hidden)

        // 2. 마우스 휠에서 가장 중요한 개념
        /* [wheelDelta] 란 ?
             -ie, chrome용(opera는 detail을 사용함) -
             마우스휠 이벤트가 발생함에 따라 이벤트 횟수 및 방향과 이동거리 등을 리턴해주는 내부 속성
         
             - 스크롤될 경우 방향과 이동거리를 알 수 있음
             (+는 윗방향,-는 아랫방향)*/
        e = window.event || e;
        //=>이벤트를 가능한애로 변환 둘중에하나를 넣어라 || => or
        // 전달되는 이벤트값이 그대로 쓰거나 없다면 window.event값을 사용할 수 있도록 처리함

        // 변수 = 전달변수1 || 전달변수2
        // 해석: 뒤의 두변수 중 true(유효한것)인것이 할당됨


        var delta = e.detail ? e.detail : e.wheelDelta;
        // 변수 = 조건연산자 -> 조건연산자의 결과가 할당됨 
        // =>유효하니? ->그러면 할당


        /// 파이어폭스 브라우저일 경우 방향 부호를 반대로하기
        //브라우저 정보 알아내기
        //console.log("현재브라우저:"+navigator.userAgent);
        // navigator.userAgent 는 브라우저별 세부정보를 보여주는 속성
        // 파이어폭스 브라우저는 "Firefox"라는 문자가 포함됨
        //이것으로 브라우저를 구분함
        // test(문자열) JS내장함수로 이것을 구분한다!
        // 정규표현식으로 이 문자를 테스트함
        // 정규표현식.test(문자열) -> 문자열에 정규표현식 문자가 있으면 true, 없으면 false를 리턴함!
        if (/Firefox/i.test(navigator.userAgent)) {
            //console.log("난파폭!");    
            delta = -delta; //부호를 반대로! =>변수앞에 - 붙이면 수치가 뒤집어짐
        } //////////// if문////////////////

        // =>파이어폭스라는게있느냐?있으면 true {}안으로들어감


        //console.log("델타값:" + delta);
        //=>120은 기본값


        //3. 마우스휠 방향에 따라 페이지번호 증감! //

        // 음수일때 아랫방향
        if (delta < 0) {
            pno++; // 1씩증가
            // 한계페이지번호 마지막번호에 고정!
            if (pno === totnum) pno = totnum - 1;
            // 7번이면 6번으로고정시킴
        } ///// if ///////
        // 양수일때 윗방향
        else {
            pno--; //1씩감소
            // 한계페이지번호 첫번호에 고정!
            if (pno === -1) pno = 0;
        } //// else ///////

        console.log("페이지번호:" + pno);



        //4. 해당순번 페이지 높이값 구하기(top값) =>페이지위치
        //var pgpos = $(".page").eq(pno).offset().top;
        // 위치값을 잘 못구해 오면 아래와 같이 변경함!
        var pgpos = winH * pno;
        // 화면높이값 * 페이지번호

        //console.log("이동페이지위치:" + pgpos)


        // 5.페이지 이동 애니메이션
        $("html,body").stop().animate({

            scrollTop: pgpos + "px"
        }, 600, "easeInOutQuint", pageAction); // stop =>기존에 있는거 지우고 정리






        // 기본이동기능 막기
        /* e.preventDefault();*/

    }); /////////////////////////////////////////////////////////////////////mousewheel ///////////////////////////////////////////////////
    // => 마우스휠 이벤트먹게함 대소문자구분



}); ////////// jQB ///////////////////////////////
/////////////////////////////////////////////////


/*//////////////////////////////////////////////
    함수명: pageAction
    기능: 페이지별 등장액션
*/ //////////////////////////////////////////////
function pageAction() {
    console.log("페이지액션" + pno);

    if (pno === 3) {
        $(".sca").eq(0).css({
            top: "50%",
            opacity: 1
        }); //////css ////////////
    } //////// if ////////////

} ////// pageAction //////////////////////////////////
///////////////// pageAction 함수////////////////////////////////
/////////////////////////////////////////////////
