import { makeAutoObservable } from "mobx"

class UserStore {
  user = {
    fullname: '',
    password: '',
    email: ''
  };
  users = [];

  constructor() {
    makeAutoObservable(this)
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.user = { ...this.user, [name]: value }
  }
  addUsers() {
    this.users.push(this.user);
  }
}

const userStore = new UserStore()

export default userStore;

