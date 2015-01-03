$( document ).ready(function() {
    var heart = Snap.select('#heart');
    var heartStroke = heart.select('#heart_icon');
    var trash = Snap.select('#trash');
    var trashed = trash.select('path:nth-child(5)');
    var setting = Snap.select('#setting');
    var opener = setting.select('#set-icon');
    var list = Snap.select('#list')
    var addto = list.select('.listadded')
    $( '#heart' ).click(function() {
        $(this).parent().toggleClass("liked");
        if (!$(this).parent().is('.liked')) {     
            heartStroke.animate(
                { fill: 'green' }, 300, mina.easein); 
        } else {
            heartStroke.animate(
                { fill: '#FF739B' }, 300, mina.easein);
        };
    });
    $( '#trash' ).click(function() {  
        $(this).parent().toggleClass("trashed");
        if (!$(this).parent().is('.trashed')) {     
            trashed.animate(
                { transform: 't0 0'}, 600, mina.elastic); 
        } else {
            trashed.animate(
                { transform: 't0 -8'}, 600, mina.elastic);
        }   
    });
    $( '#setting' ).click(function() {  
        $(this).parent().toggleClass("open");
        if (!$(this).parent().is('.open')) {     
            opener.animate(
                { transform: 'r -60 50 50'}, 300, mina.linear); 
        } else {
            opener.animate(
                { transform: 'r 60 50 50'}, 300, mina.linear);
        }   
    });
    $( '#list' ).click(function() {  
        $(this).parent().toggleClass("add-to-list");
        if (!$(this).parent().is('.add-to-list')) {     
            addto.animate(
                { fill:'green'}, 300, mina.easein); 
        } else {
            addto.animate(
                { fill: '#F4F4F4'}, 300, mina.easein);
        }   
    });

});