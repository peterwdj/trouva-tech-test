$(document).ready(function() {
  $('.add-to-collection').click(function() {
    let productId = ($(this).parent().prop('id'));
    let collectionId = $(`#${productId} select :selected`).val();
    $.post(`/collections/${collectionId}`, {
      productId: productId,
      collectionId: collectionId
    });
  });
});
