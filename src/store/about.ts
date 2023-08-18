import { Store } from "../core/core";

interface State {
  photo: string;
  name: string;
  email: string;
  blog: string;
  github: string;
  repository: string;
}

export default new Store<State>({
  photo: "https://avatars.githubusercontent.com/u/118440358?v=4",
  name: "DevKonis / KohGeun",
  email: "kokun9212@gmail.com",
  blog: "https://heropy.blog",
  github: "https://github.com/DevKonis",
  repository: "https://github.com/DevKonis/Movie-Search-App",
});
