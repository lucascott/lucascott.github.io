$( document ).ready(function() {

    $("#about_scroll").fadeOut();   
    $("#work_scroll").fadeOut();
    $("#contact_scroll").fadeOut();

    $("#about").click(function(){
        $("#index").fadeOut();
        $("#about_scroll").fadeIn();
        $('#about_left').addClass('animated slideInLeft');
        $('#about_right').addClass('animated slideInRight');
    });
    $("#work").click(function(){
        $("#index").fadeOut();
        $("#work_scroll").fadeIn();
        $('#work_left').addClass('animated slideInLeft');
        $('#work_right').addClass('animated slideInRight');
    });
    $("#contact").click(function(){
        $("#index").fadeOut();
        $("#contact_scroll").fadeIn();
        $('#contact_left').addClass('animated slideInLeft');
        $('#contact_right').addClass('animated slideInRight');
    });

    $(".back").click(function(){
        $(".pages").fadeOut();
        $("#index").fadeIn();
        $('#index_left').addClass('animated slideInLeft');
        $('#index_right').addClass('animated slideInRight');
    });

    var app = document.getElementById('app');

    var typewriter = new Typewriter(app, {
        loop: true,
        delay: 70
    });

    typewriter.typeString('Machine Learning.')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Big Data.')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Cloud Computing.')
    .pauseFor(1500)
    .start();

});