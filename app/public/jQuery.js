$(document).ready(function () {
  $('.add-to-collection').click(function() {
    const productId = $(this).parent().prop('id');
    const collectionId = $(`#${productId} select :selected`).val();
    $.post(`/collections/${collectionId}`, { productId, collectionId });
    $(this).parent().append('<p class="confirmation-message">Congratulations! This item has been added to your collection.</p>');
  });
});
