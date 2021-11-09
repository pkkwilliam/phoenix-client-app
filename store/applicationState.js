import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    announcement: {
      dirty: true,
      content: [],
    },
    carouselImage: {
      dirty: true,
      content: [],
    },
    companyCustomise: {
      dirty: true,
      content: {},
    },
    parcel: {
      dirty: true,
      parcels: [],
    },
    bearerToken: "",
    shop: {
      dirty: true,
      shops: [],
    },
    userProfile: {
      dirty: true,
      profile: {},
    },
  },
  mutations: {
    setAnnouncement(state, announcement) {
      state.announcement = {
        dirty: false,
        content: announcement,
      };
    },
    setBearerToken(state, bearerToken) {
      state.bearerToken = bearerToken;
    },
    setCarouselImage(state, carouselImage) {
      state.carouselImage = {
        dirty: false,
        content: carouselImage,
      };
    },
    setCompanyCustomise(state, companyCustomise) {
      state.companyCustomise = {
        dirty: false,
        content: companyCustomise,
      };
    },
    setParcel(state, parcels) {
      state.parcel = {
        dirty: false,
        parcels,
      };
    },
    setShop(state, shops) {
      state.shop = {
        dirty: false,
        shops,
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
