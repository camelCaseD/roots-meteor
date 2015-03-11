Template.todosItem.events({
  'submit form, blur input[type=text]': function(e) {
      e.preventDefault();

      if (e.target.nodeName === "INPUT") {
          var target = e.target.parentElement;
      } else {
          var target = e.target;
      }

      var val = target.querySelector("input[type=text]").value;
      if (val) {
          if (val.toLowerCase() === this.definition) {
              target.querySelector("input[type=checkbox]").checked = true;
              target.querySelector("input[type=checkbox]").classList.remove("incorrect");
          } else {
              target.querySelector("input[type=checkbox]").checked = true;
              target.querySelector("input[type=checkbox]").classList.add("incorrect");
          }
      } else {
          target.querySelector("input[type=checkbox]").checked = false;
          target.querySelector("input[type=checkbox]").classList.remove("incorrect");
      }
  }
});