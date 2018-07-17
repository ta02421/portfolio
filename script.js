$(document).ready(function(){
    $('a').click(function(){
       //alert("You just clicked me");
       var selected= $(this);
       $('a').removedClass('active');
       $(selected).addClass('active');
    });
    
    var $a= $('.a'),
    $b= $('.b'),
    $c= $('.c'),
    $d= $('.d'),
    $home= $('home'),
    $aboutme= $('.aboutme');

    $a.click(function(){
        $home.fadeIn();
        $aboutme.fadeout();
    });
    // $b.click(function(){
    //     $aboutme.show();
    //     $home.fadeOut();
    // });
    $('.b').show();
    $('.b').css('display','block');

});