$(document).ready(function() {
    const adultsInput = $('#adults');
    const childrenInput = $('#children');
    const infantsInput = $('#infants');
    const totalPassengersElement = $('#total-passengers');
  
    function updateTotalPassengers() {
      const total = parseInt(adultsInput.val()) + parseInt(childrenInput.val()) + parseInt(infantsInput.val());
      totalPassengersElement.text(total);
    }
  
    adultsInput.on('change', updateTotalPassengers);
    childrenInput.on('change', updateTotalPassengers);
    infantsInput.on('change', updateTotalPassengers);
  });

//   clicking on ID =TRIP CASS it will direct to pass-container

$('#pass-class').on('click', function() {
    $('#pass-container').show();
    
});

  
  
    $('#add-passenger').on('click', function() {
          const adults = parseInt($('#adults').val());
          const children = parseInt($('#children').val());
          const infants = parseInt($('#infants').val());
          const passengers = adults + children + infants;
          const passengerType = $('#passenger-type').val();
          const passengerName = $('#passenger-name').val();
          const passengerAge = $('#passenger-age').val();
          const passengerGender = $('#passenger-gender').val();
          const passengerId = `passenger-${passengers}`;
          const passengerRow = `
            <tr id="${passengerId}">
              <td>${passengerType}</td>
              <td>${passengerName}</td>
              <td>${passengerAge}</td>
              <td>${passengerGender}</td>
            </tr>
          `;
          $('#passengers-table').append(passengerRow);
          $('#adults').val(0);
          $('#children').val(0);
          $('#infants').val(0);
          $('#passenger-name').val('');
          $('#passenger-age').val('');
          $('#passenger-gender').val('');
    });
    $('#passForm-btn').on('click',function() {
        $('.passenger-container').hide();
        $('#passenger-type').val('');
        });
    $(document).ready(function() {
      const hamburger = $('.hamburger');
      const navMenu = $('nav ul');
      hamburger.click(mobileMenu);
      function mobileMenu() {
        hamburger.toggleClass('active');
        navMenu.toggleClass('active');     }

      $('nav a').click(closeMenu);
      function closeMenu() {
        hamburger.removeClass('active');
        navMenu.removeClass('active');
  }
});
