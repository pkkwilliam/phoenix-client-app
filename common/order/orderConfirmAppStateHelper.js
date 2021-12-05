export function setOrderConfirmAddress(store, address) {
  store.commit("setOrderConfirm", {
    ...store.state.orderConfirm,
    address,
  });
}

export function setOrderConfirmItemDeliveryType(store, itemDeliveryType) {
  store.commit("setOrderConfirm", {
    ...store.state.orderConfirm,
    itemDeliveryType,
  });
}

export function setOrderConfirmItem(store, item) {
  store.commit("setOrderConfirm", {
    ...store.state.orderConfirm,
    item,
  });
}

export function setOrderConfirmPaymentChannel(store, paymentChannel) {
  store.commit("setOrderConfirm", {
    ...store.state.orderConfirm,
    paymentChannel,
  });
}

export function getOrderConform(store) {
  return store.state.orderConfirm;
}

export function getOrderConfirmAddress(store) {
  return store.state.orderConfirm.address;
}

export function getOrderConfirmItemDeliveryType(store) {
  return store.state.prderConfirm.deliveryType;
}

export function getOrderConfirmItem(store) {
  return store.state.orderConfirm.item;
}

export function getOrderConfirmPaymentChannel(store) {
  return store.state.orderConfirm.paymentChannel;
}
