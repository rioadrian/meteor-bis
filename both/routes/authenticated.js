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

authenticatedRoutes.route( '/addBusiness', {
  name: 'addBusiness',
  action() {
    BlazeLayout.render( 'default', { yield: 'addBusiness' } );
  }
});

authenticatedRoutes.route( '/createBusiness', {
  name: 'createBusiness',
  action() {
    BlazeLayout.render( 'default', { yield: 'createBusiness' } );
  }
});

authenticatedRoutes.route( '/createProduct', {
  name: 'createProduct',
  action() {
    BlazeLayout.render( 'default', { yield: 'createProduct' } );
  }
});

authenticatedRoutes.route( '/newDashboard', {
  name: 'newDashboard',
  action() {
    BlazeLayout.render( 'default', { yield: 'newDashboard' } );
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
