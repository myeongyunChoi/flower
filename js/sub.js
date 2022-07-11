$(window).on("load scroll", function () {
    sct = $(window).scrollTop();
    if (sct > 880) {
        $("header").css({
            "height": "70px",
            "opacity": "0.9"
        });
        $(".more_menu").css({
            "marginTop": "-18px"
        });
    } else {
        $("header").css({
            "height": "88px",
            "opacity": "1"
        });
        $(".more_menu").css({
            "marginTop": "0px"
        });
    }
});

$(function () {
    $(".head_menu>li").on("mouseenter", function () {
        $(this).children("ul").stop().slideToggle();
    });
    $(".head_menu>li").on("mouseleave", function () {
        $(this).children("ul").stop().slideToggle();
    });
});


window.onload = function () {

    let close = document.querySelector(".close");
    let menu = document.querySelector(".head_menu");
    let icon = document.querySelector(".icon");


    icon.onclick = function () {
        menu.style.left = 0;
    }
    close.onclick = function () {
        menu.style.left = "-100%";
    }
}

document.addEventListener("scroll", function () {

    let sct = window.scrollY;
    let scroll_wrap_h = document.querySelector("#scroll_wrap").clientHeight;
    let scroll_contents_h = document.querySelector(".scroll_contents").clientHeight;
    let scroll_txt = document.querySelector(".scroll_txt");
    let second_txt = document.querySelector(".second_txt");


    if (sct > 0) {
        scroll_txt.style.opacity = 1 - sct / scroll_contents_h;
        scroll_txt.style.top = 50 - 7 * (sct / scroll_contents_h) + "%";
    }

    if (sct > scroll_contents_h * 0.66) {
        second_txt.style.opacity = 0 + sct / (scroll_wrap_h / 2);
        second_txt.style.top = 100 - 50 * (sct / (scroll_wrap_h / 2)) + "%";
    }
    else {
        second_txt.style.opacity = 0;
        second_txt.style.top = "50%";
    }

    if (sct > scroll_wrap_h / 2) {
        second_txt.style.top = "50%";
        second_txt.style.transform = "translate(-50%,-50%)";
    }

    document.querySelectorAll

    let sticky_wrap_Top = document.querySelector("#sticky_wrap").offsetTop;
    let title_1 = document.querySelector(".name_box_1");
    let title_2 = document.querySelector(".name_box_2");
    let title_3 = document.querySelector(".name_box_3");
    let change_1 = document.querySelector(".change_inner_1");
    let change_2 = document.querySelector(".change_inner_2");
    let change_3 = document.querySelector(".change_inner_3");



    if (sct > sticky_wrap_Top + scroll_contents_h) {
        title_1.style.opacity = 1 - sct / scroll_contents_h;
        title_1.style.top = "40%"
        title_2.style.opacity = 1 + sct / scroll_contents_h;
        title_2.style.top = "50%";
        change_1.style.display = "none";
        change_2.style.display = "block";
        title_1.style.top = 50 - 5 * (sct / scroll_contents_h) + "%";
    } else {
        title_1.style.opacity = 1;
        title_1.style.top = "50%"
        title_2.style.top = "60%";
        title_2.style.opacity = 0;
        change_1.style.display = "block";
        change_2.style.display = "none";
    }

    if (sct > sticky_wrap_Top + (scroll_contents_h * 2)) {
        title_2.style.opacity = 0;
        title_2.style.top = "40%";
        title_3.style.opacity = 1 + sct / (scroll_contents_h * 2);
        title_3.style.top = "50%";
        change_3.style.display = "block";
        change_2.style.display = "none";
    } else {
        title_3.style.top = "60%";
        title_3.style.opacity = 1 - sct / (scroll_contents_h * 2);
        change_3.style.display = "none";
    }

    function imgPath(flower,fade){
        this.flower = flower;
    };

    imgPath.prototype.print = function(){
        bgfower.setAttribute("src",this.flower)
    };

    let imgPath1 =new imgPath("img/sub/sub1.jpg");
    let imgPath2 =new imgPath("img/sub/sub2.jpg");
    let imgPath3 =new imgPath("img/sub/sub3.jpg");

    if(sct > sticky_wrap_Top + scroll_contents_h){
        imgPath2.print();
    }else{
        imgPath1.print();
    }

    if (sct > sticky_wrap_Top + (scroll_contents_h * 2)){
        imgPath3.print();
    }
});



