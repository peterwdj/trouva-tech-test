$(document).ready(function() {
  $('.add-to-collection').click(function() {
    let productId = ($(this).parent().prop('id'));
    console.log(productId);
  });
});
