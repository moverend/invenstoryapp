// ---- Iron:Router Routes ---- //

Router.configure({
  layoutTemplate: "mainLayout",
  loadingTemplate: "loading"
});

Router.route('/dashboard', {
  name: 'dashboard',
  template: 'dashboardView'
});

Router.route('/inventory', {
  name: 'inventory',
  template: 'inventoryView'
});

Router.route('/customers', {
  name: 'customers',
  template: 'customersView'
});

Router.route('/orders', {
  name: 'orders',
  template: 'ordersView'
});

Router.route('/settings', {
  name: 'settings',
  template: 'settingsView'
});




// Router.route('/list/:_id', {
//
//   name: 'listPage',
//   template: 'listPage',
//
//   data: function() {
//     var currentList = this.params._id,
//       currentUser = Meteor.userId();
//     return Lists.findOne({
//       _id: currentList,
//       createdBy: currentUser
//     });
//   },
//
//   onBeforeAction: function() {
//     var currentUser = Meteor.userId();
//     if (currentUser) {
//       this.next();
//     } else {
//       // Save's the current url for after login
//       this.render('login');
//       //instead of redirecting to 'login'
//       //Router.go('login')
//     }
//   },
//
//   waitOn: function() {
//     var currentList = this.params._id;
//     return Meteor.subscribe("todos", currentList);
//   }
//
// });
