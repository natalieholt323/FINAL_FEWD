

$(".pin2Ex img").click(function(){
    $(".box").show();

});
			
$(".pin4Ex img").click(function(){
    $(".box2").show();
});
					
$('.boxclose').click(function(){
	console.log('ss');
	$(this).parent().hide();
    // $(".box").show();
});
		
// $('#boxclose').click(function(){
// 	console.log('clicked');
//     // $(".box2").hide();
//  });


/*
var navOpen = false;
$('.hamburger').on('click', function(){
	if (navOpen) {
		$('#page-header').animate({height:45px})
		//animate height of header closed - 45px
	

}else {
	$('#page-header').animate({height:240},2000);s
}
}
$('.pin2Ex img').click(function(){
        $('#overlay').fadeIn(200,function(){
            $('#box').animate({'top':'20px'},200);
        });
        return false;
    });
    $('#boxclose').click(function(){
        $('#profile_box').animate({'top':'-200px'},500,function(){
            $('#overlay').fadeOut('fast');
        });
    });
 */
