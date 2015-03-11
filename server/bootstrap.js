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
      },

      {name: "#91-100",
        items: [
        {
            root: "mor, mort",
            definition: "dead"
        },

        {
            root: "morph",
            definition: "shape"
        },

        {
            root: "mut",
            definition: "change"
        },

        {
            root: "nat",
            definition: "born"
        },

        {
            root: "nau, nav",
            definition: "ship"
        },

        {
            root: "neg",
            definition: "not, deny"
        },

        {
            root: "neo",
            definition: "new"
        },

        {
            root: "nom, nym",
            definition: "name"
        },

        {
            root: "nov",
            definition: "new"
        },

        {
            root: "numer",
            definition: "number"
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
