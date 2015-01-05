$('.recette').click(function(){

	if($('.menurecette').hasClass('slided')){
		$('.slided').removeClass('slided');
	} else {
		$('.slided').removeClass('slided');
		$('.menurecette').addClass('slided');
	}
});
$('.liste').click(function(){
	
	if($('.menuliste').hasClass('slided')){
		$('.slided').removeClass('slided');
	} else {
		$('.slided').removeClass('slided');
		$('.menuliste').addClass('slided');
	}
});
$('.buttonleft').click(function(){

	if($(this).hasClass('clicked')){
		$('.clicked').removeClass('clicked');
	} else {
		$('.clicked').removeClass('clicked');
		$('.buttonleft').addClass('clicked');
	}

});
$('.buttonright').click(function(){

	if($(this).hasClass('clicked')){
		$('.clicked').removeClass('clicked');
	} else {
		$('.clicked').removeClass('clicked');
		$('.buttonright').addClass('clicked');
	}

});

$('.iconeleft').click(function(){

	if($('.menuheart').hasClass('swiped')){
		$('.swiped').removeClass('swiped');
	} else {
		$('.swiped').removeClass('swiped');
		$('.menuheart').addClass('swiped');
	}
});
$('.iconeright').click(function(){

	if($('.menuaddlist').hasClass('swiped')){
		$('.swiped').removeClass('swiped');
	} else {
		$('.swiped').removeClass('swiped');
		$('.menuaddlist').addClass('swiped');
	}
});
$('.buttonheart').click(function(){

	if($(this).hasClass('clicked')){
		$('.clicked').removeClass('clicked');
	} else {
		$('.clicked').removeClass('clicked');
		$('.buttonheart').addClass('clicked');
	}
});
$('.buttonaddlist').click(function(){

	if($(this).hasClass('clicked')){
		$('.clicked').removeClass('clicked');
	} else {
		$('.clicked').removeClass('clicked');
		$('.buttonaddlist').addClass('clicked');
	}
})
