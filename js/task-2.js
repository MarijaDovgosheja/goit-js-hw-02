function getShippingMessage(country, price, deliveryFee) {
    const totalPrice = price + deliveryFee; // Розрахунок загальної вартості
    return `Shipping to ${country} will cost ${totalPrice} credits`; // Повернення повідомлення
  }

  console.log(getShippingMessage( "Австралія" , 120 , 50 )); // "Доставка до Австралії коштуватиме 170 кредитів" 
  console.log(getShippingMessage( "Німеччина" , 80 , 20 )); // "Доставка до Німеччини коштуватиме 100 кредитів" 
  console.log(getShippingMessage( "Швеція" , 100 , 20 )); // "Доставка до Швеції коштуватиме 120 кредитів"
