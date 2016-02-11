Template.login.onRendered( () => {
  Modules.client.login( { form: "#login", template: Template.instance() } );
});

Template.login.events({
  'submit form': ( event ) => event.preventDefault()
});

//Template.login.rendered = function(){
//    $('body').addClass('bs-docs-home');
//}
//
//Template.login.destroyed = function(){
//    $('body.bs-docs-home').removeClass('bs-docs-home');
//}
