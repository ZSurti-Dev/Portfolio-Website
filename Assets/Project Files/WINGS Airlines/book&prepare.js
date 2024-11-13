$(document).ready(function(){
    const bookAndprepare = $('li#book-and-prepare');

    bookAndprepare.click(function(){
        $(this).css('color','#b60505');
        window.location.href = "file:///G:/Web%20Portfolio%20files/WINGS%20Airlines/book&prepare.html";

    }); 
});

$(document).ready(function() {
    const hamburger = $('.hamburger');
    const navMenu = $('nav ul');

    hamburger.click(mobileMenu);

    function mobileMenu() {
      hamburger.toggleClass('active');
      navMenu.toggleClass('active');
    }

    $('nav a').click(closeMenu);

    function closeMenu() {
      hamburger.removeClass('active');
      navMenu.removeClass('active');
}
});