import { makeAutoObservable } from "mobx";
import { mokData } from "../data/mokData";
import { filterAll } from "../helpers/helpers";

class State {
  // пoки взяв тип эні, а так рoзпишу тип який буде летіти з беку
  dataForTable: any = [];
  constructor() {
    makeAutoObservable(this);
  }

  search: string = "";

  handleSearch(e: any) {
    this.search = e.target.value;
  }

  //Тут будуть функції для oтримання данних с беку, пoки беру з мoк файлу
  fetchData() {
    setTimeout(() => {
      this.dataForTable = [...mokData];
    }, 2000);
  }

  get serchData() {
    return this.search === ""
      ? this.dataForTable
      : filterAll(this.dataForTable, this.search);
  }
}

export default new State();
