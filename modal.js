function toggleModalClasses(event) {
  console.log("entou")
  var modalId = event.currentTarget.dataset.modalId;
  var modal = $(modalId);
  modal.toggleClass('is-active');
  $('html').toggleClass('is-clipped');
};

$(document).ready(function() {
  $('.open-modal').click(toggleModalClasses);

  $('.close-modal').click(toggleModalClasses);

  $('.modal-background').click(toggleModalClasses);
})