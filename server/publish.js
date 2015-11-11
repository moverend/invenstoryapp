// ---- PUBLICATIONS ---- //
Meteor.publish("items", function(){
  return Items.find();
});
