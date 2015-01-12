$( document ).ready(function() {
	var heart = Snap.select('#iconcoeur');
    var heartStroke = heart.select('.heart_stroke');
    var list = Snap.select('#iconlist');
    var listStroke = list.selectAll('path');
    var search = Snap.select('#iconsearch');
    var searchStroke = search.selectAll('path');
    var home = Snap.select('#iconhome');
    var homeStroke = home.selectAll('path');
    var like = Snap.select('#iconlike');
    var likeStroke = like.select('path');
    var trash = Snap.select('#icontrash');
    var trashStroke = trash.select('path:nth-child(2)');
	$('#favoris li').each(function(){
		$(this).append('<div><button>Préparation</button> <button>Ajouter à la liste</button> <button>Supprimer</button> </div>');
	});
	$('#favoris li').click(function(){
		var recupselect= $(this).children();
		$(recupselect).slideDown(300);
	});

	$('#favoris li').click(function(){
		var recupselect= $(this).children();
		$(recupselect).slidetoggle(300);
	});
    $( '#iconcoeur' ).click(function() {
        $("#favoris").toggleClass("open-from-top");
        if ($("#favoris").is('.open-from-top')) {     
            heartStroke.animate(
                { fill: '#fff' }, 300, mina.easein); 
        } else {
            heartStroke.animate(
                { fill: '#4c413f' }, 300, mina.easein);
        };
    });
    $( '#iconlist' ).click(function() {
        $("#liste").toggleClass("open-from-top");
        if ($("#liste").is('.open-from-top')) {     
            listStroke.animate(
                { fill: '#fff' }, 300, mina.easein); 
        } else {
            listStroke.animate(
                { fill: '#4c413f' }, 300, mina.easein);
        };
    });
    $( '#iconsearch' ).click(function() {
        $("#recherche").toggleClass("open-from-top");
        if ($("#recherche").is('.open-from-top')) {     
            searchStroke.animate(
                { fill: '#fff' }, 300, mina.easein); 
        } else {
            searchStroke.animate(
                { fill: '#4c413f' }, 300, mina.easein);
        };
    });

    $( '#iconhome' ).click(function() {
    	$("#favoris, #liste, #recherche").removeClass("open-from-top");   	
    });

    $( '#iconfiltre' ).click(function() {
        $("#filtres").addClass("open-from-right");     
    });
    $( '#return' ).click(function() {
        $("#filtres").removeClass("open-from-right");     
    });

    $( '#iconlike' ).click(function() {
        $(this).parent().toggleClass("liked");
        if (!$(this).parent().is('.liked')) {     
            likeStroke.animate(
                { fill: '#4c413f' }, 300, mina.easein); 
        } else {
            likeStroke.animate(
                { fill: '#FF739B' }, 300, mina.easein);
        };
    });
    $( '#icontrash' ).click(function() {  
        $(this).parent().toggleClass("trashed");
        if (!$(this).parent().is('.trashed')) {     
            trashStroke.animate(
                { transform: 't0 0'}, 600, mina.elastic); 
        } else {
            trashStroke.animate(
                { transform: 't0 -8'}, 600, mina.elastic);
        }   
    });
});