/*DESKTOP*/
if($(window).width()>1240) {
    $(document).ready(function () {
        $('.my-account').hide();
        $('body').css('background-color','#fff');
        $('.card-input').addClass('mobile-only');
    })
}
/*DESKTOP*/

/*MOBILE*/
else if($(window).width()<=1240) {
    $(document).ready(function () {
        $(document.getElementsByClassName("team-m")).hide();
        $('#team-m-1').show();

        $(window).bind('scroll', function () {
            if ($(window).scrollTop() > 30) {
                $('.fixed-nav-bar').css("box-shadow","0 2px 5px rgba(0,0,0,.26)");
                $('.fixed-menu-title').show();
                $('.logo').hide();
            }
            else {
                $('.fixed-nav-bar').css("box-shadow","none");
                $('.fixed-menu-title').hide();
                $('.logo').show();
            }
        });

    });
    var menuShow = function () {
        setTimeout(function () {
            $('.nav-sidebar').css('left', '0');
            $('.body-shadow').show();
        },100)
    };
    var darkBody = function(){
        setTimeout(function () {
            $('.nav-sidebar').css('left','-420px');
            $('.body-shadow').css('display','none');
        },200)
    };
    var darkFocus = function () {
        $('.focus-shadow').fadeOut('fast');
        $('.card-input').fadeOut(90);
        $('.card-search-button').css({'left':'','box-shadow': '0 2px 6px rgba(0,0,0,0.2)'});

    }

    function fadeOut(el){
        el.style.opacity = 1;
        (function fade(){
            if((el.style.opacity -.1)<0){
                el.style.display = "none";
            }
            else{
                requestAnimationFrame(fade);
            }
        })();
    }
    function fadeIn(el, display){
        el.style.opacity = 0;
        el.style.display = display || "block";
        (function fade(){
            var val = parseFloat(el.style.opacity);
            if(!((val+.1)>1)){
                el.style.opacity = val;
                requestAnimationFrame(fade);
            }
        })();
    }

    $(function()
    {
        $('.person-social-tablet').hide();
        //FLOATING SEARCH BUTTON OPERATIONS
        $('.card-input').hide();
        $('.card-search-button').click(function()
        {
            console.log("clicked");
            $('.card').removeClass('focus');
            $(this).closest('.card').addClass('focus');
            $(this).css({'left':'16px','box-shadow': '0 4px 6px rgba(0,0,0,0.4)'});
            $(this).closest('.card').find('.card-input').fadeIn('slow');
            $(this).closest('.card').find('.card-input > input').focus();
            $('.focus-shadow').fadeIn('slow');
        });
        $('.search-close-button').click(function () {
            $(this).closest('.card-input').fadeOut(90);
            $(this).closest('.card').find('.card-search-button').css({'left':'','box-shadow': '0 2px 6px rgba(0,0,0,0.2)'});
            $('.focus-shadow').fadeOut('slow');
        });
        //FLOATING SEARCH BUTTON OPERATIONS

        //LOG IN OPERATIONS

        $('.login-menu').hide();
        $('.login-menu-arrow').hide();
        $('html').click(function (event) {
            if($('.login-menu:visible')){
                console.log('html fire');
                $('.login-menu').hide(300);
                $('.login-menu-arrow').hide(100);
            }
        });
        $('.account-button').click(function (event) {
            event.stopPropagation();
        });
        $('.account-button').click(function () {
            if($('.login-menu').is(':visible')){
                $('.login-menu').hide(300);
                $('.login-menu-arrow').hide(100);
            }
            else{
                var btnpos = Math.ceil($('.account-button').offset().left);
                if($(window).width()<768)
                    $('.login-menu-arrow').css('left',btnpos+9);
                else
                    $('.login-menu-arrow').css('left',btnpos+13);
                $('.login-menu').show(300);
                setTimeout(function(){$('.login-menu-arrow').show();},250);
            }
        })
        //LOG IN OPERATIONS

        //SUB MENU IN SIDEBAR OPERATIONS
        $('.nav-menu .my-account').click(function () {
            var isShown;
            if ($('.sub-menu').css('margin-top')=='0px') {
                $('.sub-menu').animate({'margin-top': '-100px'}, 300);
                $('.menu-indicator').css('transform','none');
                $('.menu-indicator').css('transition','transform 0.3s ease');
                setTimeout(function () {
                    $('.sub-menu').css({'display': 'none'});
                    $('.menu-indicator').css('transition','all 0.3s ease');
                },100);
                isShown = false;
            }
            else{
                $('.sub-menu').animate({'margin-top': '0'}, 300);
                $('.menu-indicator').css('transform','rotate(90deg)');
                $('.menu-indicator').css('transition','transform 0.3s ease');
                setTimeout(function () {
                    $('.sub-menu').css({'display': 'block'});
                    $('.menu-indicator').css('transition','all 0.3s ease');
                },200);
                isShown = true;
            }
        });
        //SUB MENU IN SIDEBAR OPERATIONS

        //BACKGROUND COLOR CHANGE FOR LINKS IN NAV SIDE BAR ON CLICK
        /*$('.nav-menu li').click(function (event) {
         var el = $(this);
         el.css({'background-color':'rgba(0,128,128,0.3)','transition':'background-color 0.1s ease'});
         setTimeout(function () {
         el.css({'background-color':'white','transition':'background-color 0.1s ease'});
         },170)
         })*/
        //BACKGROUND COLOR CHANGE FOR LINKS IN NAV SIDE BAR ON CLICK

        rotationResize();
    });
    //CHECK FOR ROTATION
    window.addEventListener('resize', function () {
        console.log("Device has been rotated!");
        if ($('.login-menu:visible')) {
            $('.login-menu').hide();
            $('.login-menu-arrow').hide();
            console.log("Hidden!");
        }
        rotationResize();
    });
    function rotationResize() {
        var isFocused = false;
        if(($('input[type=text]').is(':focus'))){
            isFocused = true;
        }
        if(!isFocused){
            if ($(window).height() < $(window).width() || ($(window).width()>=768 && $(window).width()<=1024)) {
                $('.main-content').addClass('window-resize');
                $('#about-us-slider').addClass('window-resize').removeClass('about-us-resize');
            }
            else {
                $('.main-content').removeClass('window-resize');
                $('#about-us-slider').removeClass('window-resize').addClass('about-us-resize');
            }
        }
    }
    //CHECK FOR ROTATION
    /* SLIDER WITH BUTTONS*/
    /*var swipe = function(el) {
     var swipedir = el;
     console.log("swipedir in swipe:" + swipedir);
     var sliderLength = $(document.getElementsByClassName("team-m"));
     var count = 1;
     var maxLength = sliderLength.length;
     //console.log(maxLength);
     $(document.getElementsByClassName("team-m")).hide();
     $('#team-m-1').show();
     /!*$('.slide-btn').click(function () {*!/
     if(swipedir){
     console.log("Original Count:" + count);
     if (swipedir=='right' ) {
     console.log("before iteration right count: " + count);
     count--;
     if (count < 1) {
     count = maxLength;
     }
     $('#team-m-' + count).show();
     $('.team-m:not(#team-m-' + count).hide();
     console.log("after iteration right count: " + count);
     }
     else if (swipedir=='left') {
     console.log("before iteration left count: " + count);
     count++;
     $('#team-m-' + [count]).show();
     $('.team-m:not(#team-m-' + count).hide();
     console.log("after iteration left count: "+count);
     }
     if (count > maxLength) {
     console.log("count is greater than maxlength. initializing to 1");
     count = 1;
     $('#team-m-' + count).show();
     }
     }
     };*/

    /*SLIDER WITH SWIPE*/
    function swipedetect(el, callback){

        /*SWIPE VARIABLES*/
        var sliderLength = $(document.getElementsByClassName("team-m"));
        var count = 1;
        var maxLength = sliderLength.length;
        //console.log(maxLength);
        /*$(document.getElementsByClassName("team-m")).hide();
         $('#team-m-1').show();*/ //done at document load
        /*SWIPE VARIABLES*/

        var touchsurface = el,
            swipedir,
            startX,
            startY,
            distX,
            distY,
            threshold = 90, //required min distance traveled to be considered swipe
            restraint = 100, //maximum distance allowed at the same time in perpendicular direction
            allowedTime = 300, //maximum time allowed to travel that distance
            elapsedTime,
            startTime,
            handleswipe = callback || function(swipedir){}

        touchsurface.addEventListener('touchstart', function(e){
            var touchobj = e.changedTouches[0];
            swipedir = 'none';
            var dist = 0;
            startX = touchobj.pageX;
            startY = touchobj.pageY;
            startTime = new Date().getTime(), // record time when finger first makes contact with surface
                e.preventDefault();
        }, false)

        touchsurface.addEventListener('touchmove', function(e){
            e.preventDefault() // prevent scrolling when inside DIV
        }, false)

        touchsurface.addEventListener('touchend', function(e){
            var touchobj = e.changedTouches[0]
            distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
            distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
            elapsedTime = new Date().getTime() - startTime // get time elapsed
            if (elapsedTime <= allowedTime){ // first condition for awipe met
                if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
                    swipedir = (distX < 0)? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
                }
                else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ // 2nd condition for vertical swipe met
                    swipedir = (distY < 0)? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
                }
            }
            /*SWIPE FUNCTION*/
            if(swipedir){
                console.log("Original Count:" + count);
                if (swipedir=='right' ) {
                    console.log("before iteration right count: " + count);
                    count--;
                    if (count < 1) {
                        count = maxLength;
                    }
                    $('.team-m:not(#team-m-' + count).hide();
                    $('#team-m-' + count).fadeIn(300);
                    console.log("after iteration right count: " + count);
                }
                else if (swipedir=='left') {
                    console.log("before iteration left count: " + count);
                    count++;
                    $('.team-m:not(#team-m-' + count).hide();
                    $('#team-m-' + [count]).fadeIn(300);
                    console.log("after iteration left count: "+count);
                }
                /*else if(swipedir=='up'){
                    window.scrollBy(0,100);
                }
                else if(swipedir=='down'){
                    window.scrollBy(0,-100);
                }*/
                if (count > maxLength) {
                    console.log("count is greater than maxlength. initializing to 1");
                    count = 1;
                    $('#team-m-' + count).fadeIn(300);
                }
            }
            /*SWIPE FUNCTION*/
            handleswipe(swipedir)
            e.preventDefault()
            //return swipedir;
        }, false)
    }
    window.addEventListener('load',function(){
        if($(window).width() < 768) {
            var el = document.getElementById('about-us-slider')
            swipedetect(el, function (swipedr) {
                console.log(swipedr);
            });
        }


    })

    /*Slider by drag*/
    /*    var dragslide = function (el) {
     var element = el,
     _this = this,
     slidestyle = element.getBoundingClientRect(),
     startX,
     dist,
     endX = 0,
     slideleft,
     flag = 0,
     isFirstTouch = true,
     start_change,
     touchobj = null;
     element.addEventListener('touchstart', function (e) {
     console.log(e);
     touchobj = e.changedTouches[0];
     console.log("Touchstart changedTouches: "+e.changedTouches.length);
     console.log("Touchstart targetTouches: "+e.targetTouches.length);
     console.log("Touchstart touches: "+e.touches.length);
     slideleft = parseInt(slidestyle.left);
     startX = parseInt(touchobj.pageX);
     console.log("Touchstart slideleft: "+slideleft);
     console.log("Touchstart startX: "+startX);
     e.preventDefault();
     }, false)
     element.addEventListener('touchmove', function (e) {
     touchobj = e.changedTouches[0];
     console.log("Touchmove startX: " + startX);
     dist = parseInt(touchobj.pageX) - startX - endX;
     console.log("Touchmove dist: "+dist);
     element.style.transform = 'translateX('+Math.min(0,((slideleft+dist > 880)?880:slideleft+dist))+'px)';
     e.preventDefault();
     }, false)
     element.addEventListener('touchend', function (e, dist) {
     touchobj = e.changedTouches[0];
     endX = dist;
     console.log("Touchend endX: "+endX);
     isFirstTouch = false;
     e.preventDefault();
     }, false)
     };
     window.addEventListener('load', function () {
     dragslide(document.getElementById('about-us-slider'));
     })*/
}/*width close*/
/*MOBILE*/

/*TABLET*/
if($(window).width()>=768 && $(window).width()<=1240){
    $(document).ready(function () {
        var isClicked;
        $('.person-social-tablet').show();
        console.log("Tablet");
        $('.person-content').hide();
        //$('.team-m').show();
        $('.team-m').css("display","inline-block");
        $('.team-m').click(function () {

            if(!isClicked) {
                $('.team-m').removeClass("slide-expanded");
                $(this).addClass("slide-expanded");
                var rect = parseInt($(this)[0].getBoundingClientRect().left);
                var parentRect = parseInt($(this).parent()[0].getBoundingClientRect().left);
                $(this).css("transform", "translateX(-" + (rect - parentRect) + "px)");
                $(this).css("transition", "transform 0.3s ease-in");
                $(this).find(".person-content").show(300);
                $(this).css("height", "128px");
                $(this).parent().css({"display": "flex", "justify-content": "space-between", "flex-flow":"row nowwrap"});
                $(this).find(".person-social-tablet").hide(300);
                $('.team-m').not(document.getElementsByClassName("slide-expanded")).css("visibility", "hidden");
                console.log("Child " + rect);
                console.log("Parent " + parentRect);
                console.log("Diff " + (rect - parentRect));
                isClicked = true;
            }
            else{
                console.log("2nd click!");
                /*rect = parseInt($(this)[0].getBoundingClientRect().left);
                parentRect = parseInt($(this).parent()[0].getBoundingClientRect().left);*/
                $(this).css("transform", "translateX(0px)");
                $(this).css("transition", "transform 0.3s ease-out");
                $(this).find(".person-content").hide(100);
                $(this).css("height", "160px");
                $(this).parent().css({"display": "flex", "justify-content": "space-between", "flex-flow":"row nowrap"});
                $(this).find(".person-social-tablet").show(300);
                $('.team-m').not(document.getElementsByClassName("slide-expanded")).css("visibility", "visible");
                isClicked = false;
            }
        });
    });

}
/*TABLET*/

