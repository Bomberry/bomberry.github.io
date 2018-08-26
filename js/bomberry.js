// Variant of https://bootsnipp.com/snippets/WPD9O

$(function() {
  $('img').on('click', function() {
    $('.imgSource').attr('src', $(this).attr('src'));
    $('#imgModal').modal('show');
  });
});
