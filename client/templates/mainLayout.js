Template.mainLayout.helpers({
  settings: function(){
    return {
      collection: Items,
      showFilter: true,
      showColumnToggles: true,
      fields: [
        {fieldID: 'nameField', key: 'name', label: 'Item'},
        {key: 'desc', label: 'Description'},
        {key: 'isRentable', label: 'Rentable'},
        {key: 'isAvailable', label: 'Available'},
        {key: 'amount', label: 'Count'},
        {key: 'customProps', label: 'Custom'},
      ]
    };
  }
});

Template.mainLayout.events({
  'mouseup .reactive-table tbody tr': function (event) {
    // Selects the selelected item from the table
    var selectedItem = this;
    Session.set('selectedItem', selectedItem);
  },

  "click #modalLaunch": function(e, template) {
    e.preventDefault();
    $('#myModal').modal('toggle');
  }

});
