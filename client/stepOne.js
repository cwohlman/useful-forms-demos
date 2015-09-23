Forms.mixin(Template.stepOne);

Template.stepOne.events({
  'documentSubmit': function (e, tmpl, doc) {
    Contacts.insert(doc, function (error) {
      if (error)
        alert('Could not save!');
      else
        alert('Saved!');
    });
  }
});
