const authenticatedRoutes = FlowRouter.group({
  name: 'authenticated'
});

//authenticatedRoutes.route( '/', {
//  name: 'index',
//  action() {
//    BlazeLayout.render( 'default', { yield: 'index' } );
//  }
//});

authenticatedRoutes.route( '/dashboard', {
  name: 'dashboard',
  action() {
    BlazeLayout.render( 'default', { yield: 'dashboard' } );
  }
});

authenticatedRoutes.route( '/dashboardEdit', {
  name: 'dashboardEdit',
  action() {
    BlazeLayout.render( 'default', { yield: 'dashboardEdit' } );
  }
});

authenticatedRoutes.route( '/chatDetail', {
  name: 'chatDetail',
  action() {
    BlazeLayout.render( 'default', { yield: 'chatDetail' } );
  }
});

authenticatedRoutes.route( '/bookmarks', {
  name: 'bookmarks',
  action() {
    BlazeLayout.render( 'default', { yield: 'bookmarks' } );
  }
});

authenticatedRoutes.route( '/chatList', {
  name: 'chatList',
  action() {
    BlazeLayout.render( 'default', { yield: 'chatList' } );
  }
});

authenticatedRoutes.route( '/businessDetail', {
  name: 'businessDetail',
  action() {
    BlazeLayout.render( 'default', { yield: 'businessDetail' } );
  }
});
