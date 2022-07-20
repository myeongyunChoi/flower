$(function () {


    $(".daily").on("mouseover", function () {
        $(".chapter").eq(0).stop().css({ "opacity": "1", "z-index": "500" });
        $(".overlay1").stop().fadeIn(1000).children("div").stop().animate({ "marginTop": "35px" });
    }).mouseleave(function () {
        $(".overlay1").stop().fadeOut().children("div").stop().animate({ "marginTop": "0px" });
        $(".chapter").eq(0).stop().css({ "opacity": "0.3", "z-index": "0" });
    });
    $(".season").on("mouseover", function () {
        $(".chapter").eq(1).stop().css({ "opacity": "1", "z-index": "500" });
        $(".overlay2").stop().fadeIn(1000).children("div").stop().animate({ "marginLeft": "-35px" })
    }).mouseleave(function () {
        $(".overlay2").stop().fadeOut().children("div").stop().animate({ "marginLeft": "0px" });
        $(".chapter").eq(1).stop().css({ "opacity": "0.3", "z-index": "0" });
    });
    $(".pure").on("mouseover", function () {
        $(".chapter").eq(2).stop().css({ "opacity": "1", "z-index": "500" });
        $(".overlay3").stop().fadeIn(1000).children("div").stop().animate({ "marginTop": "-35px" })
    }).mouseleave(function () {
        $(".overlay3").stop().fadeOut().children("div").stop().animate({ "marginTop": "0px" });
        $(".chapter").eq(2).stop().css({ "opacity": "0.3", "z-index": "0" });
    });
});



if (window.matchMedia("(max-width: 599px)").matches) {

    window.onload = function () {

        let close = document.querySelector(".close");
        let menu =document.querySelector(".head_menu");
        let icon =document.querySelector(".icon");


        icon.onclick=function(){
            menu.style.left=0;
        }
        close.onclick=function(){
            menu.style.left="-100%";
        }

        let slides = document.querySelector(".slide");
        let slideImg = document.querySelectorAll(".slide li");
        currentIdx = 0;
        slideCount = slideImg.length;
        prev = document.querySelector(".prev");
        next = document.querySelector(".next");
        slideWidth = window.innerWidth;
        slideMargin = 0;
        makeClone();
        initfunction();
        function makeClone() {
            let cloneSlide_first = slideImg[0].cloneNode(true);
            let cloneSlide_second = slideImg[1].cloneNode(true);
            let cloneSlide_third = slideImg[2].cloneNode(true);
            let cloneSlide_fourth = slideImg[3].cloneNode(true);
            let cloneSlide_fifth = slideImg[4].cloneNode(true);
            let cloneSlide_sixth = slideImg[5].cloneNode(true);
            // let cloneSlide_lasr = slideImg[6].cloneNode(true);
            let cloneSlide_last = slides.lastElementChild.cloneNode(true);
            slides.append(cloneSlide_first);
            slides.append(cloneSlide_second);
            slides.append(cloneSlide_third);
            slides.append(cloneSlide_fourth);
            slides.append(cloneSlide_fifth);
            slides.append(cloneSlide_sixth);
            slides.append(cloneSlide_last);
            slides.insertBefore(cloneSlide_last, slides.firstElementChild);
        }
        function initfunction() {
            slides.style.width = (slideWidth + slideMargin) * (slideCount + 8) + "px";
            slides.style.left = -(slideWidth + slideMargin) + "px";
        }

        next.addEventListener("click", function () {
            if (currentIdx <= slideCount - 1) {
                slides.style.left = -(currentIdx + 2) * (slideWidth + slideMargin) + "px";
                slides.style.transition = "0.75s ease-out";
            }
            if (currentIdx === slideCount - 1) {
                setTimeout(function () {
                    slides.style.left = -(slideWidth + slideMargin) + "px";
                    slides.style.transition = "0s ease-out";
                }, 750);
                currentIdx = -1;
            }
            currentIdx += 1;
        });
        prev.addEventListener("click", function () {
            if (currentIdx >= 0) {
                slides.style.left = -currentIdx * (slideWidth + slideMargin) + "px";
                slides.style.transition = `${0.5}s ease-out`;
            }
            if (currentIdx === 0) {
                setTimeout(function () {
                    slides.style.left = -slideCount * (slideWidth + slideMargin) + "px";
                    slides.style.transition = `${0}s ease-out`;
                }, 500);
                currentIdx = slideCount;
            }
            currentIdx -= 1;
        });

        const slider = document.querySelector(".sns");
        let isDown = false;
        let startX;
        let scrollLeft;

        // 시작했을 때 마우스 위치
        slider.addEventListener("mousedown", function (e) {
            isDown = true;
            startX = e.pageX;
            scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener("mouseleave", function () {
            isDown = false;
        });
        slider.addEventListener("mouseup", function () {
            isDown = false;
        });
        slider.addEventListener("mousemove", function (e) {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX;
            const walk = (x - startX);
            slider.scrollLeft = scrollLeft - walk;
        });
        // 이동하는 마우스 위치 값 - 시작값

        let bg = document.querySelectorAll(".best_bg");
        let bgcount = bg.length;
        let bgIdx = 0;

        next.addEventListener("click", function () {
            bgIdx++;
            if (bgIdx > bgcount - 1) {
                bgIdx = 0;
                bg[bgIdx + bgcount - 1].style.opacity = "0";
            }
            bg[bgIdx].style.opacity = "1";
            bg[bgIdx - 1].style.opacity = "0";
        });

        prev.addEventListener("click", function () {
            bgIdx--;
            if (bgIdx < 0) {
                bgIdx = bgcount - 1;
            }
            bg[bgIdx].style.opacity = "1";
            bg[bgIdx + 1].style.opacity = "0";
        });
    }

    $(window).on("load scroll", function () {
        sct = $(window).scrollTop();
        if (sct > 500) {
            $("header").css({
                "height": "35px",
                "opacity": "0.9"
            });
            $(".more_menu").css({
                "marginTop": "-18px"
            });
        } else {
            $("header").css({
                "height": "50px",
                "opacity": "1"
            });
            $(".more_menu").css({
                "marginTop": "0px"
            });
        }

        if (sct > $(".p_img").eq(0).offset().top - 800) {
            $(".p_img").eq(0).addClass("up");
        } else {
            $(".p_img").eq(0).removeClass("up");
        }

        if (sct > $(".p_img2").offset().top - 800) {
            $(".p_img2").addClass("up");
        } else {
            $(".p_img2").removeClass("up");
        }

        if (sct > $(".p_img3").offset().top - 800) {
            $(".p_img3").addClass("up");
        } else {
            $(".p_img3").removeClass("up");
        }

        if (sct > 50) {
            $("section img").stop().css({
                "clip-path": "circle(" + 1.0 * sct + "px at 50% 50%)",
                // "width": sct * 0.04 + 87.5 + "%",
                "height": sct * 0.04 + 87.5 + "%"
            });
        }

        if (sct > $("section img").height() / 8) {
            $(".section_head").css({ "color": "white" });
            $(".second_text").stop().fadeIn(100);
        } else {
            $(".section_head").css({ "color": "#1f4095" });
            $(".second_text").stop().fadeOut(100);
        }
    });


}

if (window.matchMedia("(min-width: 600px) and (max-width:1300px)").matches) {
    window.onload = function () {

        let close = document.querySelector(".close");
        let menu =document.querySelector(".head_menu");
        let icon =document.querySelector(".icon");


        icon.onclick=function(){
            menu.style.left="0%";
        }
        close.onclick=function(){
            menu.style.left="-100%";
        }



        let slides = document.querySelector(".slide");
        let slideImg = document.querySelectorAll(".slide li");
        currentIdx = 0;
        slideCount = slideImg.length;
        prev = document.querySelector(".prev");
        next = document.querySelector(".next");
        slideWidth = window.innerWidth / 4;
        slideMargin = 0;
        makeClone();
        initfunction();
        function makeClone() {
            let cloneSlide_first = slideImg[0].cloneNode(true);
            let cloneSlide_second = slideImg[1].cloneNode(true);
            let cloneSlide_third = slideImg[2].cloneNode(true);
            let cloneSlide_fourth = slideImg[3].cloneNode(true);
            let cloneSlide_fifth = slideImg[4].cloneNode(true);
            let cloneSlide_sixth = slideImg[5].cloneNode(true);
            let cloneSlide_lasr = slideImg[6].cloneNode(true);
            let cloneSlide_last = slides.lastElementChild.cloneNode(true);
            slides.append(cloneSlide_first);
            slides.append(cloneSlide_second);
            slides.append(cloneSlide_third);
            slides.append(cloneSlide_fourth);
            slides.append(cloneSlide_fifth);
            slides.append(cloneSlide_sixth);
            slides.append(cloneSlide_last);
            slides.insertBefore(cloneSlide_last, slides.firstElementChild);
        }
        function initfunction() {
            slides.style.width = (slideWidth + slideMargin) * (slideCount + 8) + "px";
            slides.style.left = -(slideWidth + slideMargin) + "px";
        }

        next.addEventListener("click", function () {
            if (currentIdx <= slideCount - 1) {
                slides.style.left = -(currentIdx + 2) * (slideWidth + slideMargin) + "px";
                slides.style.transition = "0.75s ease-out";
            }
            if (currentIdx === slideCount - 1) {
                setTimeout(function () {
                    slides.style.left = -(slideWidth + slideMargin) + "px";
                    slides.style.transition = "0s ease-out";
                }, 750);
                currentIdx = -1;
            }
            currentIdx += 1;
        });
        prev.addEventListener("click", function () {
            if (currentIdx >= 0) {
                slides.style.left = -currentIdx * (slideWidth + slideMargin) + "px";
                slides.style.transition = `${0.5}s ease-out`;
            }
            if (currentIdx === 0) {
                setTimeout(function () {
                    slides.style.left = -slideCount * (slideWidth + slideMargin) + "px";
                    slides.style.transition = `${0}s ease-out`;
                }, 500);
                currentIdx = slideCount;
            }
            currentIdx -= 1;
        });

        const slider = document.querySelector(".sns");
        let isDown = false;
        let startX;
        let scrollLeft;

        // 시작했을 때 마우스 위치
        slider.addEventListener("mousedown", function (e) {
            isDown = true;
            startX = e.pageX;
            scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener("mouseleave", function () {
            isDown = false;
        });
        slider.addEventListener("mouseup", function () {
            isDown = false;
        });
        slider.addEventListener("mousemove", function (e) {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX;
            const walk = (x - startX);
            slider.scrollLeft = scrollLeft - walk;
        });
        // 이동하는 마우스 위치 값 - 시작값

        let bg = document.querySelectorAll(".best_bg");
        let bgcount = bg.length;
        let bgIdx = 0;

        next.addEventListener("click", function () {
            bgIdx++;
            if (bgIdx > bgcount - 1) {
                bgIdx = 0;
                bg[bgIdx + bgcount - 1].style.opacity = "0";
            }
            bg[bgIdx].style.opacity = "1";
            bg[bgIdx - 1].style.opacity = "0";
        });

        prev.addEventListener("click", function () {
            bgIdx--;
            if (bgIdx < 0) {
                bgIdx = bgcount - 1;
            }
            bg[bgIdx].style.opacity = "1";
            bg[bgIdx + 1].style.opacity = "0";
        });
    }
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

        if (sct > $(".p_img").eq(0).offset().top - 800) {
            $(".p_img").eq(0).addClass("up");
        } else {
            $(".p_img").eq(0).removeClass("up");
        }

        if (sct > $(".p_img2").offset().top - 800) {
            $(".p_img2").addClass("up");
        } else {
            $(".p_img2").removeClass("up");
        }

        if (sct > $(".p_img3").offset().top - 800) {
            $(".p_img3").addClass("up");
        } else {
            $(".p_img3").removeClass("up");
        }

        if (sct > 100) {
            $("section img").stop().css({
                "clip-path": "circle(" + 1.6 * sct + "px at 50% 50%)",
                // "width": sct * 0.016 + 87.5 + "%",
                "height": sct * 0.016 + 87.5 + "%"
            });
        }

        if (sct > $("section img").height() / 2) {
            $(".section_head").css({ "color": "white" });
            $(".second_text").stop().fadeIn(100);
        } else {
            $(".section_head").css({ "color": "#1f4095" });
            $(".second_text").stop().fadeOut(100);
        }
    });
}

if (window.matchMedia("(min-width: 1300px)").matches) {

    window.onload = function () {

        let slides = document.querySelector(".slide");
        let slideImg = document.querySelectorAll(".slide li");
        currentIdx = 0;
        slideCount = slideImg.length;
        prev = document.querySelector(".prev");
        next = document.querySelector(".next");
        slideWidth = window.innerWidth / 5;
        slideMargin = 0;
        makeClone();
        initfunction();
        function makeClone() {
            let cloneSlide_first = slideImg[0].cloneNode(true);
            let cloneSlide_second = slideImg[1].cloneNode(true);
            let cloneSlide_third = slideImg[2].cloneNode(true);
            let cloneSlide_fourth = slideImg[3].cloneNode(true);
            let cloneSlide_fifth = slideImg[4].cloneNode(true);
            let cloneSlide_sixth = slideImg[5].cloneNode(true);
            let cloneSlide_lasr = slideImg[6].cloneNode(true);
            let cloneSlide_last = slides.lastElementChild.cloneNode(true);
            slides.append(cloneSlide_first);
            slides.append(cloneSlide_second);
            slides.append(cloneSlide_third);
            slides.append(cloneSlide_fourth);
            slides.append(cloneSlide_fifth);
            slides.append(cloneSlide_sixth);
            slides.append(cloneSlide_last);
            slides.insertBefore(cloneSlide_last, slides.firstElementChild);
        }
        function initfunction() {
            slides.style.width = (slideWidth + slideMargin) * (slideCount + 8) + "px";
            slides.style.left = -(slideWidth + slideMargin) + "px";
        }

        next.addEventListener("click", function () {
            if (currentIdx <= slideCount - 1) {
                slides.style.left = -(currentIdx + 2) * (slideWidth + slideMargin) + "px";
                slides.style.transition = "0.75s ease-out";
            }
            if (currentIdx === slideCount - 1) {
                setTimeout(function () {
                    slides.style.left = -(slideWidth + slideMargin) + "px";
                    slides.style.transition = "0s ease-out";
                }, 750);
                currentIdx = -1;
            }
            currentIdx += 1;
        });
        prev.addEventListener("click", function () {
            if (currentIdx >= 0) {
                slides.style.left = -currentIdx * (slideWidth + slideMargin) + "px";
                slides.style.transition = `${0.5}s ease-out`;
            }
            if (currentIdx === 0) {
                setTimeout(function () {
                    slides.style.left = -slideCount * (slideWidth + slideMargin) + "px";
                    slides.style.transition = `${0}s ease-out`;
                }, 500);
                currentIdx = slideCount;
            }
            currentIdx -= 1;
        });

        const slider = document.querySelector(".sns");
        let isDown = false;
        let startX;
        let scrollLeft;

        // 시작했을 때 마우스 위치
        slider.addEventListener("mousedown", function (e) {
            isDown = true;
            startX = e.pageX;
            scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener("mouseleave", function () {
            isDown = false;
        });
        slider.addEventListener("mouseup", function () {
            isDown = false;
        });
        slider.addEventListener("mousemove", function (e) {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX;
            const walk = (x - startX);
            slider.scrollLeft = scrollLeft - walk;
        });
        // 이동하는 마우스 위치 값 - 시작값

        let bg = document.querySelectorAll(".best_bg");
        let bgcount = bg.length;
        let bgIdx = 0;

        next.addEventListener("click", function () {
            bgIdx++;
            if (bgIdx > bgcount - 1) {
                bgIdx = 0;
                bg[bgIdx + bgcount - 1].style.opacity = "0";
            }
            bg[bgIdx].style.opacity = "1";
            bg[bgIdx - 1].style.opacity = "0";
        });

        prev.addEventListener("click", function () {
            bgIdx--;
            if (bgIdx < 0) {
                bgIdx = bgcount - 1;
            }
            bg[bgIdx].style.opacity = "1";
            bg[bgIdx + 1].style.opacity = "0";
        });
    }
    $(function () {
        $(".head_menu>li").on("mouseenter", function () {
            $(this).children("ul").stop().slideToggle();
        });
        $(".head_menu>li").on("mouseleave", function () {
            $(this).children("ul").stop().slideToggle();
        });
    });

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

        if (sct > $(".p_img").eq(0).offset().top - 800) {
            $(".p_img").eq(0).addClass("up");
        } else {
            $(".p_img").eq(0).removeClass("up");
        }

        if (sct > $(".p_img2").offset().top - 800) {
            $(".p_img2").addClass("up");
        } else {
            $(".p_img2").removeClass("up");
        }

        if (sct > $(".p_img3").offset().top - 800) {
            $(".p_img3").addClass("up");
        } else {
            $(".p_img3").removeClass("up");
        }

        if (sct > 100) {
            $("section img").stop().css({
                "clip-path": "circle(" + 1.6 * sct + "px at 50% 50%)",
                "width": sct * 0.016 + 87.5 + "%",
                "height": sct * 0.016 + 87.5 + "%"
            });
        }

        if (sct > $("section img").height() / 2) {
            $(".section_head").css({ "color": "white" });
            $(".second_text").stop().fadeIn(100);
        } else {
            $(".section_head").css({ "color": "#1f4095" });
            $(".second_text").stop().fadeOut(100);
        }
    });
}



