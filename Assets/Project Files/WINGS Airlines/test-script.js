
$('#pass-class').on('mouseout', function() {
  $(this).css('color', 'black');
});
$('#pass-class').on('mouseover', function() {
  $(this).css('color', 'blue');
  });

$('#pass-class').on('click', function() {
  $('#pass-container').show();
  $('#pass-container').css('display', 'block');
  $('#pass-container').animate({
    top: '50%',
    left: '50%',
    width: '500px',
    height: '300px',
    opacity: 1,
    backgroundColor: 'white',
    border: '2px solid black',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px black'
  }, 500);
});