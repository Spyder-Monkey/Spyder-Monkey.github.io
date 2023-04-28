$(document).ready(function(){
    function scrollToAnchor(aid) {
        var aTag = $("a[name='" + aid + "']");
        $('html,body').animate({scrollTop: aTag.offset().top}, 'medium');
    }
    
    $("#about-link").click(function() {
        scrollToAnchor('about');
    });
    
    $("#skills-link").click(function() {
        scrollToAnchor('skills');
    });
    
    $("#projects-link").click(function() {
        scrollToAnchor('projects');
    });
    
    $("#contact-link").click(function() {
        scrollToAnchor('contact');
    });

    $("#email-icon-link").click(function() {
        scrollToAnchor('contact');
    });
});