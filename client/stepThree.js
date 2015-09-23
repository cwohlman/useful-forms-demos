Forms.mixin(Template.stepThree);

Template.stepThree.events({
  'documentSubmit': function (e, tmpl, doc) {
    var form = Forms.instance();
    Comments.insert(doc, function (error) {
      if (error)
        form.errors([{
          message: error.message
          , name: 'comment'
        }]);
    });
  }
});
