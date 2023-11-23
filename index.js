class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b)=> {
      if (a>b) {
        return 1;
      }else if (a<b){
        return -1;
      }else {
        return 0;
      }
    })
    this.length = this.items.length
  }

  get(pos) {
    if (pos>this.items.length-1) {
      throw new Error ("OutOfBounds")
    }else{
      return this.items[pos]
    }
  }

  max() {
    if (this.length === 0){
      throw new Error ("EmptySortedList")
    }else{
      return this.items [this.length-1]
    }
  }

  min() {
    if (this.length === 0){
      throw new Error ("EmptySortedList")
    }else{
      return this.items[0]
    }
  }

  sum() {
    if (this.length === 0){
      return 0
    }else{
    return this.items.reduce((total, currentValue) =>{
      return total + currentValue;
    }, 0)}
  }

  avg() {
    if (this.length === 0){
      throw newError ("EmptySortedList")
    }else{
      return this.sum() / this.length;
    }
  }
}

module.exports = SortedList;
