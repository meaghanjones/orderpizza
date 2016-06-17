
//backend
var Pizza = function (toppings, size, price) {
  this.toppings = toppings;
  this.pizzaSize = size;
  this.price = price;
}

Pizza.prototype.price = function(){
  return this.topping + this.pizzaSize;
}


//user interface logic

$(document).ready(function() {

  $("#price-calculate").click(function() {

    var toppings = $("input:checkbox:checked").foreach(function(toppings){
          var toppingsArray = [];
          toppingsArray.push(toppings);
        })
        var size = $("#size").val();
        var newPizza = new Pizza(toppings, size);
        var pizzaPrice = newPizza.price();


          $("#pizzapriceoutput").append("<p>" + pizzaPrice + "</p>");
    });


      });
