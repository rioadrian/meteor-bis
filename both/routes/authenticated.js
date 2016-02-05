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

authenticatedRoutes.route( '/editProduct', {
  name: 'editProduct',
  action() {
    BlazeLayout.render( 'default', { yield: 'editProduct' } );
  }
});

authenticatedRoutes.route( '/changePassword', {
  name: 'changePassword',
  action() {
    BlazeLayout.render( 'default', { yield: 'changePassword' } );
  }
});

authenticatedRoutes.route( '/accountVerify', {
  name: 'accountVerify',
  action() {
    BlazeLayout.render( 'default', { yield: 'accountVerify' } );
  }
});

authenticatedRoutes.route( '/accountDeactivate', {
  name: 'accountDeactivate',
  action() {
    BlazeLayout.render( 'default', { yield: 'accountDeactivate' } );
  }
});

authenticatedRoutes.route( '/reportProblem', {
  name: 'reportProblem',
  action() {
    BlazeLayout.render( 'default', { yield: 'reportProblem' } );
  }
});

authenticatedRoutes.route( '/termsConditions', {
  name: 'termsConditions',
  action() {
    BlazeLayout.render( 'default', { yield: 'termsConditions' } );
  }
});

authenticatedRoutes.route( '/privacyPolicy', {
  name: 'privacyPolicy',
  action() {
    BlazeLayout.render( 'default', { yield: 'privacyPolicy' } );
  }
});

authenticatedRoutes.route( '/dashboardEmpty', {
  name: 'dashboardEmpty',
  action() {
    BlazeLayout.render( 'default', { yield: 'dashboardEmpty' } );
  }
});

authenticatedRoutes.route( '/searchEmpty', {
  name: 'searchEmpty',
  action() {
    BlazeLayout.render( 'default', { yield: 'searchEmpty' } );
  }
});

authenticatedRoutes.route( '/dashboardEditEmpty', {
  name: 'dashboardEditEmpty',
  action() {
    BlazeLayout.render( 'default', { yield: 'dashboardEditEmpty' } );
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

authenticatedRoutes.route( '/changePhoto', {
  name: 'changePhoto',
  action() {
    BlazeLayout.render( 'default', { yield: 'changePhoto' } );
  }
});

authenticatedRoutes.route( '/changeCover', {
  name: 'changeCover',
  action() {
    BlazeLayout.render( 'default', { yield: 'changeCover' } );
  }
});
