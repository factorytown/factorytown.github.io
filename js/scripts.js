// Overlay
$(document).on('click', '#overlay', function(){

    $('#overlay').hide();
    
});

window.addEventListener("scroll", () => {
    
    $('#overlay').hide();

}, {once: true });
