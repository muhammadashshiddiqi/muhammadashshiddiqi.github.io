(function($) {
  
  "use strict";  

  $(window).on('load', function() {

    /* --------- Teknical Skill -----------*/
    function boxSkill(){
      var scroll = $(window).scrollTop();
      var pos = $(".box-skill").offset().top;

      if(pos < scroll + 350)
      {
          //Easy Pie Chart
          $('.chart').easyPieChart({
              lineWidth : 15,
              size : 152,
              barColor : '#FF675F',
              scaleColor : false,
              trackColor : '#E1E1E3',
              onStep: function(from, to, percent)
              {
                $(this.el).find('.percent').text(Math.round(percent));
              }
          });
      }
    }

    /*-----------Slide Animasi---------- */
    function slideAnim(){
      $(".slideanim").each(function()
      {
          var elem = $(this);
          var arah = (elem.is("[data-slideanim]")) ? elem.data("slideanim") : "default";
          //var arah = (elem[0].hasAttribute("data-slideanim")) ? elem.data("slideanim") : "default";
          var pos = $(this).offset().top;
          var scroll = $(window).scrollTop();

          if (pos < scroll + 550)
          {
              if(arah == "default")
              {
                  $(this).addClass("slide-aktif");
              }
              else if(arah == "kiri")
              {
                  $(this).addClass("slide-kiri-aktif");
              }
              else
              {
                  $(this).addClass("slide-kanan-aktif");
              }
          }
      });
    }
    
    /*---One Page Navigation & wow js----*/
    var OnePNav = $('.onepage-nev');
    var top_offset = OnePNav.height() - -0;
    OnePNav.onePageNav({
      currentClass: 'active',
      scrollOffset: top_offset,
    });

    /* ------ WOW SCROLL ----*/
     var wow = new WOW({
      //disabled for mobile
        mobile: false
    });

    wow.init();
    
    /* --------- ARROW PANAH KE ATAS -----------*/
      var offset = 200;
      var duration = 500;
      $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
          $('.back-to-top').fadeIn(400);
        } else {
          $('.back-to-top').fadeOut(400);
        }
        slideAnim();
        boxSkill();
      });

      $('.back-to-top').on('click',function(event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 600);
        return false;
      });
  });      

}(jQuery));