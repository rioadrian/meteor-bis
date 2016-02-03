Template.chatDetail.rendered = function(){
    $('div.navbar-custom').hide();
}

Template.chatDetail.destroyed = function(){
    $('div.navbar-custom').show();
}