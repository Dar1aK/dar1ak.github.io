$(document).ready(function(){
    $('.a_down').click(function() {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $('.float-menu').hide();
}); 

jQuery(function(f){
    var element = f('.float-menu');
    f(window).scroll(function(){
        element['fade'+ (f(this).scrollTop() > 600 ? 'In': 'Out')](200);           
    });
});