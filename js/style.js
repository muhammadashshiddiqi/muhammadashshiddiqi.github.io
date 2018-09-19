$(document).ready(function(){
    $('.tooltip-header').tooltip({
        placement: "bottom"
    }); 
    progressBar();    
    $(window).scroll(function() {    
        navbarScroll();
    });

});
function navbarScroll()
{
    var scroll = $(window).scrollTop();
    if(scroll >= 50){
        $(".navbar").addClass("scrolled");
        $(".navbar").removeClass("navbar-default");
        $(".navbar-nav li a i").addClass("fa-3x");
        $(".navbar-nav li a i").removeClass("fa-4x");
    }else{
        $(".navbar").addClass("navbar-default");
        $(".navbar").removeClass("scrolled");
        $(".navbar-nav li a i").removeClass("fa-3x");
        $(".navbar-nav li a i").addClass("fa-4x");
    }
}

function progressBar(){
    var delay = 750;
    $(".progress-bar").each(function(i) {
        $(this).delay(delay * i).animate({
            width: $(this).attr('aria-valuenow') + '%'
        }, delay);

        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: delay,
            // easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now) + '%');
            }
        });
    });
}