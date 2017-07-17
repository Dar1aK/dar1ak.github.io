//menu-top
Webflow.require('ix').init([{
    "slug": "menu-top-support",
    "name": "menu-top- support",
    "value": {
        "style": {},
        "triggers": [{
            "type": "hover",
            "selector": ".drop-menu-top-support",
            "stepsA": [{
                "height": "auto",
                "transition": "height 500ms ease-in-out-sine 0"
            }],
            "stepsB": [{
                "height": "0px",
                "transition": "height 500ms ease-in-out-sine 0"
            }]
        }]
    }
}, {
    "slug": "menu-top-delivery",
    "name": "menu-top- delivery",
    "value": {
        "style": {},
        "triggers": [{
            "type": "hover",
            "selector": ".drop-menu-top-delivery",
            "stepsA": [{
                "height": "auto",
                "transition": "height 500ms ease-in-out-sine 0"
            }],
            "stepsB": [{
                "height": "0px",
                "transition": "height 500ms ease-in-out-sine 0"
            }]
        }]
    }
}, {
    "slug": "menu-top-legal",
    "name": "menu-top- legal",
    "value": {
        "style": {},
        "triggers": [{
            "type": "hover",
            "selector": ".drop-menu-top-legal",
            "stepsA": [{
                "height": "auto",
                "transition": "height 500ms ease-in-out-sine 0"
            }],
            "stepsB": [{
                "height": "0px",
                "transition": "height 500ms ease-in-out-sine 0"
            }]
        }]
    }
}, {
    "slug": "menu-top-about",
    "name": "menu-top- about",
    "value": {
        "style": {},
        "triggers": [{
            "type": "hover",
            "selector": ".drop-menu-top-about",
            "stepsA": [{
                "height": "auto",
                "transition": "height 500ms ease-in-out-sine 0"
            }],
            "stepsB": [{
                "height": "0px",
                "transition": "height 500ms ease-in-out-sine 0"
            }]
        }]
    }
}]);

//tabs
(function($){               
    jQuery.fn.lightTabs = function(options){

        var createTabs = function(){
            tabs = this;
            i = 0;
            
            showPage = function(i){
                $(tabs).children("div").children("div").fadeOut(200);
                $(tabs).children("div").children("div").eq(i).fadeIn(200);
                $(tabs).children("ul").children("li").removeClass("active");
                $(tabs).children("ul").children("li").eq(i).addClass("active");
            }
                                
            showPage(0);                
            
            $(tabs).children("ul").children("li").each(function(index, element){
                $(element).attr("data-page", i);
                i++;                        
            });
            
            $(tabs).children("ul").children("li").click(function(){
                showPage(parseInt($(this).attr("data-page")));
            });             
        };      
        return this.each(createTabs);
    };  
})(jQuery);

$(document).ready(function() {
    $(".products-tabs").lightTabs();

    $('.slide-menu ul').hide();
    $(".slide-menu a").click(function () {
      $(this).parent(".slide-menu").children("ul").slideToggle("100");
      $(this).find(".slide").toggleClass("slide-up slide-down");
    });

    $('#mobile').hide();
    $('#mobile_btn').on('click', mobile_menu_open);
});

function mobile_menu_open(){
    $('#mobile').slideToggle("100");
    $('#mobile_btn').addClass('active');
    $('#mobile_btn').off().on('click', function(){ mobile_menu_close(); });
}

function mobile_menu_close(){
    $('#mobile').slideToggle("100");
    $('#mobile_btn').removeClass('active');
    $('#mobile_btn').off().on('click', function(){ mobile_menu_open(); });
}




