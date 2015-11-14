// ---- PUBLICATIONS ---- //
Meteor.publish("userItems", function() {
  var currentUser = this.userId;
  return Items.find({createdBy: currentUser});
});
