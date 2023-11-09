//Neetcode
//https://neetcode.io/problems/dynamicArray

class DynamicArray {
  /**
   * @constructor
   * @param {number} capacity
   */
  constructor(capacity) {
    this.capacity = capacity;
    this.arr = new Array(this.capacity);
    this.length = 0;
  }

  /**
   * @param {number} i
   * @returns {number}
   */
  get(i) {
    return this.arr[i];
  }

  /**
   * @param {number} i
   * @param {number} n
   * @returns {void}
   */
  set(i, n) {
    this.arr[i] = n;
  }

  /**
   * @param {number} n
   * @returns {void}
   */
  pushback(n) {
    if (this.capacity === this.length) {
      this.resize();
    }
    this.arr[this.length] = n;
    this.length++;
  }

  /**
   * @returns {number}
   */
  popback() {
    let tempArr = new Array(this.capacity);
    let pop = this.arr[this.length - 1];
    for (let i = 0; i < this.length - 1; i++) {
      tempArr[i] = this.arr[i];
    }
    this.arr = tempArr;
    this.length--;
    return pop;
  }

  /**
   * @returns {void}
   */
  resize() {
    this.capacity = this.capacity * 2;
    let tempArr = new Array(this.capacity);
    for (let i = 0; i < this.length; i++) {
      tempArr[i] = this.arr[i];
    }
    this.arr = tempArr;
  }

  /**
   * @returns {number}
   */
  getSize() {
    return this.length;
  }

  /**
   * @returns {number}
   */
  getCapacity() {
    return this.capacity;
  }
}
