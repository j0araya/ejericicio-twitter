
const heart = '<button id="like" class="social__btn social__like" href="#"><i class="fas fa-heart"></i></button>'; // boton like 
const deleteButton = '<button id="delete"> X </button>'; // boton eliminar 
const count = '<span id="counter"> 0 </span>'; // contador

$(function () {
  
  // ADD 
  $('button').on('click', function (e) { // toma solo el botton de publicar. ¿y por que no los otros? 
    const $text = $('textarea');  // obtiene el area de texto
    if (!$text.val()) return; // si viene vacio  retorna la funcion y no ejecuta lo siguiente
    const tweet = '<div class="row tweet">' // nuevo tweet, clase tweet siponible para la magia 
                  + '<div class="col-md-12 text-right header-tweet">' + deleteButton + '</div>' // header-tweet disponible 
                  + '<div class="col-md-12 body-tweet">' + $text.val() + '</div>' // body-tweet disponible 
                  + '<div class="col-md-12 footer-tweet">' + heart + ' ' + count + '</div>' // footer-tweet disponible
                + '</div>'; 
    $text.val(''); // valor del area de texto a un string vacio. 
    $('#container-tweet').append(tweet); // agrega el nuevo tweet
  });

  // DELETE
  $('#container-tweet').on('click', '#delete', function(e) { // delegacion
    $(this).parent().parent().remove(); // remueve la publicacion 
    //$(boton #delete) -> div.col-md-12 header-tweet -> div.row <- remueve eso
  });

  // LIKE 
  $('#container-tweet').on('click', '#like', function (e) { 
    let $counter = $(this).parent().find('#counter'); // elemento jquery contador 
    let counter = parseInt($counter.text()); // contador como numero (get del valor)
    const hasClass = $(this).hasClass('social__like--clicked'); // tiene la clase? [true, false]
    counter += hasClass ? -1 : 1; // si tiene la clase resta 1, sino suma 1
    $counter.text(counter); // cambia el valor (set)
    $(this).toggleClass('social__like--clicked'); //cambia la clase
  });
});