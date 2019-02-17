$( document ).ready(function() {

    $("#about_scroll").fadeOut();   
    $("#experiences_scroll").fadeOut();
    $("#skills_scroll").fadeOut();

    $("#about").click(function(){
        $("#index").fadeOut();
        $("#about_scroll").fadeIn();
        $('#about_left').addClass('animated slideInLeft');
        $('#about_right').addClass('animated slideInRight');
    });
    $("#experiences").click(function(){
        $("#index").fadeOut();
        $("#experiences_scroll").fadeIn();
        $('#experiences_left').addClass('animated slideInLeft');
        $('#experiences_right').addClass('animated slideInRight');
    });
    $("#skills").click(function(){
        $("#index").fadeOut();
        $("#skills_scroll").fadeIn();
        $('#skills_left').addClass('animated slideInLeft');
        $('#skills_right').addClass('animated slideInRight');
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