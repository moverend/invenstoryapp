// ---- Iron:Router Routes ---- //

 if(Meteor.isClient){
   Accounts.onLogin(function(){
     Router.go('dashboard');
   });

   Accounts.onLogout(function(){
     Router.go('login');
   });
 }


Router.configure({
  layoutTemplate: "mainLayout",
  loadingTemplate: "loading"
});


Router.route("/", function() {
    if (Meteor.userId()) {
      this.redirect("dashboard");
    }
},
{
  name:"home",
  layoutTemplate: 'homeLayout'
});

Router.route("/login", {
  name:"login",
  template:"loginLayout",
  layoutTemplate: 'loginLayout'
});

Router.route('/dashboard', {
  name: 'dashboard',
  template: 'dashboardView'
});

Router.route('/inventory', {
  name: 'inventory',
  template: 'inventoryView',
  // subscriptions: function () {
  //   var currentUser = Meteor.userId();
  //   Meteor.subscribe("items", currentUser);
  // }
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


// catchall route
Router.route('/(.*)', function () {
    this.redirect('/');
});

// we want to be sure that the user is logging in
// for all routes but login
Router.onBeforeAction(function () {
    if (!Meteor.user() && !Meteor.loggingIn()) {
        this.redirect('/login');
    } else {
        // required by Iron to process the route handler
        this.next();
    }
}, {
    except: ['login', 'home']
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
