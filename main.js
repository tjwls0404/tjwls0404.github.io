//After line animation
setTimeout(function(){
    $('#overlay-container').animate({top: "757px"}, 700)
}, 900);

$('#body a').each(function(){
    var id = $(this).attr('id');
    var $line = $('#body ul').find('.catline.active.'+id);

   $(this).hover(function(){
       $line.css('width','0px');
       $line.animate({width:"100%"}, 300, function(){
           if (!(!!$('#body a:eq(0)').filter(function() { return $(this).is(":hover"); }).length))  $line.css('width', '0px');
       })
       }, function() {
           $line.css('width', '0px');
       });
});
