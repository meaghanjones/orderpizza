
//backend
var Pizza = function(size, toppings) {
  this.toppings = toppings;
  this.pizzaSize = size;
}

Pizza.prototype.price = function(){
  return this.pizzaSize;
}


//user interface logic

$(document).ready(function() {

  $("#price-calculate").click(function() {
    var toppingsArray = [];
    var toppings = $("input:checkbox[name=type]:checked").each(function(){
          toppingsArray.push($(this).val());
        });

    var size = $("input[name='pizzasizes']:checked").val();

        var newPizza = new Pizza(size, toppings);
        var pizzaPrice = newPizza.price();

    $("#pizzapriceoutput").text("You owe: $" + pizzaPrice + ".");
    });


      });
