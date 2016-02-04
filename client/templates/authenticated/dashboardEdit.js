Template.dashboardEdit.onRendered( () => {
  autosize(document.querySelectorAll('.auto-size'));
  new CBPGridGallery(document.getElementById('grid-gallery'));
});
