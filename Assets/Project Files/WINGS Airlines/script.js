const destinationCards = document.querySelector('.flight-offers');
const scrollLeftButton = ddocument.getelementbyid('#leftScroll-btn');
const scrollRightButton = document.getelementbyid('rightScroll-btn');

destinationCards.style.overflowX = 'scroll'; // Enable horizontal scrolling

destinationCards.appendChild(scrollLeftButton);
destinationCards.appendChild(scrollRightButton);

scrollLeftButton.addEventListener('click', () => {
  destinationCards.scrollLeft -= 300; // Adjust scroll amount as needed
});

scrollRightButton.addEventListener('click', () => {
  destinationCards.scrollLeft += 300; // Adjust scroll amount as needed
});

destinationCards.addEventListener('mousedown', (event) => {
  const initialScrollLeft = destinationCards.scrollLeft;
  const initialMouseX = event.clientX;

  const handleMouseMove = (event) => {
    const deltaX = event.clientX - initialMouseX;
    destinationCards.scrollLeft = initialScrollLeft - deltaX;
  };

  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', handleMouseMove);
  });
});

$(document).ready(function(){
  const bookAndprepare = $('li#book-and-prepare');

  bookAndprepare.click(function(){
      $(this).css('color','#b60505');
      window.location.href = "file:///G:/Web%20Portfolio%20files/WINGS%20Airlines/book&prepare.html";

  }); 
});

$(document).ready(function() {
  $('#from').on('input', function() {
    const from = $(this).val();
    if (from.length > 2) {
      $.ajax({
        url: 'https://your-api-endpoint/search-locations', // Replace with your API endpoint
        method: 'GET',
        data: {
          query: from
        },
        success: function(data) {
          $('#suggestions').empty();
          if (data.length > 0) {
            $('#suggestions').show();
            $.each(data, function(index, location) {
              $('#suggestions').append('<li>' + location + '</li>');
            });
          } else {
            $('#suggestions').hide();
          }
        },
        error: function() {
          console.log('Error fetching locations');
        }
      });
    } else {
      $('#suggestions').hide();
    }
  });

  $('#suggestions li').on('click', function() {
    $('#from').val($(this).text());
    $('#suggestions').hide();
  });
});

// Flight Booking section - Home page
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


