
//backend
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.pizzaSize = size;
}

Pizza.prototype.price = function(){
  return this.topping + this.pizzaSize;
}


//user interface logic
$(document).ready(function() {




// $("#add-address").click(function() {
  //   $("#new-addresses").append('<div class="new-address">' +
  //                               '<div class="form-group">' +
  //                               '<label for="new-street">Street</label>' +
  //                               '<input type="text" class="form-control new-street">' +
  //                                '</div>' +
  //
  //                                '<div class="form-group">' +
  //                                '<label for="new-city">City</label>' +
  //                                '<input type="text" class="form-control new-city">' +
  //                                '</div>' +
  //
  //                                '<div class="form-group">' +
  //                                '<label for="new-state">State</label>' +
  //                                '<input type="text" class="form-control new-state">' +
  //                                '</div>' +
  //                                '</div>');
  // });

  $("form#price-calculate").submit(function() {
    var inputtedTopping = $("input#new-first-name").val();
    var inputtedPizzaSize = $("input#new-last-name").val();
    var pizzaPrice = new Pizza(inputtedTopping, inputtedPizzaSize);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.fullName());

      });
    });
