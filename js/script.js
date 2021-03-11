var calculate = document.getElementById('calculate');

calculate.addEventListener("click", function(){

  var burgerName = document.getElementById('burger-name').value;

  if (burgerName.length<0) {
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

    var coupons = ['123asd', '456qwe', '789zxc'];
    var burgerCoupon = document.getElementById('burger-coupon').value;

    for (i=0;i<coupons.length;i++){
      var coupon = coupons[i];

      if (burgerCoupon == coupon){
        finalPrice -= finalPrice/5;
      }
    }

    var price = document.getElementById('price');
    price.innerHTML = finalPrice;
  }
});
