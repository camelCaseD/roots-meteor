Template.todosItem.events({
  'submit form': function(e) {
      e.preventDefault();

      var val = e.target.querySelector("input[type=text]").value;
      if (val.toLowerCase() === this.definition) {
          e.target.querySelector("input[type=checkbox]").setAttribute("checked", true);
          e.target.querySelector("input[type=checkbox]").classList.remove("incorrect");
      } else {
          e.target.querySelector("input[type=checkbox]").setAttribute("checked", true);
          e.target.querySelector("input[type=checkbox]").classList.add("incorrect");
      }
  }
});