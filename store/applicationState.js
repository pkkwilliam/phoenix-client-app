import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    bearerToken: "",
    category: {
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
  },
  mutations: {
    setBearerToken(state, bearerToken) {
      state.bearerToken = bearerToken;
    },
    setCategory(state, categories) {
      state.category = {
        dirty: false,
        content: categories,
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
  },
});

export default store;
