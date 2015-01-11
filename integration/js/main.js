

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
