
$('.enabled').hover(function() { 
    $(this).attr("class", "enabled heyo");
    $description = $("#" + $(this).attr("id") + "_popup")
    $description.addClass('active');
  }, function() {
    $description = $("#" + $(this).attr("id") + "_popup")
    $description.removeClass('active');
  });

$(document).on('mousemove', function(e){
  $description.css({
    left:  e.pageX,
    top:   e.pageY - ($description.height() + 40)
  });
  
});

