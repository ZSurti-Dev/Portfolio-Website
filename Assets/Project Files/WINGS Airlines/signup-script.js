$(document).ready(function() {
  const sections = {
      registration: $('.regis-section'),
      personal: $('.persona-section'),
      communication: $('.comm-section'),
      confirmation: $('.confi-section'),
  };

  let userEmail = '';

  
  $.each(sections, function(key, value) {
      if (key !== 'registration') {
          value.hide();
      $('.active-tab').css('color','red');
      }
  });

  // Registration form submission
  $('#registration-form').submit(function(e) {
      e.preventDefault();
      userEmail = $('#email').val();
      if (validateRegistrationForm()) {
          showSection('personal');
      $('.active-tab').css('color','red');
      }
  });
    // While customer want to go for login.
    $('#user_login').on('click', function(e){ 
        e.preventDefault();
        $('#registration-form').hide();
        $('#login-form').show();
        $('.form-nav').hide();
        $('.title-text').text('Login to Your Account');
        const email = $('#email').val();
        const password = $('#password').val();

    }); 
    $('.login-back-btn').on('click',function(e){
        e.preventDefault();
                $('#registration-form').show();
                $('#login-form').hide();
                $('.form-nav').show();
                $('.title-text').text('Create New Account');
    });

  // Personal form submission
  $('#personal-form').submit(function(e) {
      e.preventDefault();
      if (validatePersonalForm()) {
          showSection('communication');
      }
  });

  // Communication form submission
  $('#communication-form').submit(function(e) {
      e.preventDefault();
      if (validateCommunicationForm()) {
          showConfirmation();
      }
  });

  // Back buttons
  $('.persona-back-btn').click(function() {
      showSection('registration');
  });

  $('.comm-back-btn').click(function() {
      showSection('personal');
  });

  // Form validation functions
  function validateRegistrationForm() {
      const email = $('#email').val();
      const password = $('#password').val();
      const confirmPassword = $('#confirm-password').val();

      if (!email || !password || !confirmPassword) {
          alert('Please fill in all fields.');
          return false;
      }

      if (password !== confirmPassword) {
          alert('Passwords do not match.');
          return false;
      }

      return true;
  }

  function validatePersonalForm() {
      const title = $('input[name="title"]:checked').val();
      const firstName = $('#firstname').val();
      const lastName = $('#lastname').val();
      const day = $('#day').val();
      const month = $('#month').val();
      const year = $('#year').val();

      if (!title || !firstName || !lastName || !day || !month || !year) {
          alert('Please fill in all fields.');
          return false;
      }

      return true;
  }

  function validateCommunicationForm() {
      const consent = $('#consent').is(':checked');

      if (!consent) {
          alert('Please give your consent to continue.');
          return false;
      }

      return true;
  }

  // Show confirmation section
  function showConfirmation() {
      showSection('confirmation');
      $('#confirmation-email').text(userEmail);
  }

  // Show specific section and update navigation
  function showSection(sectionName) {
      $.each(sections, function(key, value) {
          value.hide();
      });
      sections[sectionName].show();
      updateNavigation(sectionName);
  }

  // Update navigation highlighting
  function updateNavigation(activeSectionName) {
      $('.form-nav li').removeAttr('id');
      const sectionIndex = Object.keys(sections).indexOf(activeSectionName);
      if (sectionIndex >= 0) {
          $('.form-nav li').eq(sectionIndex).attr('id', 'active-tab');
      }
  }

  // Mobile menu toggle
  $('.hamburger').click(function() {
      $(this).toggleClass('active');
      $('nav ul').toggleClass('active');
  });
});
