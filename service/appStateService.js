import {
  GET_PARCEL_ALL,
  GET_ACTIVE_SHOP,
  GET_USER_PROFILE,
  GET_ANNOUNCEMENT_ALL,
  GET_CAROUSEL_IMAGE_ALL,
  GET_COMPANY_CUSTOMISE,
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

  getAnnouncement(force = false) {
    const { dirty, content } = this.store.state.announcement;
    return new Promise((resolve, reject) => {
      if (dirty || force) {
        this.execute(GET_ANNOUNCEMENT_ALL()).then((announcements) => {
          const sortedAnnouncement = announcements.sort(
            (a1, a2) => a2.createTime - a1.createTime
          );
          this.store.commit("setAnnouncement", sortedAnnouncement);
          return resolve(sortedAnnouncement);
        });
      } else {
        return resolve(content);
      }
    });
  }

  getCarouselImage(force = false) {
    const { dirty, content } = this.store.state.carouselImage;
    return new Promise((resolve, reject) => {
      if (dirty || force) {
        this.execute(GET_CAROUSEL_IMAGE_ALL()).then((carouselImages) => {
          this.store.commit("setCarouselImage", carouselImages);
          return resolve(carouselImage);
        });
      } else {
        return resolve(content);
      }
    });
  }

  getCompanyCustomise(force = false) {
    const { dirty, content } = this.store.state.companyCustomise;
    return new Promise((resolve, reject) => {
      if (dirty || force) {
        this.execute(GET_COMPANY_CUSTOMISE()).then((companyCustomise) => {
          this.store.commit("setCompanyCustomise", companyCustomise);
          return resolve(companyCustomise);
        });
      } else {
        return resolve(content);
      }
    });
  }

  getParcels(force = false) {
    const { dirty, parcels } = this.store.state.parcel;
    return new Promise((resolve, reject) => {
      if (dirty || force) {
        this.execute(GET_PARCEL_ALL()).then((parcels) => {
          const sortedParcel = parcels.sort((p1, p2) =>
            !p1.active && p2.active ? 1 : -1
          );
          this.store.commit("setParcel", sortedParcel);
          return resolve(parcels);
        });
      } else {
        return resolve(parcels);
      }
    });
  }

  getShops(force = false) {
    const { dirty, shops } = this.store.state.shop;
    return new Promise((resolve, reject) => {
      if (dirty || force) {
        this.execute(GET_ACTIVE_SHOP()).then((shops) => {
          this.store.commit("setShop", shops);
          return resolve(shops);
        });
      } else {
        return resolve(shops);
      }
    });
  }

  getUserProfile(force = false) {
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
