$(document).ready(function(){
  
  // Init
  // ----------------------------
  
  // Hacer draggables los supplies
  $(".supply").draggable({
    containment: "#game-container",
    revert: 'invalid',
    helper: function( event ) {
      return $( "<div></div>").addClass($(this).attr("class") );
    }
  });
  
  // Hacer dropeables los workers
  $(".worker").droppable( {
      hoverClass: 'hovered',
      drop: function(event,ui){
        var supply = ui.draggable,
            me = $(this);
        
        // Asignar valor al worker
        var currentVal = parseInt( me.text(), 10 );
        me.text( currentVal + 1 );
        
      }
  });

  
  
  // Lógica del juego
  // ----------------------------
  
  
  var gameLoop = function() {
    $('.worker').each(function() {
      var currentStamina = parseInt($(this).attr('data-stamina'), 10);
      var random =  Math.round(Math.random() * 5);
      $(this).attr('data-stamina', currentStamina - random);
  
      if (currentStamina - random <= 0) {
        // Murio la cajita
      }
    });
  };
  setInterval(gameLoop, 50);

  
  
}); // Fin