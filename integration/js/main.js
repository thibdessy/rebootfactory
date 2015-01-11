$('#favoris li').each(function(){
	$(this).append('<div><button>Préparation</button> <button>Ajouter à la liste</button> <button>Supprimer</button> </div>');
});
$('#favoris li').click(function(){
	var recupselect= $(this).children('div');
	$(recupselect).slideToggle(300);
});
