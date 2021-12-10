import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    address: {
      dirty: true,
      content: [],
    },
    bearerToken: "",
    category: {
      dirty: true,
      content: [],
    },
    buyerPendingOrder: {
      dirty: true,
      content: [],
    },
    itemPagination: {
      currentPage: undefined,
      dirty: true,
    },
    orderConfirm: {
      deliveryAddress: {},
      paymentChannel: {},
    },
    sellerPendingOrder: {
      dirty: true,
      content: [],
    },
    subCategory: {
      content: {},
    },
    userProfile: {
      dirty: true,
      profile: {},
    },
    userSaveItem: {
      dirty: true,
      content: [],
    },
    userViewItem: {
      dirty: true,
      content: [],
    },
  },
  mutations: {
    setAddress(state, addresses) {
      state.address = {
        dirty: false,
        content: addresses,
      };
    },
    setBearerToken(state, bearerToken) {
      state.bearerToken = bearerToken;
    },
    setBuyerPendingOrder(state, buyerPendingOrder) {
      state.buyerPendingOrder = {
        dirty: false,
        content: buyerPendingOrder,
      };
    },
    setCategory(state, categories) {
      state.category = {
        dirty: false,
        content: categories,
      };
    },
    setItemPagination(state, itemPagination) {
      state.itemPagination = itemPagination;
    },
    setItemPaginationClean(state) {
      state.itemPagination = {
        ...state.itemPagination,
        dirty: false,
      };
    },
    setOrderConfirm(state, orderConfirm) {
      state.orderConfirm = orderConfirm;
    },
    setSellerPendingOrder(state, sellerPendingOrder) {
      state.sellerPendingOrder = {
        dirty: false,
        content: sellerPendingOrder,
      };
    },
    setSubCategory(state, { category, subCategories }) {
      const content = state.subCategory.content;
      content[category] = subCategories;
      state.subCategory = {
        content,
      };
    },
    setUserProfile(state, userProfile) {
      state.userProfile = {
        dirty: false,
        profile: userProfile,
      };
    },
    setUserSaveItem(state, userSaveItem) {
      state.userSaveItem = {
        dirty: false,
        content: userSaveItem,
      };
    },
    setUserViewItem(state, userViewItem) {
      state.userViewItem = {
        dirty: false,
        content: userViewItem,
      };
    },
  },
});

export default store;
