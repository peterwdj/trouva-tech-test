$(document).ready(function () {
  $('.add-to-collection').click(function() {
    const productId = ($(this).parent().prop('id'));
    const collectionId = $(`#${productId} select :selected`).val();
    $.post(`/collections/${collectionId}`, { productId, collectionId });
  });
});
