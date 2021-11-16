import {
  GET_CATEGORY_ALL,
  GET_SUB_CATEGORY_BY_CATEGORY,
  GET_USER_PROFILE,
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
}
