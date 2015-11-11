// ---- Iron:Router Routes ---- //

  Router.configure({
    layoutTemplate: "mainLayout",
    // loadingTemplate: "loading"
  })

  Router.route('/', {
    name: 'addItem',
    template: 'addItem',

    waitOn: function() {
      return Meteor.subscribe("items");
    }
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
