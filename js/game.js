$(document).ready(function(){
  $(".coffee, .pie, .brownie").draggable({
    containment: "#game-container",
    revert: 'invalid'
  });
  $(".worker").droppable( {
      hoverClass: 'hovered',
      accept: '.coffee, .pie, .brownie',
      drop: function(event,ui){
        var supply = ui.draggable,
            me = $(this);
        
        // Destruir elemento
        supply.hide('slow');
        
        // Asignar valor al worker
        var currentVal = parseInt( me.text() );
        me.text( currentVal + 1 );
        
        // Crear nuevo supply
        $(".supplies").append( $("<div></div>").addClass( 'supply ' + supply.attr('data-type') ) );
      }
  });

  // var gameLoop = function() {
  //   $('.worker').each(function() {
  //     var currentHappines = parseInt($(this).attr('data-happines'), 10);
  //     var random =  Math.round(Math.random() * 5)
  //     $(this).attr('data-happines', currentHappines - random)
  
  //     if (currentHappines - random <= 0) {
  //       // Murio la cajita
  //     }
  //   });
  // };
  // setInterval(gameLoop, 50);
});