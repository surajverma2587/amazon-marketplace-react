export const getBasketItemsTotal = (basket) =>
  basket.reduce((acc, each) => acc + each.quantity, 0);
