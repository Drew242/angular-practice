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
      canPurchase: true,
      soldOut: false,
    },
    {
      name: 'Turtle',
      price: 24.95,
      description: 'May move slow, but enjoys every minute',
      canPurchase: true,
      soldOut: false,
    },
    {
      name: 'Lion',
      price: 3495.50,
      description: 'Would you really want this guy in your house!?',
      canPurchase: false,
      soldOut: false,
    },
    {
      name: 'Hamster',
      price: 8.95,
      description: 'Definitely exercises more than you...',
      canPurchase: true,
      soldOut: false,
    },
    {
      name: 'Cat',
      price: 45.50,
      description: 'Hates you already',
      canPurchase: true,
      soldOut: false,
    }
  ];
})();
