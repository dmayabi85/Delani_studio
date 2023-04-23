$(document).ready(function(){
  $("form").submit(function(){
    alert("Your message has been received");
  });
});
  $(document).ready(function() {
    $('.image-text-container').hover(function() {
      $(this).find('img').hide();

    }, function() {
    
      $(this).find('img').show();
    });
  });