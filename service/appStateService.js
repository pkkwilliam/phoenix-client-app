import {
  GET_ADDRESS_ALL,
  GET_BUYER_PENDING_ORDERS,
  GET_CATEGORY_ALL,
  GET_SELLER_PENDING_ORDERS,
  GET_SUB_CATEGORY_BY_CATEGORY,
  GET_USER_PROFILE,
  GET_USER_SAVE_ITEM,
  GET_USER_VIEW_ITEM,
} from "./service";

export default class AppStateService {
  static _execute;
  static _store;

  constructor(store, execute) {
    this._store = store;
    this._execute = execute;
  }

  get execute() {
    return this._execute;
  }

  get store() {
    return this._store;
  }

  getAddress({ force = false } = {}) {
    const { dirty, content } = this.store.state.address;
    return new Promise((resolve, reject) => {
      if (dirty || force) {
        this.execute(GET_ADDRESS_ALL()).then((addresses) => {
          this.store.commit("setAddress", addresses);
          return resolve(addresses);
        });
      } else {
        return resolve(content);
      }
    });
  }

  getBuyerPendingOrder({ force = false } = {}) {
    const { dirty, content } = this.store.state.buyerPendingOrder;
    return new Promise((resolve, reject) => {
      if (dirty || force) {
        this.execute(GET_BUYER_PENDING_ORDERS()).then((buyerPendingOrder) => {
          this.store.commit("setBuyerPendingOrder", buyerPendingOrder);
          return resolve(buyerPendingOrder);
        });
      } else {
        return resolve(content);
      }
    });
  }

  getCategory({ force = false } = {}) {
    const { dirty, content } = this.store.state.category;
    return new Promise((resolve, reject) => {
      if (dirty || force) {
        this.execute(GET_CATEGORY_ALL()).then((categories) => {
          this.store.commit("setCategory", categories);
          return resolve(categories);
        });
      } else {
        return resolve(content);
      }
    });
  }

  getSellerPendingOrder({ force = false } = {}) {
    const { dirty, content } = this.store.state.sellerPendingOrder;
    return new Promise((resolve, reject) => {
      if (dirty || force) {
        this.execute(GET_SELLER_PENDING_ORDERS()).then((sellerPendingOrder) => {
          this.store.commit("setSellerPendingOrder", sellerPendingOrder);
          return resolve(sellerPendingOrder);
        });
      } else {
        return resolve(content);
      }
    });
  }

  // THIS NEED TO BE FIX, but dont waste time yet - problem: you need to loop through the object to check if sub category is existed
  getSubCategory(category, { force = false } = {}) {
    const { content } = this.store.state.subCategory;
    const categoryId = category.id;
    return new Promise((resolve, reject) => {
      if (!content[categoryId] || force) {
        this.execute(GET_SUB_CATEGORY_BY_CATEGORY(categoryId)).then(
          (subCategories) => {
            this.store.commit("setSubCategory", { category, subCategories });
            return resolve(subCategories);
          }
        );
      } else {
        return content[categoryId];
      }
    });
  }

  getUserProfile({ force = false } = {}) {
    const { dirty, profile } = this.store.state.userProfile;
    return new Promise((resolve, reject) => {
      if (dirty || force) {
        this.execute(GET_USER_PROFILE()).then((userProfile) => {
          this.store.commit("setUserProfile", userProfile);
          return resolve(userProfile);
        });
      } else {
        return resolve(profile);
      }
    });
  }

  getUserSaveItem({ force = false } = {}) {
    const { dirty, content } = this.store.state.userSaveItem;
    return new Promise((resolve, reject) => {
      if (dirty || force) {
        this.execute(GET_USER_SAVE_ITEM()).then((userSaveItem) => {
          this.store.commit("setUserSaveItem", userSaveItem);
          return resolve(userSaveItem);
        });
      } else {
        return resolve(content);
      }
    });
  }

  getUserViewItem({ force = false } = {}) {
    const { dirty, content } = this.store.state.userViewItem;
    return new Promise((resolve, reject) => {
      if (dirty || force) {
        this.execute(GET_USER_VIEW_ITEM()).then((userViewItem) => {
          this.store.commit("setUserViewItem", userViewItem);
          return resolve(userViewItem);
        });
      } else {
        return resolve(content);
      }
    });
  }
}
