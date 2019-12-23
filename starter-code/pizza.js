// Write your Pizza Builder JavaScript in this file.


//Iteration 1
$(document).ready(function() {

  let price = 21;
  let newPrice;
  let getPriceElement = $('.price > strong')[0];
  let pepperoniInPlace = true;

  $(".btn-pepperoni").click(function(){
    $('.pep').toggle();
    if(!pepperoniInPlace){
      //if(pepperoniInPlace == false)
      price += 1;
      getPriceElement.innerText = "$"+price;
      pepperoniInPlace = true;
    } else {
      price -= 1;
      getPriceElement.innerText = "$"+price;
      pepperoniInPlace = false;
    }
  });
    
  $(".btn-green-peppers").click(function(){
    $('.green-pepper').toggle();
    if(!pepperoniInPlace){
      price ++;
      getPriceElement.innerText = "$"+price;
      pepperoniInPlace = true;
    } else {
      price --;
      getPriceElement.innerText = "$"+price;
      pepperoniInPlace = false;
    }
  });

  $(".btn-mushrooms").click(function(){
    $('.mushroom').toggle();
    if(!pepperoniInPlace){
      price += 1;
      getPriceElement.innerText = "$"+price;
      pepperoniInPlace = true;
    } else {
      price -= 1;
      getPriceElement.innerText = "$"+price;
      pepperoniInPlace = false;
    }
  });

  //Iteration 2
  $(".btn-sauce").click(function(){
    $(".sauce").toggleClass("sauce-white")
    if(!pepperoniInPlace){
      price += 5;
      getPriceElement.innerText = "$"+price;
      pepperoniInPlace = true;
    } else {
      price -= 5;
      getPriceElement.innerText = "$"+price;
      pepperoniInPlace = false;
    }
  })
  $(".btn-crust").click(function(){
    $(".crust").toggleClass("crust-gluten-free")
    if(!pepperoniInPlace){
      price += 5;
      getPriceElement.innerText = "$"+price;
      pepperoniInPlace = true;
    } else {
      price -= 5;
      getPriceElement.innerText = "$"+price;
      pepperoniInPlace = false;
    }
  })

  //Iteration 3
  $(".btn-sauce.active").removeClass("active")
  $(".btn-crust.active").removeClass("active")



});