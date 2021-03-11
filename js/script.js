var calculate = document.getElementById('calculate');

calculate.addEventListener("click", function(){

  var burgerName = document.getElementById('burger-name').value;

  if (burgerName.length<1) {
    alert('Inserire nome');

  } else {
    var ingreds = document.getElementsByClassName('ingred');
    var finalPrice = 10;

    for (i=0;i<ingreds.length;i++){
      var ingred = ingreds[i];
      var checkedIngred = ingred.checked;

      if (checkedIngred) {
        var ingredPrice = parseInt(ingred.dataset.price);
        finalPrice += ingredPrice;
      }
    }

    var coupons = ['123qwe', '456rty', '789uio'];
    var userCoupon = document.getElementById('burger-coupon').value;

    if (coupons.includes(userCoupon)){
      finalPrice -= finalPrice/5;
    }

    // for (i=0;i<coupons.length;i++){
    //   var coupon = coupons[i];
    //
    //   if (userCoupon == coupon){
    //     finalPrice -= finalPrice/5;
    //   }
    // }

    var price = document.getElementById('price');
    price.innerHTML = finalPrice;
  }
});


var ingredients = document.getElementsByTagName('li');

for (var i=0;i<ingredients.length;i++){
  var ingredient = ingredients[i]

  ingredient.addEventListener('click', function(){
    var clickedIng = this;
    var clickedCheckbox = clickedIng.children[2];

    clickedCheckbox.checked = !clickedCheckbox.checked;

    var falseCheckbox = clickedIng.children[3];

    var falseUnchecked = falseCheckbox.classList.contains('fa-square');

    if (falseUnchecked){
      falseCheckbox.className = 'far' + ' fa-check-square';
    } else {
      falseCheckbox.className = 'far' + ' fa-square';
    }

  });

}
