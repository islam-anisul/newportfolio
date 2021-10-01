// form validation
function validateform() {
    var fstName = document.getElementById("firstName").value;
    var lstName = document.getElementById("lastName").value;
    var mailID = document.getElementById("emailID").value;
    var message = document.getElementById("msg").value;

    // first name validation
    if ((fstName == "") || (fstName == null)) {
        document.getElementById("fNameErr").innerHTML = "*Required First Name !"
        return false;
    } else if (fstName.length < 2) {
        document.getElementById("fNameErr").innerHTML = "*First can't be less than 2 characters !"
        return false;
    }  else {
        document.getElementById("fNameErr").innerHTML = null;
    }


    // last name validation
    if ((lstName == "") || (lstName == null)) {
        document.getElementById("lstNameErr").innerHTML = "*Required last name"
        return false;
    } else if (!isNaN(lstName)) {
        document.getElementById("lstNameErr").innerHTML = "*Last name can't be number"
        return false;
    } else {
        document.getElementById("lstNameErr").innerHTML = null;
    }

    // mail vlaidation
    if ((mailID == "") || (mailID == null)) {
        document.getElementById("EmailIDErr").innerHTML = "*Required Email ID"
        return false;
    } 
    else if (mailID.indexOf('@')<=0) {
        document.getElementById("EmailIDErr").innerHTML="*Invalid Email format"
        return false;
    } else if((mailID.charAt(mailID.length - 4)!='.') && (mailID.charAt(mailID.length-3)!='.')){
        document.getElementById("EmailIDErr").innerHTML="*Invalid Email format"
        return false;
    } else {
        document.getElementById("EmailIDErr").innerHTML=null;        
    }

    // message validation
    if((message=="")||(message==null)){
 document.getElementById("msgErr").innerHTML="*MSG can't be blank"
 return false;
    } else if(message.length<10){
        document.getElementById("msgErr").innerHTML="*MSG can't be less than 10 characters"
        return false;
    } else{
        document.getElementById("msgErr").innerHTML=null;
    }
};

// nav bar
$(function () {
    $(".menu_toggle").click(function () {
        $(this).toggleClass("active");
        $(".toggler").toggle("slow");
        $(".menu").toggleClass("open");
        $(".menu_item").toggle("slow");
    });
    $(".menu_link").click(function(){          
        $(".menu_item").hide("slow");
        $(".menu").removeClass("open")
        $(".menu_toggle").removeClass("active");
        $(".toggler").show('slow');
    });

});


// type js

    var typed = new Typed('.typed', {
        strings: ['Web Designer', 'Web Developer', 'Freelancer'],
        smartBackspace: true, // Default value
        typeSpeed: 80,
        startDelay: 1200,
        backSpeed: 80,
        backDelay: 500,
        loop: true,
        loopCount: false,
        showCursor: false,
        cursorChar: "|",
        attr: null,
        contentType: 'html',
        callback: function () {},
        preStringTyped: function () {},
        onStringTyped: function () {},
        resetCallback: function () {}
    })


// counter js  
$('.counter').counterUp({
    delay: 10,
    time: 1000
});
// portfolio
$(".pb").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
});

// portfolio item
$(".webds_btn").click(function () {
    $(".webdsg_port").addClass("open").siblings().removeClass("open")
});
$(".webdv_btn").click(function () {
    $(".webdev_port").addClass("open").siblings().removeClass("open")
});
$(".ui_btn").click(function () {
    $(".ui_port").addClass("open").siblings().removeClass("open")
});
$(".etm_btn").click(function () {
    $(".etemp_port").addClass("open").siblings().removeClass("open")
});
$(".wp_btn").click(function () {
    $(".wp_port").addClass("open").siblings().removeClass("open")
});


// portfolio item slider

$('.port_slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2000,
    arrows: false,
    mobileFirst: true,
    dots: true,
    arrows: false,        
});
// testimonial slide
$('.testimonial_slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2000,
    arrows: false,
    mobileFirst: true,
    dots: true,
    arrows: false,
    fade: true,
});

// preloader
$(window).on('load', function () {
    $("#preloader").delay(2000).fadeOut(2000);
});

  // back top top btn
$(function(){
    $("#back_to_top").hide();

    $(window).scroll(function(){
        var backToTop = $(this).scrollTop();
        if (backToTop>=400){
            $("#back_to_top").show("slow");
        } else{
            $("#back_to_top").hide("slow");
        }
    });
    $('#back_to_top').click(function () {
        $('html , body').animate({
            scrollTop: 0,
        }, 2000);
    });
});

// aos js
AOS.init();

// navbar smooth navigation
$(document).on('click','a[href^="#"]', function(event){
    event.preventDefault();

    $(' html,body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top} ,2000);
});