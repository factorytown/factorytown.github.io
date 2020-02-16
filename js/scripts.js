// Overlay
$(document).on('click', '#overlay', function(){

    $('#overlay').fadeOut('slow');
    
});

window.addEventListener("scroll", () => {
    
    $('#overlay').fadeOut('slow');

}, {once: true });
