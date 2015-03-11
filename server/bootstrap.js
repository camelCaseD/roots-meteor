// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
  if (Lists.find().count() === 0) {
    var data = [
      {name: "#81-90",
       items: [
           {
               root: "medi",
               definition: "middle"
           },

           {
               root: "mega",
               definition: "great"
           },

           {
               root: "mem, men",
               definition: "remember"
           },

           {
               root: "meter, metr",
               definition: "measure"
           },

           {
               root: "micro",
               definition: "small"
           },

           {
               root: "mis",
               definition: "wrong, bad, hate"
           },

           {
               root: "mit, miss",
               definition: "send"
           },

           {
               root: "moll",
               definition: "soft"
           },

           {
               root: "mon",
               definition: "warn"
           },

           {
               root: "mono",
               definition: "one"
           }
       ]
      }
    ];

    var timestamp = (new Date()).getTime();
    _.each(data, function(list) {
      var list_id = Lists.insert({name: list.name});

      _.each(list.items, function(root) {
        Todos.insert({listId: list_id,
                      root: root.root,
                      definition: root.definition,
                      createdAt: new Date(timestamp)});
        timestamp += 1; // ensure unique timestamp.
      });
    });
  }
});
