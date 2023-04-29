import { makeAutoObservable } from "mobx";

export default class UserStore {
  constructor() {
    this.isAuth = false;
    this._user = {};
    makeAutoObservable(this);
  }

  setIsAuth(boolean) {
    this._isAuth = boolean;
  }
  setUser(user) {
    this.user = user;
  }
  get isAuth() {
    return this._user;
  }
}
