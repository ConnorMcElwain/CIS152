// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function(){
    
    $('#episode-one-link').click(function() {
        $('#episode-one').fadeIn(300)
            .css('background-color', 'black')
            .css('color', 'yellow');
        $('#episode-two').fadeOut(1000);
        $('#episode-three').fadeOut(1000);
        $('#episode-four').fadeOut(1000);
        $('#episode-five').fadeOut(1000);
        $('#episode-six').fadeOut(1000);
        $('#episode-seven').fadeOut(1000);   
    });

});

$(document).ready(function(){
    
    $('#episode-two-link').click(function() {
        $('#episode-two').fadeIn(300)
            .css('background-color', 'black')
            .css('color', 'yellow');
        $('#episode-one').fadeOut(1000);
        $('#episode-three').fadeOut(1000);
        $('#episode-four').fadeOut(1000);
        $('#episode-five').fadeOut(1000);
        $('#episode-six').fadeOut(1000);
        $('#episode-seven').fadeOut(1000);
    });

});

$(document).ready(function(){
    
    $('#episode-three-link').click(function() {
        $('#episode-three').fadeIn(300)
            .css('background-color', 'black')
            .css('color', 'yellow');
        $('#episode-one').fadeOut(1000);
        $('#episode-two').fadeOut(1000);
        $('#episode-four').fadeOut(1000);
        $('#episode-five').fadeOut(1000);
        $('#episode-six').fadeOut(1000);
        $('#episode-seven').fadeOut(1000);
    });

});

$(document).ready(function(){
    
    $('#episode-four-link').click(function() {
        $('#episode-four').fadeIn(300)
            .css('background-color', 'black')
            .css('color', 'yellow');
        $('#episode-one').fadeOut(1000);
        $('#episode-two').fadeOut(1000);
        $('#episode-three').fadeOut(1000);
        $('#episode-five').fadeOut(1000);
        $('#episode-six').fadeOut(1000);
        $('#episode-seven').fadeOut(1000);
    });

});

$(document).ready(function(){
    
    $('#episode-five-link').click(function() {
        $('#episode-five').fadeIn(300)
            .css('background-color', 'black')
            .css('color', 'yellow');
        $('#episode-one').fadeOut(1000);
        $('#episode-two').fadeOut(1000);
        $('#episode-three').fadeOut(1000);
        $('#episode-four').fadeOut(1000);
        $('#episode-six').fadeOut(1000);
        $('#episode-seven').fadeOut(1000);
    });

});

$(document).ready(function(){
    
    $('#episode-six-link').click(function() {
        $('#episode-six').fadeIn(300)
            .css('background-color', 'black')
            .css('color', 'yellow');
        $('#episode-one').fadeOut(1000); 
        $('#episode-two').fadeOut(1000); 
        $('#episode-three').fadeOut(1000); 
        $('#episode-four').fadeOut(1000); 
        $('#episode-five').fadeOut(1000); 
        $('#episode-seven').fadeOut(1000); 
    });

});

$(document).ready(function(){
    
    $('#episode-seven-link').click(function() {
        $('#episode-seven').fadeIn(300)
            .css('background-color', 'black')
            .css('color', 'yellow');
        $('#episode-one').fadeOut(1000); 
        $('#episode-two').fadeOut(1000); 
        $('#episode-three').fadeOut(1000); 
        $('#episode-four').fadeOut(1000); 
        $('#episode-five').fadeOut(1000); 
        $('#episode-six').fadeOut(1000); 
    });

});