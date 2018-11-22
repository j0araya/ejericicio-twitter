
const heart = '<button id="like" class="social__btn social__like" href="#"><i class="fas fa-heart"></i></button>';
const deleteButton = '<button id="delete"> X </button>';
var count = '<span id="counter"> 0 </span>';

$(function () {
  // ADD 
  $('button').on('click', function (e) {
    const $text = $('textarea'); 
    if (!$text.val()) return;
    const tweet = '<div class="row tweet">'
                  + '<div class="col-md-12 text-right header-tweet">' + deleteButton + '</div>'
                  + '<div class="col-md-12 body-tweet">' + $text.val() + '</div>'
                  + '<div class="col-md-12 footer-tweet">' + heart + ' ' + count + '</div>'
                + '</div>';
    $text.val('');
    $('#container-tweet').append(tweet);
  });

  //DELETE
  $('#container-tweet').on('click', '#delete', function(e) {
    $(this).parent().parent().remove();
  });

  // LIKE 
  $('#container-tweet').on('click', '#like', function (e) {
    let $counter = $(this).parent().find('#counter'); // elemento jquery contador 
    let counter = parseInt($counter.text()); // contador como numero (get del valor)
    const hasClass = $(this).hasClass('social__like--clicked'); // tiene la clase? [true, false]
    counter += hasClass ? -1 : 1; // si tiene la clase resta 1, sino suma 1
    $(this).toggleClass('social__like--clicked'); //cambia la clase
    $counter.text(counter); // cambia el valor (set)
  });
});