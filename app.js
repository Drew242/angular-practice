(function(){
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.products = animals;
  });

  var animals = [
    {
      name: 'Dog',
      price: 150.55,
      description: 'Man\'s best friend',
      reviews: [
        'Just taught mine fetch \n\t-first time owner',
        'Embarassing \n\t-not great at training animals',
        'Just finished our first hike \n\t-outdoor enthusiast',
      ],
      canPurchase: true,
      soldOut: false,
      image: "images/dog.jpeg",
    },
    {
      name: 'Turtle',
      price: 24.95,
      description: 'May move slow, but enjoys every minute',
      reviews: [
        'I love turtles \n\t-little boy',
        'Yep, they\'re great \n\t-other person',
      ],
      canPurchase: true,
      soldOut: false,
      image: "images/turtle.jpg",
    },
    {
      name: 'Lion',
      price: 3495.50,
      description: 'Would you really want this guy in your house!?',
      reviews: [
        'Almost died \n\t-almost everyone',
        'Died \n\t-the rest',
      ],
      canPurchase: false,
      soldOut: false,
      image: "images/lion.jpeg",
    },
    {
      name: 'Hamster',
      price: 8.95,
      description: 'Definitely exercises more than you...',
      canPurchase: true,
      soldOut: false,
      image: "images/hamster.jpeg",
    },
    {
      name: 'Cat',
      price: 45.50,
      description: 'Hates you already',
      reviews: [
        'Much easier than meeting people \n\t-introverts',
        'I have nine and my family is starting to worry\n\t-friendly person down the block',
      ],
      canPurchase: true,
      soldOut: false,
      image: "images/cat.jpeg"
    }
  ];

  app.controller('PanelController', function(){
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };
    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };
  });
  
})();
