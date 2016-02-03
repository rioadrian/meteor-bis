Template.signup.onRendered( () => {
  Modules.client.signup({
    form: "#signup",
    template: Template.instance()
  });
});

Template.signup.events({
  'submit form': ( event ) => event.preventDefault()
});

Template.signup.rendered = function(){
    $('body').addClass('bs-docs-home');
}

Template.signup.destroyed = function(){
    $('body.bs-docs-home').removeClass('bs-docs-home');
}