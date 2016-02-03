Template.index.onCreated( () => {
  Template.instance().subscribe( 'template' );
});

Template.index.rendered = function(){
    $('body').addClass('bs-docs-home');
}

Template.index.destroyed = function(){
    $('body.bs-docs-home').removeClass('bs-docs-home');
}