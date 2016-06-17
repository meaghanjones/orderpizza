
//backend
function Pizza (size, price) {
  // this.toppings = [];
  this.pizzaSize = size;
  this.price = price;
}

// Pizza.prototype.price = function(){
//   return this.toppings + this.pizzaSize;
// }


//user interface logic

$(document).ready(function() {

  $("#price-calculate").click(function() {

    // var toppings = $("input:checkbox:checked").foreach(function(toppings){
    //       var toppingsArray = [];
    //       toppingsArray.push(toppings);
    //     })
        var size = $("#size").val();

        var newPizza = new Pizza(size, price);
        // var pizzaPrice = newPizza.price();

    $("div#pizzapriceoutput").append("<p>" + size + "</p>");
    });


      });
