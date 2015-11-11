// ---- COLLECTION: Inventory items ---- //

Items = new Mongo.Collection("items");

Items.allow({
  insert: function(userId, doc) {
    return !!userId;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});

var Schema = {};

Schema.customProp = new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  },
  description: {
    type: String,
    label: "Description"
  },
  amount: {
    type: Number,
    label: "Amount"
  }
});



Schema.item = new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  },
  desc: {
    type: String,
    label: "Description"
  },
  amount: {
    type: String,
    label: "Amount",
    defaultValue: 1
  },
  isRentable: {
    type: Boolean,
    label: "Rentable",
    defaultValue: false,
    optional: true
  },
  customProps: {
    type: [Schema.customProp],
    optional: true
  },
  //Hidden properties
  createdBy: {
    type: String,
    label: "Created by",
    autoValue: function() {
      return this.userId;
    },
    autoform: {
      type: "hidden"
    }
  },
  isAvailable: {
    type: Boolean,
    label: "Available",
    autoValue: function() {
      if (this.amount !== 0) {
        return true;
      } else {
        return false;
      }
    },
    autoform: {
      type: "hidden"
    }
  }
});


// Attach Items schema to Items Collection
Items.attachSchema(Schema.item);
