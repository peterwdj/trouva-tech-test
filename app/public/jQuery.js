$(document).ready(function () {
  $('button.add-to-collection').click(function() {
    const productId = $(this).parent().prop('id');
    const collectionId = $(`#${productId} select :selected`).val();
    $.post(`/collections/${collectionId}`, { productId, collectionId });
    $(this).parent().append('<p class="confirmation-message">This lucky find has been saved to your collection!</p>');
  });
});
