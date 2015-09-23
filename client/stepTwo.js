Forms.mixin(Template.stepTwo);

Template.stepTwo.events({
  'click button[data-name]': function (e, tmpl) {
    var form = Forms.instance();
    var name = $(e.currentTarget).data('name');
    var oldValue = form.doc(name);
    form.change(name, !oldValue, e.currentTarget, e);
  }
});
